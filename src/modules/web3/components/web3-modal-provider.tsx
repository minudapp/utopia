"use client";

import { Check, ChevronLeft, Copy, RotateCcw } from "lucide-react";
import Image from "next/image";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { formatEther } from "viem";
import {
  type Connector,
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useEnsName,
} from "wagmi";

import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import {
  Web3Modal,
  Web3ModalBody,
  Web3ModalContent,
  Web3ModalDescription,
  Web3ModalFooter,
  Web3ModalHeader,
  Web3ModalTitle,
} from "./web3-modal";

const MODAL_CLOSE_DURATION = 320;

const Web3ModalContext = createContext<{
  pendingConnector: Connector | null;
  setPendingConnector: React.Dispatch<React.SetStateAction<Connector | null>>;
  isConnectorError: boolean;
  setIsConnectorError: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  pendingConnector: null,
  setPendingConnector: () => null,
  isConnectorError: false,
  setIsConnectorError: () => false,
  open: false,
  setOpen: () => false,
});

function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  const { status, address } = useAccount();
  const [pendingConnector, setPendingConnector] = useState<Connector | null>(
    null,
  );
  const [isConnectorError, setIsConnectorError] = useState(false);
  const [open, setOpen] = useState(false);
  const isConnected = address && !pendingConnector;

  useEffect(() => {
    if (status === "connected" && pendingConnector) {
      setOpen(false);

      const timeout = setTimeout(() => {
        setPendingConnector(null);
        setIsConnectorError(false);
      }, MODAL_CLOSE_DURATION);

      return () => clearTimeout(timeout);
    }
  }, [status, setOpen, pendingConnector, setPendingConnector]);

  const contextValue = useMemo(
    () => ({
      pendingConnector,
      setPendingConnector,
      isConnectorError,
      setIsConnectorError,
      open,
      setOpen,
    }),
    [isConnectorError, open, pendingConnector],
  );

  return (
    <Web3ModalContext.Provider value={contextValue}>
      {children}
      <Web3Modal open={open} onOpenChange={setOpen}>
        <Web3ModalContent>
          {isConnected ? <Account /> : <Connectors />}
        </Web3ModalContent>
      </Web3Modal>
    </Web3ModalContext.Provider>
  );
}

function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: userBalance } = useBalance({ address });
  const context = useContext(Web3ModalContext);

  const formattedAddress = address?.slice(0, 6) + "•••" + address?.slice(-4);
  const formattedUserBalace = userBalance?.value
    ? parseFloat(formatEther(userBalance.value)).toFixed(4)
    : undefined;

  function handleDisconnect() {
    context.setOpen(false);
    setTimeout(() => {
      disconnect();
    }, MODAL_CLOSE_DURATION);
  }

  return (
    <>
      <Web3ModalHeader>
        <Web3ModalTitle>Connected</Web3ModalTitle>
        <Web3ModalDescription className="sr-only">
          Account modal for your connected Web3 wallet.
        </Web3ModalDescription>
      </Web3ModalHeader>
      <Web3ModalBody className="h-[280px]">
        <div className="flex w-full flex-col items-center justify-center gap-8 md:pt-5">
          <div className="flex size-24 items-center justify-center">
            <Image
              className="rounded-full"
              src={`https://avatar.vercel.sh/${address}?size=150`}
              alt="User gradient avatar"
              width={150}
              height={150}
            />
          </div>

          <div className="space-y-1 px-3.5 text-center sm:px-0">
            <div className="flex items-center gap-1.5">
              <h1 className="text-xl font-semibold">
                <div>{ensName ? `${ensName}` : formattedAddress}</div>
              </h1>
              <CopyAddressButton />
            </div>
            <p className="text-muted-foreground text-sm text-balance">
              {`${formattedUserBalace ?? "0.00"} ETH`}
            </p>
          </div>

          <Button className="w-full" onClick={handleDisconnect}>
            Disconnect
          </Button>
        </div>
      </Web3ModalBody>
    </>
  );
}

function Connectors() {
  const context = useContext(Web3ModalContext);

  return (
    <>
      <Web3ModalHeader>
        <BackChevron />
        <Web3ModalTitle>
          {context.pendingConnector?.name ?? "Connect Wallet"}
        </Web3ModalTitle>
        <Web3ModalDescription className="sr-only">
          Connect your Web3 wallet or create a new one.
        </Web3ModalDescription>
      </Web3ModalHeader>
      <Web3ModalBody>
        {context.pendingConnector ? <WalletConnecting /> : <WalletOptions />}
      </Web3ModalBody>
      <Web3ModalFooter>
        <div className="h-0" />
      </Web3ModalFooter>
    </>
  );
}

function WalletConnecting() {
  const context = useContext(Web3ModalContext);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-9 md:pt-5">
      {context.pendingConnector?.icon && (
        <div className="relative flex size-[116px] items-center justify-center rounded-2xl border p-3">
          <Image
            src={context.pendingConnector?.icon}
            alt={context.pendingConnector?.name}
            className="size-full overflow-hidden rounded-2xl"
            width={116}
            height={116}
          />
          {/* <img /> */}
          {context.isConnectorError ? <RetryConnectorButton /> : null}
        </div>
      )}

      <div className="space-y-3.5 px-3.5 text-center sm:px-0">
        <h1 className="text-xl font-semibold">
          {context.isConnectorError ? "Request Error" : "Requesting Connection"}
        </h1>
        <p className="text-muted-foreground text-sm text-balance">
          {context.isConnectorError
            ? "There was an error with the request. Click above to try again."
            : `Open the ${context.pendingConnector?.name} browser extension to connect your wallet.`}
        </p>
      </div>
    </div>
  );
}

function WalletOptions() {
  const context = useContext(Web3ModalContext);
  const { connectors, connect } = useConnectors();

  return (
    <div className="flex flex-col gap-3.5">
      {connectors.map((connector) => (
        <WalletOption
          key={connector.uid}
          connector={connector}
          onClick={() => {
            context.setIsConnectorError(false);
            context.setPendingConnector(connector);
            connect({ connector });
          }}
        />
      ))}
    </div>
  );
}

function WalletOption({
  connector,
  onClick,
}: {
  connector: Connector;
  onClick: () => void;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function checkReady() {
      const provider = await connector.getProvider();
      setReady(!!provider);
    }
    checkReady()
      .then(() => null)
      .catch(() => null);
  }, [connector]);

  return (
    <Button
      disabled={!ready}
      onClick={onClick}
      size="lg"
      className="justify-between px-4 py-7 text-base font-semibold"
    >
      <p>{connector.name}</p>
      {connector.icon && (
        <Image
          src={connector.icon}
          alt={connector.name}
          className="size-8 overflow-hidden rounded-[6px]"
          width={32}
          height={32}
        />
      )}
    </Button>
  );
}

function CopyAddressButton() {
  const [copied, setCopied] = useState(false);
  const { address } = useAccount();
  const [, copy] = useCopyToClipboard();

  async function handleCopy() {
    if (!address) return;
    const copied = await copy(address);
    if (!copied) return;

    setCopied(true);
    const id = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-muted-foreground"
      onClick={handleCopy}
    >
      {copied ? (
        <Check className="size-4" strokeWidth={4} />
      ) : (
        <Copy className="size-4" strokeWidth={4} />
      )}
    </Button>
  );
}

function BackChevron() {
  const context = useContext(Web3ModalContext);

  if (!context.pendingConnector) {
    return null;
  }

  function handleClick() {
    context.setIsConnectorError(false);
    context.setPendingConnector(null);
  }

  return (
    <button
      className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-[42px] left-[26px] z-50 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none md:top-[26px]"
      onClick={handleClick}
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="sr-only">Cancel connection</span>
    </button>
  );
}

function RetryConnectorButton() {
  const context = useContext(Web3ModalContext);
  const { connect } = useConnect({
    mutation: {
      onError: () => context.setIsConnectorError(true),
    },
  });

  function handleClick() {
    if (context.pendingConnector) {
      context.setIsConnectorError(false);
      connect({ connector: context.pendingConnector });
    }
  }

  return (
    <Button
      size="icon"
      variant="secondary"
      className="group bg-muted absolute -right-2 -bottom-2 rounded-full p-1.5 shadow"
      onClick={handleClick}
    >
      <RotateCcw className="size-4 transition-transform group-hover:-rotate-45" />
    </Button>
  );
}

function useConnectors() {
  const context = useContext(Web3ModalContext);
  const { connect, connectors } = useConnect({
    mutation: {
      onError: () => context.setIsConnectorError(true),
    },
  });

  const sortedConnectors = useMemo(() => {
    let metaMaskConnector: Connector | undefined;
    let injectedConnector: Connector | undefined;

    const formattedConnectors = connectors.reduce(
      (acc: Array<Connector>, curr) => {
        switch (curr.id) {
          case "metaMaskSDK":
            metaMaskConnector = {
              ...curr,
              icon: "https://utfs.io/f/be0bd88f-ce87-4cbc-b2e5-c578fa866173-sq4a0b.png",
            };
            return acc;
          case "metaMask":
            injectedConnector = {
              ...curr,
              icon: "https://utfs.io/f/be0bd88f-ce87-4cbc-b2e5-c578fa866173-sq4a0b.png",
            };
            return acc;
          case "safe":
            acc.push({
              ...curr,
              icon: "https://utfs.io/f/164ea200-3e15-4a9b-9ce5-a397894c442a-awpd29.png",
            });
            return acc;
          case "coinbaseWalletSDK":
            acc.push({
              ...curr,
              icon: "https://utfs.io/f/53e47f86-5f12-404f-a98b-19dc7b760333-chngxw.png",
            });
            return acc;
          case "walletConnect":
            acc.push({
              ...curr,
              icon: "https://utfs.io/f/5bfaa4d1-b872-48a7-9d37-c2517d4fc07a-utlf4g.png",
            });
            return acc;
          default:
            acc.unshift(curr);
            return acc;
        }
      },
      [],
    );

    if (
      metaMaskConnector &&
      !formattedConnectors.find(
        ({ id }) =>
          id === "io.metamask" ||
          id === "io.metamask.mobile" ||
          id === "injected",
      )
    ) {
      return [metaMaskConnector, ...formattedConnectors];
    }

    if (injectedConnector) {
      const nonMetaMaskConnectors = formattedConnectors.filter(
        ({ id }) => id !== "io.metamask" && id !== "io.metamask.mobile",
      );
      return [injectedConnector, ...nonMetaMaskConnectors];
    }
    return formattedConnectors;
  }, [connectors]);

  return { connectors: sortedConnectors, connect };
}

function useWeb3Modal() {
  const { address } = useAccount();
  const context = useContext(Web3ModalContext);

  const isModalOpen = context.open;
  const isConnected = address && !context.pendingConnector;
  const formattedAddress = address
    ? address.slice(0, 6) + "•••" + address.slice(-4)
    : undefined;

  function open() {
    context.setOpen(true);
  }

  function close() {
    context.setOpen(false);
  }

  function toggleModal() {
    context.setOpen((prevState) => !prevState);
  }

  return {
    isModalOpen,
    isConnected,
    address,
    formattedAddress,
    open,
    close,
    toggleModal,
  };
}

export { useWeb3Modal, Web3ModalContext, Web3ModalProvider };

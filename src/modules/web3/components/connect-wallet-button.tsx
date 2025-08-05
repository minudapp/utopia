"use client";

import Image from "next/image";
import { useEnsAvatar, useEnsName } from "wagmi";

import { Button } from "@/components/ui/button";
import { useWeb3Modal } from "./web3-modal-provider";

export function ConnectWalletButton() {
  const { address, formattedAddress, isConnected, toggleModal } =
    useWeb3Modal();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName ?? undefined });

  return (
    <Button onClick={toggleModal}>
      {isConnected ? (
        <>
          {ensAvatar && (
            <Image src={ensAvatar} alt="ENS Avatar" width={32} height={32} />
          )}
          {address && <span>{ensName ? `${ensName}` : formattedAddress}</span>}
        </>
      ) : (
        "Connect Wallet"
      )}
    </Button>
  );
}

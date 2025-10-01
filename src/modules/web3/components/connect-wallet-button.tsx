"use client";

import Image from "next/image";
import { useEnsAvatar, useEnsName } from "wagmi";

import { AnimatedButton } from "@/components/shared/animated-button";
import { useWeb3Modal } from "./web3-modal-provider";

export function ConnectWalletButton() {
  const { address, formattedAddress, isConnected, toggleModal } =
    useWeb3Modal();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName ?? undefined });

  return (
    <AnimatedButton onClick={toggleModal}>
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
    </AnimatedButton>
  );
}

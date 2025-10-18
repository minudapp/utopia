"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

import { AnimatedButton } from "@/components/shared/animated-button";

export function ConnectWalletButton(props: React.ComponentProps<"div">) {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        mounted,
        openConnectModal,
        openChainModal,
        openAccountModal,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
            {...props}
          >
            {(() => {
              if (!connected) {
                return (
                  <AnimatedButton
                    onClick={openConnectModal}
                    type="button"
                    className="w-full"
                  >
                    Connect Wallet
                  </AnimatedButton>
                );
              }

              if (chain.unsupported) {
                return (
                  <AnimatedButton
                    onClick={openChainModal}
                    type="button"
                    className="w-full"
                  >
                    Wrong network
                  </AnimatedButton>
                );
              }

              return (
                <AnimatedButton
                  onClick={openAccountModal}
                  type="button"
                  className="w-full"
                >
                  {account.displayName}
                </AnimatedButton>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}

"use client";

import { useAccount } from "wagmi";

import { Card, CardContent } from "@/components/ui/card";
import { Stats } from "@/modules/mining/components/stats";
import { ConnectWalletButton } from "@/modules/web3/components/connect-wallet-button";
import { MiningCard } from "./mining-card";

export function Mining() {
  const { isConnected } = useAccount();

  return (
    <section
      id="mining"
      className="flex min-h-svh items-center justify-center py-16"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {isConnected ? (
          <MiningCard className="md:col-span-2" />
        ) : (
          <Card className="justify-center md:col-span-2">
            <CardContent className="space-y-6">
              <p className="text-muted-foreground text-center text-sm">
                Connect your wallet to start exploring Utopia and earning BEANs!
              </p>
              <ConnectWalletButton />
            </CardContent>
          </Card>
        )}

        <Stats />
      </div>
    </section>
  );
}

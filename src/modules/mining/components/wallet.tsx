"use client";

import { useAccount } from "wagmi";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ConnectWalletButton } from "@/modules/web3/components/connect-wallet-button";

function formatAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function Wallet() {
  const { isConnected, address } = useAccount();

  return (
    <Card className="backdrop-blur-sm">
      <CardContent className="p-6">
        {!isConnected ? (
          <ConnectWalletButton />
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Badge
                variant="secondary"
                className="border-green-800/30 bg-green-600/20 text-green-600"
              >
                <div className="mr-2 h-2 w-2 rounded-full bg-green-700"></div>
                Connected
              </Badge>
              <span className="font-mono text-sm">
                {formatAddress(address!)}
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

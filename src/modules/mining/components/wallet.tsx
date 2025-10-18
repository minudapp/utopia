"use client";

import { CoinsIcon, WalletIcon } from "lucide-react";
import { formatEther } from "viem";
import { useAccount } from "wagmi";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

function formatAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

function formatBalance(balance: bigint | null): string {
  if (balance === null) return "?";

  return Number.parseFloat(formatEther(balance)).toFixed(2);
}

export function Wallet() {
  const { isConnected, address } = useAccount();

  if (!isConnected) {
    return null;
  }

  const { contract, wallet } = isConnected
    ? {
        contract: BigInt(1247.83 * 1e18),
        wallet: BigInt(2.45 * 1e18),
      }
    : {
        contract: null,
        wallet: null,
      };

  return (
    <Card className="backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge
              variant="secondary"
              className="border-green-800/30 bg-green-600/20 text-green-600"
            >
              <div className="mr-2 h-2 w-2 rounded-full bg-green-700"></div>
              Connected
            </Badge>
            <span className="font-mono text-sm">{formatAddress(address!)}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-full bg-yellow-500">
                <CoinsIcon className="size-4" />
              </div>
              <span className="font-medium">Contract Balance:</span>
            </div>
            <span className="font-bold text-orange-400">
              {contract !== null ? formatBalance(contract) : "?"} BNB
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-full bg-blue-500">
                <WalletIcon className="size-4" />
              </div>
              <span className="font-medium">Wallet Balance:</span>
            </div>
            <span className="font-bold text-orange-400">
              {wallet !== null ? formatBalance(wallet) : "?"} BNB
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

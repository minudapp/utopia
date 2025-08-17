"use client";

import { CoinsIcon, WalletIcon } from "lucide-react";
import { formatEther } from "viem";
import { useAccount } from "wagmi";

import { Card, CardContent } from "@/components/ui/card";

function formatBalance(balance: bigint | null): string {
  if (balance === null) return "?";

  return Number.parseFloat(formatEther(balance)).toFixed(2);
}

export function Balance() {
  const { isConnected } = useAccount();
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
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500">
                <CoinsIcon className="h-4 w-4" />
              </div>
              <span className="font-medium">Contract Balance:</span>
            </div>
            <span className="font-bold text-orange-400">
              {contract !== null ? formatBalance(contract) : "?"} BNB
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
                <WalletIcon className="h-4 w-4" />
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

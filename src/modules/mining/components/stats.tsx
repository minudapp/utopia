"use client";

import { CoinsIcon, PickaxeIcon, TrendingUpIcon } from "lucide-react";
import { useAccount } from "wagmi";

export function Stats() {
  const { isConnected } = useAccount();

  const userStats = isConnected
    ? {
        miners: "42",
        miningSpeed: "1.25",
        rewards: "0.0847",
      }
    : {
        miners: "0",
        miningSpeed: "0",
        rewards: "0.0000",
      };

  return (
    <div className="mb-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">
            <PickaxeIcon className="h-4 w-4 text-white" />
          </div>
          <span className="font-medium text-white">Miners</span>
        </div>
        <span className="text-xl font-bold text-orange-400">
          {userStats.miners}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500">
            <TrendingUpIcon className="h-4 w-4 text-white" />
          </div>
          <span className="font-medium text-white">Mining Speed</span>
        </div>
        <span className="text-xl font-bold text-orange-400">
          {userStats.miningSpeed} BNB/24h
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500">
            <CoinsIcon className="h-4 w-4 text-white" />
          </div>
          <span className="font-medium text-white">My rewards</span>
        </div>
        <span className="text-xl font-bold text-orange-400">
          {userStats.rewards} BNB
        </span>
      </div>
    </div>
  );
}

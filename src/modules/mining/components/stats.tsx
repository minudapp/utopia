"use client";

import { useMemo } from "react";
import { formatEther } from "viem";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useBNBPrice } from "@/modules/web3/hooks/use-bnb-price";
import { useTVL } from "@/modules/web3/hooks/use-tvl";

export function Stats() {
  const { data: tvl } = useTVL();
  const { data: bnbPrice } = useBNBPrice();

  const stats = useMemo(
    () => [
      {
        title: "Journey Daily Progress",
        value: "up to 8%",
        description: "Daily percentage rate",
      },
      {
        title: "Total Value Locked",
        value: tvl ? `${formatEther(tvl)} BNB` : "N/A",
        description: "Utopia TVL",
      },
      {
        title: "BNB price",
        value: bnbPrice ? `$${bnbPrice.toFixed(2)}` : "N/A",
        description: "Current market price",
      },
    ],
    [bnbPrice, tvl],
  );

  return (
    <div className="space-y-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">
              {stat.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-foreground mb-1 text-2xl font-bold">
              {stat.value}
            </div>
            <div className="text-muted-foreground text-xs">
              {stat.description}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

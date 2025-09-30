"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { useWeb3Modal } from "@/modules/web3/components/web3-modal-provider";

export function Stats() {
  // const { isConnected } = useWeb3Modal();

  const stats = [
    {
      title: "Journey Daily Progress",
      value: "up to 8%",
      description: "Daily percentage rate",
    },
    {
      title: "Total Value Locked",
      value: "9,876,543 miles",
      description: "Utopia TVL",
    },
    {
      title: "BNB price",
      value: "$1.032",
      description: "Current market price",
    },
  ];

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

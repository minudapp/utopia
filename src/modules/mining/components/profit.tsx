"use client";

import { Card, CardContent } from "@/components/ui/card";

export function Profit() {
  // TODO: Fetch these values from the contract

  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold">DAILY PROFIT:</span>
            <span className="font-bold text-green-400">UP TO 8%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-bold">TAX:</span>
            <span className="font-bold text-red-400">4%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

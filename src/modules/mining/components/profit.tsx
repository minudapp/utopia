"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function Profit({
  className,
  ...props
}: React.ComponentProps<typeof Card>) {
  // TODO: Fetch these values from the contract

  return (
    <Card className={cn("py-3", className)} {...props}>
      <CardContent className="px-3">
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

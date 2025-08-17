import { InfoIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Instructions() {
  return (
    <Card className="backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <InfoIcon className="h-5 w-5 text-blue-400" />
          How to Use
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-500">
              <span className="text-sm font-bold">1</span>
            </div>
            <p>Hold at least 70 million $MINU in your wallet.</p>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-500">
              <span className="text-sm font-bold">2</span>
            </div>
            <p>Hire Miners using BNB.</p>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-500">
              <span className="text-sm font-bold">3</span>
            </div>
            <p>You can compound miners using Compound Miners button.</p>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-500">
              <span className="text-sm font-bold">4</span>
            </div>
            <p>Click Collect Rewards to withdraw collected BNB.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Form } from "@/modules/mining/components/form";
import { Stats } from "@/modules/mining/components/stats";
// import { useWeb3Modal } from "@/modules/web3/components/web3-modal-provider";

export function Mining() {
  // const { isConnected } = useWeb3Modal();

  return (
    <section id="mining" className="py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardContent className="space-y-6">
            <Form />
          </CardContent>
          <CardFooter className="flex-col items-stretch gap-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Miners</span>
              <span>1234</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Mining rate</span>
              <span>0 BNB/24h</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Reward</span>
              <span className="flex items-center gap-1">10 BNB</span>
            </div>
          </CardFooter>
        </Card>

        <Stats />
      </div>
    </section>
  );
}

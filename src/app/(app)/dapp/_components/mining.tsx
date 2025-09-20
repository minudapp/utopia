"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/modules/mining/components/form";
import { Stats } from "@/modules/mining/components/stats";
// import { useWeb3Modal } from "@/modules/web3/components/web3-modal-provider";

export function Mining() {
  // const { isConnected } = useWeb3Modal();

  return (
    <section id="mining" className="px-4 py-16">
      <div className="mx-auto grid w-full max-w-2xl grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Stake PUDGY</span>
              <div className="text-muted-foreground text-sm">
                Balance: 0.0 PUDGY
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Form />

            <div className="space-y-3 text-sm">
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
            </div>
          </CardContent>
        </Card>

        <Stats />
      </div>
    </section>
  );
}

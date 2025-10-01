"use client";

import Link from "next/link";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Form } from "@/modules/mining/components/form";
import { Stats } from "@/modules/mining/components/stats";
// import { useWeb3Modal } from "@/modules/web3/components/web3-modal-provider";

export function Mining() {
  // const { isConnected } = useWeb3Modal();

  return (
    <section
      id="mining"
      className="flex min-h-svh items-center justify-center py-16"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardContent className="space-y-6">
            <Form />
            <div className="flex flex-col items-stretch gap-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Explorers</span>
                <span>1234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Travel Speed</span>
                <span>0 BNB/24h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Reward</span>
                <span className="flex items-center gap-1">10 BNB</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="mt-auto flex-col items-start gap-1">
            <span className="text-muted-foreground text-xs">
              *You must hold a minimum of 10,000 $UTOPIA (0.001% of total
              supply) to begin your journey.
            </span>
            <span className="text-muted-foreground text-xs">
              *There is a 4% fee when you Hire Explorers and a 4% fee when you
              Collect your Rewards.
            </span>
            <span className="text-muted-foreground text-xs">
              * For a full map and instructions, please consult our:
              <Link href="http://www.google.com/" target="_blank">
                Expedition Manual
              </Link>
            </span>
          </CardFooter>
        </Card>

        <Stats />
      </div>
    </section>
  );
}

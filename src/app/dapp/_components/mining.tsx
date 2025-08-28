import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Balance } from "@/modules/mining/components/balance";
import { Form } from "@/modules/mining/components/form";
import { Instructions } from "@/modules/mining/components/instructions";
import { Profit } from "@/modules/mining/components/profit";
import { Stats } from "@/modules/mining/components/stats";
import { Wallet } from "@/modules/mining/components/wallet";

export function Mining() {
  return (
    <section
      id="mining"
      className="bg-primary text-primary-foreground px-4 py-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-6 lg:grid-cols-2">
        <Card className="backdrop-blur-sm">
          <CardContent>
            <Stats />
            <Separator className="my-5 bg-gray-700" />
            <Form />
            <Profit className="mt-5" />
          </CardContent>
        </Card>
        <div className="space-y-5">
          <Wallet />
          <Balance />
          <Instructions />
        </div>
      </div>
    </section>
  );
}

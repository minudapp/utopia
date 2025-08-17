import { PageContainer } from "@/components/shared/page-container";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Balance } from "@/modules/mining/components/balance";
import { Form } from "@/modules/mining/components/form";
import { Instructions } from "@/modules/mining/components/instructions";
import { Profit } from "@/modules/mining/components/profit";
import { Stats } from "@/modules/mining/components/stats";
import { Wallet } from "@/modules/mining/components/wallet";
import { ReferralLink } from "@/modules/referral/components/referral-link";
import { SocialSharing } from "@/modules/referral/components/social-sharing";

export default function DappPage() {
  return (
    <PageContainer>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card className="backdrop-blur-sm">
            <CardContent className="p-6">
              <Stats />
              <Separator className="my-6 bg-gray-700" />
              <Form />
              <Profit />
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Wallet />
            <Balance />
            <Instructions />
          </div>
        </div>

        <div className="mt-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold">REFERRAL PROGRAM</h2>
            <p className="mx-auto mt-4 max-w-4xl text-lg font-semibold text-orange-400">
              EARN 12% OF THE BNB USED TO HIRE MINERS BY ANYONE WHO START MINING
              USING YOUR LINK
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <ReferralLink />
            <SocialSharing />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

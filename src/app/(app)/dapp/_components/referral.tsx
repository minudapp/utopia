import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { ReferralLink } from "@/modules/referral/components/referral-link";
import { SocialSharing } from "@/modules/referral/components/social-sharing";

export function Referral() {
  return (
    <section id="referral">
      <div className="mx-auto w-full max-w-6xl py-16">
        <div className="text-center">
          <Heading variant="h2">REFERRAL PROGRAM</Heading>
          <Paragraph className="mx-auto text-lg font-semibold uppercase">
            Earn 12% of the BNB used to hire miners by anyone who starts mining
            using your referral link
          </Paragraph>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <ReferralLink />
          <SocialSharing className="self-start" />
        </div>
      </div>
    </section>
  );
}

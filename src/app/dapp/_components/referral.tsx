import { ReferralLink } from "@/modules/referral/components/referral-link";
import { SocialSharing } from "@/modules/referral/components/social-sharing";

export function Referral() {
  return (
    <section id="referral" className="text-muted bg-[#e8f6f7]">
      <div className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold">REFERRAL PROGRAM</h2>
          <p className="text-muted mx-auto mt-4 max-w-4xl text-lg font-semibold uppercase">
            Earn 12% of the BNB used to hire miners by anyone who starts mining
            using your referral link
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <ReferralLink />
          <SocialSharing />
        </div>
      </div>
    </section>
  );
}

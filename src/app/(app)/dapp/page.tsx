import { PageContainer } from "@/components/shared/page-container";
import { Hero } from "./_components/hero";
import { Mining } from "./_components/mining";
import { Referral } from "./_components/referral";

export default function DappPage() {
  return (
    <PageContainer>
      <Hero />
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Mining />
        <Referral />
      </div>
    </PageContainer>
  );
}

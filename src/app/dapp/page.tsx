import { PageContainer } from "@/components/shared/page-container";
import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { HowToStart } from "./_components/how-to-start";
import { Mining } from "./_components/mining";
import { Referral } from "./_components/referral";

export default function DappPage() {
  return (
    <PageContainer>
      <Hero />
      <About />
      <Mining />
      <Referral />
      <HowToStart />
    </PageContainer>
  );
}

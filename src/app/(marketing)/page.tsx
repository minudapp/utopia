import { PageContainer } from "@/components/shared/page-container";
import { About } from "@/modules/landing/components/about";
import { BuyToken } from "@/modules/landing/components/buy-token";
import { Ecosystem } from "@/modules/landing/components/ecosystem";
import { Hero } from "@/modules/landing/components/hero";

export default function LandingPage() {
  return (
    <PageContainer>
      <Hero />
      <About />
      <BuyToken />
      <Ecosystem />
    </PageContainer>
  );
}

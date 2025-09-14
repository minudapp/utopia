import { PageContainer } from "@/components/shared/page-container";
import { About } from "@/modules/landing/components/about";
import { BuyToken } from "@/modules/landing/components/buy-token";
import { Hero } from "@/modules/landing/components/hero";
import { Integrations } from "@/modules/landing/components/integrations";

export default function LandingPage() {
  return (
    <PageContainer>
      <Hero />
      <About />
      <BuyToken />
      <Integrations />
    </PageContainer>
  );
}

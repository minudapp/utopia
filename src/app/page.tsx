import { PageContainer } from "@/components/shared/page-container";
import { About } from "@/modules/landing/components/about";
import { Hero } from "@/modules/landing/components/hero";
import { Integrations } from "@/modules/landing/components/integrations";

export default function LandingPage() {
  return (
    <PageContainer>
      <Hero />
      <About />
      <Integrations />
    </PageContainer>
  );
}

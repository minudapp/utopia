import { PageContainer } from "@/components/shared/page-container";
import { Features } from "@/modules/landing/components/features";
import { Hero } from "@/modules/landing/components/hero";
import { Integrations } from "@/modules/landing/components/integrations";

export default function HomePage() {
  return (
    <PageContainer>
      <Hero />
      <Features />
      <Integrations />
    </PageContainer>
  );
}

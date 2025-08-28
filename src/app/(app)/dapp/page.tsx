import { PageContainer } from "@/components/shared/page-container";
import { Heading } from "@/components/ui/heading";
import { Mining } from "./_components/mining";
import { Referral } from "./_components/referral";

export default function DappPage() {
  return (
    <PageContainer>
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-12 text-center">
          <Heading className="font-heading text-foreground mb-4 text-4xl font-bold md:text-5xl">
            Stake PUDGY
          </Heading>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Stake your PUDGY tokens and receive stPUDGY while earning rewards
            from the Pudgy Penguins ecosystem
          </p>
        </div>

        <Mining />
        <Referral />
      </div>
    </PageContainer>
  );
}

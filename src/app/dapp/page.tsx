import { PageContainer } from "@/components/shared/page-container";
import { Mining } from "./_components/mining";
import { Referral } from "./_components/referral";

export default function DappPage() {
  return (
    <PageContainer>
      <Mining />
      <Referral />
    </PageContainer>
  );
}

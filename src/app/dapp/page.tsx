import { PageContainer } from "@/components/shared/page-container";
import { ConnectWalletButton } from "@/modules/web3/components/connect-wallet-button";

export default function DappPage() {
  return (
    <PageContainer>
      <h1 className="text-2xl font-bold">Dapp Page</h1>
      <p>
        Welcome to the Dapp page. Here you can interact with your decentralized
        applications.
      </p>
      <ConnectWalletButton />
    </PageContainer>
  );
}

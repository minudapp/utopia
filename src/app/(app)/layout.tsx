import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { Web3Provider } from "@/modules/web3/components/web3-provider";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Web3Provider>
        <Header type="app" />
        {children}
        <Footer />
      </Web3Provider>
    </>
  );
}

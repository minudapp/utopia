import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";

import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { getServerConfig } from "@/lib/wagmi";
import { Web3Provider } from "@/modules/web3/components/web3-provider";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(
    getServerConfig(),
    (await headers()).get("cookie"),
  );

  return (
    <>
      <Web3Provider initialState={initialState}>
        <Header type="app" />
        {children}
      </Web3Provider>
      <Footer />
    </>
  );
}

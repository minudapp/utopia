import { Web3Provider } from "@/modules/web3/components/web3-provider";

type DappLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function DappLayout({ children }: DappLayoutProps) {
  return <Web3Provider>{children}</Web3Provider>;
}

import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header type="marketing" />
      {children}
      <Footer className="bg-primary" />
    </>
  );
}

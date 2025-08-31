import Link from "next/link";

import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ConnectWalletButton } from "@/modules/web3/components/connect-wallet-button";
import { Logo } from "./logo";
import { Nav } from "./nav";

type HeaderProps = React.ComponentProps<"header"> & {
  type: "app" | "marketing";
};

export function Header({ type, className, ...props }: HeaderProps) {
  return (
    <header
      style={
        type === "marketing"
          ? ({ "--header-height": "6rem" } as React.CSSProperties)
          : {}
      }
      className={cn(
        "flex h-(--header-height) w-full items-center justify-center bg-[#2b90cc]",
        className,
      )}
      {...props}
    >
      <Box variant="container" className="flex items-center justify-between">
        {type === "marketing" && (
          <>
            <Nav />
            <Link href="/" className="flex items-center">
              <Logo className="w-16" />
            </Link>
            <Button
              className="border-background border-2 text-base font-semibold"
              size="xl"
              asChild
            >
              <Link href="/dapp">Join the Adventure</Link>
            </Button>
          </>
        )}

        {type === "app" && (
          <>
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
            <ConnectWalletButton />
          </>
        )}
      </Box>
    </header>
  );
}

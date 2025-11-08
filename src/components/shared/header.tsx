import Link from "next/link";

import { AnimatedButton } from "@/components/shared/animated-button";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ConnectWalletButton } from "@/modules/web3/components/connect-wallet-button";
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
        "absolute top-0 left-0 z-10 flex h-(--header-height) w-full items-center justify-center bg-transparent",
        className,
      )}
      {...props}
    >
      <Box
        variant="container"
        className="flex items-center justify-between gap-3"
      >
        {type === "marketing" && (
          <>
            <Nav />
            <Link href="/dapp">
              <AnimatedButton
                className="border-background h-10 border-2 px-4 text-base font-semibold md:h-12 md:px-10"
                size="xl"
              >
                Join the Adventure
              </AnimatedButton>
            </Link>
          </>
        )}

        {type === "app" && (
          <>
            <Link href="/" className="text-lg font-bold">
              <AnimatedButton>Home</AnimatedButton>
            </Link>
            <Button variant="secondary" asChild>
              <Link
                href="https://www.cyberscope.io/audits/1-utopia?assessmentIndex=1"
                target="_blank"
              >
                View Audit Report
              </Link>
            </Button>
            <ConnectWalletButton />
          </>
        )}
      </Box>
    </header>
  );
}

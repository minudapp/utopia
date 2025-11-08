"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatedButton } from "@/components/shared/animated-button";
import { Box } from "@/components/ui/box";
import { cn } from "@/lib/utils";
import { ConnectWalletButton } from "@/modules/web3/components/connect-wallet-button";
import { Nav } from "./nav";

type HeaderProps = React.ComponentProps<"header"> & {
  type: "app" | "marketing";
};

export function Header({ type, className, ...props }: HeaderProps) {
  const pathname = usePathname();

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
            {pathname === "/" ? (
              <Nav />
            ) : (
              <Link href="/">
                <AnimatedButton
                  className="border-background h-10 border-2 px-4 text-base font-semibold md:h-12 md:px-10"
                  size="xl"
                >
                  Home
                </AnimatedButton>
              </Link>
            )}
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
            <Link
              href="https://www.cyberscope.io/audits/1-utopia?assessmentIndex=1"
              target="_blank"
            >
              <AnimatedButton>View Audit Report</AnimatedButton>
            </Link>
            <ConnectWalletButton />
          </>
        )}
      </Box>
    </header>
  );
}

import Link from "next/link";

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
        "flex h-(--header-height) w-full items-center justify-center",
        type === "marketing" && "absolute top-0 left-0 z-10 bg-transparent",
        className,
      )}
      {...props}
    >
      <Box
        variant="container"
        className={cn(
          "flex items-center gap-3",
          type === "app" ? "justify-end" : "justify-between",
        )}
      >
        {type === "marketing" && (
          <>
            <Nav />
            <Button
              className="border-background h-10 border-2 px-4 text-base font-semibold md:h-12 md:px-10"
              size="xl"
              asChild
            >
              <Link href="/dapp">Join the Adventure</Link>
            </Button>
          </>
        )}

        {type === "app" && <ConnectWalletButton />}
      </Box>
    </header>
  );
}

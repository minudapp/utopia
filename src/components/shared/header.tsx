import Link from "next/link";

import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ConnectWalletButton } from "@/modules/web3/components/connect-wallet-button";
import { Logo } from "./logo";

function Nav({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      className={cn("hidden items-center space-x-6 md:flex", className)}
      {...props}
    >
      <Button
        variant="link"
        className="hover:bg-primary hover:text-primary-foreground hover:no-underline"
        asChild
      >
        <Link href="#features">Features</Link>
      </Button>
      <Button
        variant="link"
        className="hover:bg-primary hover:text-primary-foreground hover:no-underline"
        asChild
      >
        <Link href="#community">Community</Link>
      </Button>
      <Button
        variant="link"
        className="hover:bg-primary hover:text-primary-foreground hover:no-underline"
        asChild
      >
        <Link href="#roadmap">Roadmap</Link>
      </Button>
    </nav>
  );
}

type HeaderProps = React.ComponentProps<"header"> & {
  type: "app" | "marketing";
};

export function Header({ type, className, ...props }: HeaderProps) {
  return (
    <header
      className={cn(
        "border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky inset-x-0 top-0 z-50 flex h-(--header-height) w-full items-center justify-center border-b backdrop-blur",
        className,
      )}
      {...props}
    >
      <Box variant="container" className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {type === "marketing" && (
          <>
            <Nav />
            <Button asChild>
              <Link href="/dapp">Join the Adventure</Link>
            </Button>
          </>
        )}

        {type === "app" && <ConnectWalletButton />}
      </Box>
    </header>
  );
}

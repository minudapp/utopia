import Link from "next/link";

import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky inset-x-0 top-0 z-50 flex h-(--header-height) w-full items-center justify-center border-b backdrop-blur">
      <Box variant="container" className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden items-center space-x-6 md:flex">
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

        <Button asChild>
          <Link href="/dapp">Join the Adventure</Link>
        </Button>
      </Box>
    </header>
  );
}

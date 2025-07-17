import Link from "next/link";

import { Box } from "@/components/ui/box";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="sticky inset-x-0 top-0 flex h-(--header-height) items-center justify-center border-b border-zinc-200 shadow-xl">
      <Box variant="container" className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
      </Box>
    </header>
  );
}

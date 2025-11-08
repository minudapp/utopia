"use client";

import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import telegram from "@/assets/images/telegram.png";
import twitter from "@/assets/images/twitter.png";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { AnimatedButton } from "./animated-button";

export function Nav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  const scrollToHash = (hash: string) => {
    const element = document.getElementById(hash.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    let timeout: NodeJS.Timeout | null = null;

    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      close();
      timeout = setTimeout(() => scrollToHash(href), 500);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  };

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="top">
      <DrawerTrigger asChild>
        <AnimatedButton
          className="border-background h-10 border-2 px-4 text-base font-semibold md:h-12 md:px-10"
          size="xl"
        >
          Menu
          <span className="sr-only">Open navigation menu</span>
        </AnimatedButton>
      </DrawerTrigger>
      <DrawerContent className="border-primary h-full bg-[#5EC8D8] data-[vaul-drawer-direction=top]:max-h-[70vh] data-[vaul-drawer-direction=top]:rounded-b-3xl data-[vaul-drawer-direction=top]:border-b-10">
        <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col py-3">
          <div className="absolute top-4 right-4">
            <DrawerClose asChild>
              <Button size="icon" className="size-auto rounded-full p-2">
                <XIcon className="size-7" />
              </Button>
            </DrawerClose>
          </div>
          <DrawerHeader>
            <DrawerTitle className="sr-only">Navigation menu</DrawerTitle>
            <DrawerDescription className="sr-only">
              Use the navigation menu to navigate through the site.
            </DrawerDescription>
          </DrawerHeader>
          <div className="mt-10 grid grid-cols-1 items-center gap-6 p-6 md:grid-cols-3">
            <nav className="md:col-span-2">
              <ul className="grid grid-cols-2 gap-3">
                <li className="text-foreground text-lg font-extrabold uppercase transition-colors hover:text-[#c5fbff] sm:text-xl md:text-2xl xl:text-4xl">
                  <Link href="/#about" onClick={handleLinkClick}>
                    The Utopia
                  </Link>
                </li>
                <li className="text-foreground text-lg font-extrabold uppercase transition-colors hover:text-[#c5fbff] sm:text-xl md:text-2xl xl:text-4xl">
                  <Link href="/#buy-token" onClick={handleLinkClick}>
                    Buy $UTOPIA
                  </Link>
                </li>
                <li className="text-foreground text-lg font-extrabold uppercase transition-colors hover:text-[#c5fbff] sm:text-xl md:text-2xl xl:text-4xl">
                  <Link href="/dapp">Earn BNB</Link>
                </li>
                <li className="text-foreground text-lg font-extrabold uppercase transition-colors hover:text-[#c5fbff] sm:text-xl md:text-2xl xl:text-4xl">
                  <Link href="https://docs.utopiabnb.com">Documentation</Link>
                </li>
                <li className="text-foreground text-lg font-extrabold uppercase transition-colors hover:text-[#c5fbff] sm:text-xl md:text-2xl xl:text-4xl">
                  <Link href="/#ecosystem" onClick={handleLinkClick}>
                    Ecosystem
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <DrawerFooter className="mt-auto p-2 md:gap-32 md:p-4 lg:gap-48">
            <ul className="relative flex items-center gap-4 self-center md:right-1/6 md:self-end">
              <li>
                <Link
                  href="https://t.me/UtopiaBNB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Telegram</span>
                  <Image
                    src={telegram}
                    alt="Instagram"
                    quality={100}
                    className="size-40 -rotate-12 object-contain"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/UtopiaBNB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Twitter</span>
                  <Image
                    src={twitter}
                    alt="Twitter"
                    quality={100}
                    className="size-40 rotate-12 object-contain"
                  />
                </Link>
              </li>
            </ul>

            <ul className="flex items-center gap-3">
              <li className="text-foreground text-sm font-medium uppercase transition-colors hover:text-[#c5fbff]">
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li className="text-foreground text-sm font-medium uppercase transition-colors hover:text-[#c5fbff]">
                <Link href="/terms">Terms of use</Link>
              </li>
            </ul>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

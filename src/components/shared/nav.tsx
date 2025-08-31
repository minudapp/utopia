import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import discord from "@/assets/images/discord.png";
import instagram from "@/assets/images/instagram.png";
import menuPenguins from "@/assets/images/menu-penguins.png";
import twitter from "@/assets/images/twitter.png";
import youtube from "@/assets/images/youtube.png";
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

export function Nav() {
  return (
    <Drawer direction="top">
      <DrawerTrigger asChild>
        <Button
          className="border-background border-2 text-base font-semibold"
          size="xl"
        >
          Menu
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full border-[#ff8b8b] bg-[#00142d] data-[vaul-drawer-direction=top]:max-h-[70vh] data-[vaul-drawer-direction=top]:rounded-b-3xl data-[vaul-drawer-direction=top]:border-b-10">
        <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col py-3">
          <div className="absolute top-4 right-4">
            <DrawerClose asChild>
              <Button
                variant="outline"
                size="icon"
                className="size-auto rounded-full bg-[#ff8b8b]! p-2"
              >
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
                <li className="text-2xl font-extrabold text-[#80abff] uppercase transition-colors hover:text-[#c5fbff] md:text-3xl xl:text-5xl">
                  <Link href="#">The Team</Link>
                </li>
                <li className="text-2xl font-extrabold text-[#80abff] uppercase transition-colors hover:text-[#c5fbff] md:text-3xl xl:text-5xl">
                  <Link href="#">Shop</Link>
                </li>
                <li className="text-2xl font-extrabold text-[#80abff] uppercase transition-colors hover:text-[#c5fbff] md:text-3xl xl:text-5xl">
                  <Link href="#">Pengu Lore</Link>
                </li>
                <li className="text-2xl font-extrabold text-[#80abff] uppercase transition-colors hover:text-[#c5fbff] md:text-3xl xl:text-5xl">
                  <Link href="#">Igloo Brand</Link>
                </li>
                <li className="text-2xl font-extrabold text-[#80abff] uppercase transition-colors hover:text-[#c5fbff] md:text-3xl xl:text-5xl">
                  <Link href="#">Buy $Pengu</Link>
                </li>
              </ul>
            </nav>
            <div className="grid grid-cols-4 md:grid-cols-2">
              <Link
                className="md:-mr-6 lg:-mr-12"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on YouTube"
              >
                <Image src={youtube} alt="Youtube" />
                <span className="sr-only">Youtube</span>
              </Link>
              <Link
                className="md:-ml-6 lg:-ml-12"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                title="Join us on Discord"
              >
                <Image src={discord} alt="Discord" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link
                className="md:-mt-12 md:-mr-6 lg:-mr-12"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on Twitter"
              >
                <Image src={twitter} alt="Twitter" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                className="md:-mt-12 md:-ml-6 lg:-ml-12"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on Instagram"
              >
                <Image src={instagram} alt="Instagram" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <DrawerFooter className="mt-auto flex-row items-end justify-between">
            <ul className="flex items-center gap-3">
              <li className="text-sm font-medium text-[#80abff] uppercase transition-colors hover:text-[#c5fbff]">
                <Link href="#">Privacy Policy</Link>
              </li>
              <li className="text-sm font-medium text-[#80abff] uppercase transition-colors hover:text-[#c5fbff]">
                <Link href="#">Terms of use</Link>
              </li>
              <li className="text-sm font-medium text-[#80abff] uppercase transition-colors hover:text-[#c5fbff]">
                <Link href="#">IP Rights</Link>
              </li>
              <li className="text-sm font-medium text-[#80abff] uppercase transition-colors hover:text-[#c5fbff]">
                <Link href="#">Careers</Link>
              </li>
            </ul>
            <Image
              src={menuPenguins}
              alt="Menu Penguins"
              className="hidden h-full w-80 md:block"
            />
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

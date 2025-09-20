import Image from "next/image";

import heroBg from "@/assets/images/hero_bg.png";
import utopia from "@/assets/images/utopia_logo.png";
import { Paragraph } from "@/components/ui/paragraph";
import { Title } from "./title";

export function Hero() {
  return (
    <section
      id="home"
      className="text-primary-foreground relative h-svh overflow-hidden bg-[#2b90cc]"
    >
      <Image
        src={heroBg}
        alt="Utopia background"
        priority
        className="absolute inset-x-0 bottom-0 h-full w-full object-cover"
      />
      <div className="relative z-1 flex h-full flex-col">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-1 flex flex-col items-center bg-linear-180 from-[#2b90cc] to-transparent px-[10svw] pt-[10svh]">
          <Title />
          <Paragraph className="mt-10 max-w-2xl text-center text-xl font-black uppercase">
            Pudgy Penguins is a global IP focused on proliferating the penguin,
            memetic culture, and good vibes.
          </Paragraph>
        </div>
        <div className="relative mx-auto hidden h-full w-full lg:block">
          <Image
            src={utopia}
            alt="Utopia"
            className="absolute bottom-0 left-0 z-2 h-auto max-h-96 w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

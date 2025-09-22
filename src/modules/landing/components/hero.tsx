import Image from "next/image";

import heroBg from "@/assets/images/hero_bg.png";
import utopia from "@/assets/images/utopia_logo.png";
import { Paragraph } from "@/components/ui/paragraph";
import { Title } from "./title";

export function Hero() {
  return (
    <section
      id="home"
      className="text-primary-foreground bg-primary relative h-svh overflow-hidden"
    >
      <Image
        src={heroBg}
        alt="Utopia background"
        priority
        className="absolute inset-x-0 bottom-0 h-full w-full object-cover"
      />
      <div className="relative z-1 flex h-full flex-col">
        <div className="relative z-1 flex flex-col items-center px-[10svw] pt-[50svh] md:pt-[10svh]">
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

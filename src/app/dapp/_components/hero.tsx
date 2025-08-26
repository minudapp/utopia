import Image from "next/image";

import penguin1 from "@/assets/images/penguin_1.png";
import penguin2 from "@/assets/images/penguin_2.png";
import penguin3 from "@/assets/images/penguin_3.png";
import penguin4 from "@/assets/images/penguin_4.png";
import penguin5 from "@/assets/images/penguin_5.png";
import snowMountains from "@/assets/images/snow-mountains.png";
import { Paragraph } from "@/components/ui/paragraph";
import { Title } from "./title";

export function Hero() {
  return (
    <section
      id="home"
      className="text-primary-foreground relative h-svh overflow-hidden bg-[#2b90cc]"
    >
      <Image
        src={snowMountains}
        alt="Snow mountains background"
        priority
        className="absolute inset-x-0 bottom-0 h-full w-full object-cover"
      />
      <div className="relative z-1 flex h-full flex-col">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-1 flex flex-col items-center bg-linear-180 from-[#2b90cc] from-70% to-transparent px-[10svw] pt-[10svh]">
          <Title />
          <Paragraph className="mt-10 max-w-2xl text-center text-xl font-black uppercase">
            Pudgy Penguins is a global IP focused on proliferating the penguin,
            memetic culture, and good vibes.
          </Paragraph>
        </div>
        <div className="relative mx-auto hidden h-full w-full lg:block">
          <Image
            src={penguin1}
            alt="Penguin 1"
            className="absolute bottom-0 left-0 z-2 h-auto max-h-72 w-full object-contain"
          />
          <Image
            src={penguin2}
            alt="Penguin 2"
            className="absolute bottom-0 left-0 z-1 h-auto max-h-80 w-full object-contain"
          />
          <Image
            src={penguin3}
            alt="Penguin 3"
            className="absolute bottom-0 left-0 z-2 h-auto max-h-96 w-full object-contain"
          />
          <Image
            src={penguin4}
            alt="Penguin 4"
            className="absolute bottom-0 left-0 z-1 h-auto max-h-80 w-full object-contain"
          />
          <Image
            src={penguin5}
            alt="Penguin 5"
            className="absolute bottom-0 left-0 z-2 h-auto max-h-72 w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

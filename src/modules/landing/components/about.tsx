"use client";

import dolphinData from "@/assets/lottie/dolphin.json";
import parrotData from "@/assets/lottie/parrot.json";
import pudgyPenguinsData from "@/assets/lottie/pudgy-penguins.json";
import { LottieAnimation } from "@/components/shared/lottie-animation";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export function About() {
  return (
    <section
      id="about"
      className="bg-secondary text-secondary-foreground relative px-4 py-20"
    >
      <div className="relative z-1 mx-auto grid w-full max-w-6xl grid-cols-1 content-center gap-10 md:grid-cols-2">
        <Heading variant="h2">
          <span className="sr-only">Pudgy Penguins</span>
          {/* <PudgyPenguinsIcon /> */}
          <LottieAnimation
            animationData={pudgyPenguinsData}
            id="pudgy-penguins"
            className="h-full max-h-1/2 **:nth-[2]:fill-white"
          />
        </Heading>
        <div className="flex flex-col gap-5">
          <Paragraph className="text-xl font-black">
            Welcome to the world of Pudgy Penguins. a web3-born brand that
            fosters creativity, freedom, and community.
          </Paragraph>
          <Paragraph className="text-xl font-black">
            The Pudgy Penguins brand produces content, merchandise, toys, and
            digital collectables. We believe in the power of play and
            imagination, and we&apos;re committed to helping you unlock your
            inner child.
          </Paragraph>
          <Paragraph className="text-xl font-black">
            It&apos;s a very cold place but you&apos;ll be warm with your new
            favorite penguin family!
          </Paragraph>
        </div>
      </div>
      <div className="absolute bottom-0 hidden w-96 md:left-1/8 md:block">
        <LottieAnimation animationData={dolphinData} id="dolphin" />
      </div>
      <div className="absolute -bottom-4 hidden w-64 md:right-1/8 md:block">
        <LottieAnimation animationData={parrotData} id="parrot" />
      </div>
    </section>
  );
}

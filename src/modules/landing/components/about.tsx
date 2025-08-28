"use client";

import bounceData from "@/assets/lottie/bounce.json";
import discoVikingData from "@/assets/lottie/disco-viking.json";
import guitarData from "@/assets/lottie/guitar.json";
import pudgyPenguinsData from "@/assets/lottie/pudgy-penguins.json";
// import { PudgyPenguinsIcon } from "@/components/icons/pudgy-penguins";
import { LottieAnimation } from "@/components/shared/lottie-animation";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export function About() {
  return (
    <section
      id="about"
      className="bg-secondary text-secondary-foreground relative px-4 py-24"
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
      <div className="hidden: absolute -bottom-6 left-0 w-96 md:block">
        <LottieAnimation
          animationData={bounceData}
          id="bounce"
          className="**:nth-[2]:fill-white"
        />
      </div>
      <div className="hidden: absolute -bottom-9 left-1/3 w-80 md:block">
        <LottieAnimation
          animationData={discoVikingData}
          id="disco-viking"
          className="**:nth-[2]:fill-white"
        />
      </div>
      <div className="hidden: absolute right-10 -bottom-2 w-56 md:block">
        <LottieAnimation
          animationData={guitarData}
          id="guitar"
          className="**:nth-[2]:fill-white"
        />
      </div>
    </section>
  );
}

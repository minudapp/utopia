"use client";

import dolphinData from "@/assets/lottie/dolphin.json";
import parrotData from "@/assets/lottie/parrot.json";
import utopiaUniverseData from "@/assets/lottie/utopia-universe.json";
import { LottieAnimation } from "@/components/shared/lottie-animation";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export function About() {
  return (
    <section
      id="about"
      className="bg-primary text-primary-foreground relative px-4 py-20"
    >
      <div className="relative z-1 mx-auto grid w-full max-w-6xl grid-cols-1 content-center gap-10 md:grid-cols-2">
        <Heading variant="h2">
          <span className="sr-only">Utopia Universe</span>
          <LottieAnimation
            animationData={utopiaUniverseData}
            id="utopia-universe"
            className="h-full max-h-1/2 **:nth-[2]:fill-white"
          />
        </Heading>
        <div className="flex flex-col gap-5">
          <Paragraph className="text-xl font-black">
            Welcome to the Utopia Universe, a digital paradise designed to
            reward every step of your journey. Here, community and technology
            converge to foster freedom, creativity, and tangible value.
          </Paragraph>
          <Paragraph className="text-xl font-black">
            At the heart of Utopia is a living world where your engagement fuels
            the economy. Guide the Utopia girl closer to our world&apos;s core
            and watch your influence—and your BNB rewards—grow. We believe in a
            future where exploration is directly linked to prosperity.
          </Paragraph>
          <Paragraph className="text-xl font-black">
            The path is yours to shape, and every discovery brings you closer to
            the center of it all.
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

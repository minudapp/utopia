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
      <div className="relative z-1 mx-auto grid w-full max-w-6xl grid-cols-1 content-center gap-4 md:grid-cols-2 md:gap-10">
        <Heading variant="h2">
          <span className="sr-only">Utopia Universe</span>
          <LottieAnimation
            animationData={utopiaUniverseData}
            id="utopia-universe"
            className="h-full max-h-2/3 md:max-h-1/2"
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
      <div className="absolute bottom-0 left-1/8 w-48 lg:w-96">
        <LottieAnimation animationData={dolphinData} id="dolphin" />
      </div>
      <div className="absolute right-1/8 -bottom-2 w-32 lg:-bottom-4 lg:w-64">
        <LottieAnimation animationData={parrotData} id="parrot" />
      </div>
    </section>
  );
}

"use client";

import theHuddleData from "@/assets/lottie/thehuddle.json";
import { LottieAnimation } from "@/components/shared/lottie-animation";

export function TheHuddle() {
  return (
    <LottieAnimation
      id="the-huddle"
      animationData={theHuddleData}
      loop={false}
      className="**:nth-[2]:fill-white"
    />
  );
}

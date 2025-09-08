"use client";

import theUtopiaData from "@/assets/lottie/the-utopia.json";
import { LottieAnimation } from "@/components/shared/lottie-animation";

export function TheUtopia() {
  return (
    <LottieAnimation
      id="the-utopia"
      animationData={theUtopiaData}
      className="**:nth-[2]:fill-white"
    />
  );
}

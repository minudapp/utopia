"use client";

import Lottie from "lottie-react";

export function LottieAnimation(props: React.ComponentProps<typeof Lottie>) {
  return <Lottie autoplay {...props} />;
}

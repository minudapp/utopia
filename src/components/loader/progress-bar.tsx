"use client";

import { useMotionValueEvent, useTime, useTransform } from "motion/react";
import { useState } from "react";

import { Progress } from "@/components/ui/progress";

type ProgressBarProps = {
  duration: number;
  onComplete: () => void;
};

export function ProgressBar({ duration, onComplete }: ProgressBarProps) {
  const time = useTime();
  const progress = useTransform(time, [0, duration], [0, 100], {
    clamp: false,
  });
  const [value, setValue] = useState(progress.get());

  useMotionValueEvent(progress, "change", (latest) => {
    if (latest < 100) {
      setValue(latest);
      return;
    }

    setValue(100);
    onComplete();
  });

  return <Progress value={value} max={100} />;
}

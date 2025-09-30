"use client";

import { useTime, useTransform } from "motion/react";
import { useEffect, useState } from "react";

import { Progress } from "@/components/ui/progress";

type ProgressBarProps = {
  duration: number;
  onComplete?: () => void;
};

export function ProgressBar({ duration, onComplete }: ProgressBarProps) {
  const time = useTime();
  const progress = useTransform(time, [0, duration], [0, 100], {
    clamp: false,
  });
  const [value, setValue] = useState(progress.get());

  useEffect(() => {
    progress.on("change", (latest) => {
      setValue(latest);
      if (latest >= 100) {
        setValue(100);
        time.stop();
        progress.stop();
        onComplete?.();
      }
    });

    return () => {
      time.stop();
      progress.stop();
    };
  }, [onComplete, progress, time]);

  return (
    <Progress
      value={value}
      max={100}
      className="bg-background/20"
      indicatorClassName="bg-background"
    />
  );
}

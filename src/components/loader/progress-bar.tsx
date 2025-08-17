"use client";

import { useEffect, useRef, useState } from "react";

import { Progress } from "@/components/ui/progress";

type ProgressBarProps = {
  duration: number;
  onComplete?: () => void;
};

const calculateProgress = (elapsed: number, duration: number) => {
  return Math.min((elapsed / duration) * 100, 100);
};

export function ProgressBar({ duration, onComplete }: ProgressBarProps) {
  const [value, setValue] = useState(0);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      let newValue = calculateProgress(elapsed, duration); // Update every 30 ms
      if (newValue >= 100) {
        clearInterval(interval);
        onComplete?.();
        newValue = 100; // Ensure it caps at 100% when complete
      }

      setValue(newValue);
    }, 10);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  return (
    <Progress
      value={value}
      className="bg-background/20"
      indicatorClassName="bg-background"
    />
  );
}

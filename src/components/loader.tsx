"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { Progress } from "@/components/ui/progress";

type ProgressBarProps = {
  duration: number;
  onComplete?: () => void;
};

const calculateProgress = (elapsed: number, duration: number) => {
  return Math.min((elapsed / duration) * 100, 100);
};

function ProgressBar({ duration, onComplete }: ProgressBarProps) {
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

  return <Progress value={value} />;
}

export function Loader({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);

  const onComplete = () => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 500);

    return () => clearTimeout(timeout);
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 3000, ease: "easeInOut" }}
          className="flex h-svh items-center justify-center"
        >
          <div className="mx-auto w-full max-w-xs">
            <ProgressBar duration={3000} onComplete={onComplete} />
          </div>
        </motion.div>
      ) : (
        children
      )}
    </AnimatePresence>
  );
}

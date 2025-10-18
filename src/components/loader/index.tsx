"use client";

import { AnimatePresence } from "motion/react";
import { useCallback, useState } from "react";
import { useSessionStorage } from "usehooks-ts";

import { Logo } from "@/components/shared/logo";
import { Preloader } from "./preloader";
import { ProgressBar } from "./progress-bar";

const DURATION = 2500;
const TRANSITION_DELAY = 100;

export function Loader() {
  const [value, setValue] = useSessionStorage("animation-shown", false);
  const [isVisible, setIsVisible] = useState(true);

  const onComplete = useCallback(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      setValue(true);
    }, TRANSITION_DELAY);

    return () => clearTimeout(timeout);
  }, [setValue]);

  return (
    <AnimatePresence mode="wait">
      {!value && isVisible && (
        <Preloader>
          <div className="flex w-full flex-col items-center gap-8">
            <Logo className="w-40" />
            <ProgressBar duration={DURATION} onComplete={onComplete} />
          </div>
        </Preloader>
      )}
    </AnimatePresence>
  );
}

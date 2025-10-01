"use client";

import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MotionButton = motion.create(Button);

export function AnimatedButton({
  children,
  className,
  ...props
}: React.ComponentProps<typeof MotionButton> & { children: React.ReactNode }) {
  return (
    <MotionButton
      className={cn(
        "relative overflow-hidden rounded-lg py-3 font-bold",
        className,
      )}
      whileHover="hover"
      initial="rest"
      animate="rest"
      {...props}
    >
      <motion.span
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute inset-0 origin-left bg-[#00e2ff]"
      />
      <span className="z-10">{children}</span>
    </MotionButton>
  );
}

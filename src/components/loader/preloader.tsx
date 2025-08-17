"use client";

import { motion, type Variants } from "motion/react";
import { useEffect, useState } from "react";

const slideUpVariants: Variants = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100svh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

const opacityVariants: Variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.8, delay: 0.2 },
  },
};

export function Preloader({ children }: { children: React.ReactNode }) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curveVariants: Variants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUpVariants}
      initial="initial"
      exit="exit"
      className="bg-foreground fixed z-999 flex h-svh w-screen cursor-wait items-center justify-center"
    >
      {dimension.width > 0 && (
        <>
          <motion.div
            variants={opacityVariants}
            initial="initial"
            animate="enter"
            className="absolute z-1 mx-auto flex w-full max-w-xs items-center"
          >
            {children}
          </motion.div>
          <svg className="absolute top-0 h-[calc(100%+300px)] w-full">
            <motion.path
              variants={curveVariants}
              initial="initial"
              exit="exit"
              className="fill-foreground"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}

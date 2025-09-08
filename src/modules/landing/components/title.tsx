"use client";

import dynamic from "next/dynamic";

// import { HuddleIcon } from "@/components/icons/huddle";
import { Heading } from "@/components/ui/heading";

const TheUtopia = dynamic(
  () => import("./the-utopia").then((mod) => mod.TheUtopia),
  {
    ssr: false,
    // loading: () => <HuddleIcon fill="#fff" />,
  },
);

export function Title() {
  return (
    <Heading className="pointer-events-none relative mx-auto w-full max-w-7xl">
      <span className="sr-only">The Huddle</span>
      <span className="relative block w-full">
        <TheUtopia />
      </span>
    </Heading>
  );
}

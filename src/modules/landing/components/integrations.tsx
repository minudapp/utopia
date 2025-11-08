import Link from "next/link";

import utopiaData from "@/assets/lottie/utopia.json";
import { LottieAnimation } from "@/components/shared/lottie-animation";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export function Integrations() {
  return (
    <section id="integrations" className="relative overflow-hidden px-4 py-24">
      {/* Arctic gradient background */}
      <div className="from-muted to-background absolute inset-0 bg-radial to-75%" />

      {/* Floating ice crystals */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-2 w-2 animate-pulse rounded-full bg-white/20" />
        <div className="absolute top-40 right-20 h-1 w-1 animate-pulse rounded-full bg-emerald-300/30 delay-1000" />
        <div className="absolute bottom-32 left-1/4 h-3 w-3 animate-pulse rounded-full bg-blue-200/20 delay-500" />
        <div className="absolute top-60 right-1/3 h-2 w-2 animate-pulse rounded-full bg-white/30 delay-700" />
        <div className="absolute right-10 bottom-20 h-1 w-1 animate-pulse rounded-full bg-emerald-200/40 delay-300" />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        <Heading
          variant="h2"
          className="text-center text-5xl font-bold tracking-tight md:text-6xl"
        >
          INTEGRATIONS
        </Heading>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Paragraph className="mx-auto max-w-2xl text-lg">
            Join the growing ecosystem of Utopia integrations. Build with us and
            become part of the colony!
          </Paragraph>
          <Button
            className="hover:shadow-primary/25 mt-6 rounded-full px-8 py-4 hover:scale-105 hover:shadow-lg"
            asChild
          >
            <Link href="/integrations">Explore our Ecosystem</Link>
          </Button>
        </div>
      </div>
      <div className="absolute right-1/12 bottom-0 w-1/3 md:w-80">
        <LottieAnimation animationData={utopiaData} id="utopia" />
      </div>
    </section>
  );
}

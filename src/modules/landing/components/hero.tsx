import Image from "next/image";
import Link from "next/link";

import penguins from "@/assets/images/cute-pudgy-penguins-on-ice-floe-with-snowflakes-ar.png";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="from-background to-muted relative overflow-hidden bg-gradient-to-b py-20 lg:py-32"
    >
      <Box variant="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h1
              className="text-foreground text-4xl leading-tight font-black lg:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Dive into the World of{" "}
              <span className="text-primary">Pudgy Penguins!</span>
            </h1>

            <p className="text-muted-foreground max-w-lg text-lg leading-relaxed">
              Join the coolest penguin community in the NFT space. Discover
              unique, adorable penguins and become part of our arctic adventure
              filled with exclusive benefits and endless fun.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg">
                <Link href="/dapp">Join the Adventure</Link>
              </Button>
              <Button variant="outline" size="lg">
                Explore Collection
              </Button>
            </div>
          </div>

          <div className="relative">
            <Image
              src={penguins}
              alt="Pudgy Penguins on Ice"
              className="h-auto w-full rounded-2xl shadow-2xl"
            />
            <div className="bg-accent/20 absolute -top-4 -right-4 h-20 w-20 rounded-full blur-xl" />
            <div className="bg-primary/20 absolute -bottom-4 -left-4 h-32 w-32 rounded-full blur-xl" />
          </div>
        </div>
      </Box>
    </section>
  );
}

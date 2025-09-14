import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export function BuyToken() {
  return (
    <section className="flex min-h-[75svh] items-center justify-center bg-gradient-to-br from-blue-100 to-pink-100 px-4 py-20">
      <Card className="w-full max-w-3xl rounded-xl shadow-lg">
        <CardContent className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-1 flex-col items-center gap-6 md:items-start">
            <Heading variant="h2" className="text-center md:text-left">
              Utopia Token
            </Heading>
            <Paragraph className="text-center text-lg md:text-left">
              Symbol: <span className="font-semibold">UTOPIA</span> <br />
              Total Supply: <span className="font-semibold">
                1,000,000
              </span>{" "}
              <br />
              Utility: Governance, Rewards, and More!
            </Paragraph>
            <Paragraph className="text-muted-foreground text-center text-base md:text-left">
              Join the penguin party! Utopia Token powers our playful
              ecosystem—earn rewards, vote on community decisions, and unlock
              exclusive features. Slide into the fun and be part of the waddle!
            </Paragraph>
            <Button
              size="lg"
              className="rounded-full bg-pink-400 px-8 py-3 font-bold text-white shadow-md transition-colors hover:bg-pink-500"
              asChild
            >
              <Link
                href="https://exchange.example.com/buy/utopia"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Now
              </Link>
            </Button>
          </div>
          <div className="relative h-full w-full">
            <Image
              src="/images/share-penguin.png"
              alt="Utopia Token Mascot"
              width={500}
              height={500}
              className="h-full w-full object-contain drop-shadow-lg"
            />
            <div className="to-card from-card/10 absolute inset-0 bg-gradient-to-b from-20%" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

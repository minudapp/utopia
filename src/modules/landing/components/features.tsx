import Image from "next/image";

import placeholder from "@/assets/images/placeholder.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

const features = [
  {
    title: "Unique Rarity",
    description:
      "Each Pudgy Penguin is uniquely generated with rare traits and characteristics that make your penguin truly one-of-a-kind.",
    icon: placeholder,
  },
  {
    title: "Strong Community",
    description:
      "Join thousands of penguin lovers in our vibrant community. Share experiences, trade, and make lifelong friendships.",
    icon: placeholder,
  },
  {
    title: "Exclusive Benefits",
    description:
      "Unlock special perks, early access to new drops, exclusive merchandise, and participate in community events.",
    icon: placeholder,
  },
  {
    title: "Future Utility",
    description:
      "Your Pudgy Penguin will unlock future gaming experiences, metaverse integration, and additional ecosystem benefits.",
    icon: placeholder,
  },
];

export function Features() {
  return (
    <section id="features" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <Heading
            variant="h2"
            className="text-foreground mb-4 text-3xl font-black lg:text-5xl"
          >
            Why Choose <span className="text-primary">Pudgy Penguins?</span>
          </Heading>
          <Paragraph className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Discover what makes our penguin community the coolest place in the
            NFT ecosystem.
          </Paragraph>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border transition-shadow duration-300 hover:shadow-lg"
            >
              <CardHeader className="pb-4 text-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  className="size-12 justify-self-center rounded-full"
                />
                <CardTitle className="text-primary text-xl font-bold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Paragraph className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </Paragraph>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { PudgyPenguinsIcon } from "@/components/icons/pudgy-penguins";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export function About() {
  return (
    <section
      id="about"
      className="bg-secondary text-secondary-foreground px-4 py-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 content-center gap-10 md:grid-cols-2">
        <div>
          <Heading variant="h2" className="h-full max-h-4/5">
            <span className="sr-only">Pudgy Penguins</span>
            <PudgyPenguinsIcon />
          </Heading>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <Paragraph className="text-2xl font-black">
            Welcome to the world of Pudgy Penguins. a web3-born brand that
            fosters creativity, freedom, and community.
          </Paragraph>
          <Paragraph className="text-2xl font-black">
            The Pudgy Penguins brand produces content, merchandise, toys, and
            digital collectables. We believe in the power of play and
            imagination, and we&apos;re committed to helping you unlock your
            inner child.
          </Paragraph>
          <Paragraph className="text-2xl font-black">
            It&apos;s a very cold place but you&apos;ll be warm with your new
            favorite penguin family!
          </Paragraph>
        </div>
      </div>
    </section>
  );
}

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva("scroll-m-20 tracking-tight", {
  variants: {
    variant: {
      h1: "text-balance text-center font-extrabold text-4xl lg:text-5xl 2xl:text-6xl",
      h2: "font-semibold text-3xl lg:text-4xl first:mt-0",
      h3: "font-semibold text-2xl",
      h4: "font-semibold text-xl",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

type HeadingOwnProps = VariantProps<typeof headingVariants> & {
  asChild?: boolean;
};

type Variant = NonNullable<HeadingOwnProps["variant"]>;

type HeadingProps<E extends Variant> = HeadingOwnProps &
  React.ComponentProps<E>;

function Heading<E extends Variant = "h1">({
  className,
  variant,
  asChild = false,
  ...props
}: HeadingProps<E>) {
  const Comp = asChild ? Slot : ((variant ?? "h1") as E);

  return (
    <Comp
      className={cn(headingVariants({ variant, className }))}
      data-slot="heading"
      {...props}
    />
  );
}

export { Heading, headingVariants };

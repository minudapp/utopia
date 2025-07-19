import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const boxVariants = cva("flex", {
  variants: {
    variant: {
      default: "",
      container: "container mx-auto px-4 sm:px-6 lg:px-8",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Box({
  variant,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof boxVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="box"
      className={cn(boxVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Box, boxVariants };

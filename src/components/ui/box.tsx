import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const boxVariants = cva("", {
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

type BoxProps = React.ComponentProps<"div"> &
  VariantProps<typeof boxVariants> & {
    asChild?: boolean;
  };

export function Box({
  variant,
  className,
  asChild = false,
  ...props
}: BoxProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="box"
      className={cn(boxVariants({ variant }), className)}
      {...props}
    />
  );
}

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

function Paragraph({
  className,
  asChild = false,
  clean = true,
  ...props
}: React.ComponentProps<"p"> & {
  asChild?: boolean;
  clean?: boolean;
}) {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      className={cn(
        "max-w-prose leading-7",
        !clean && "[&:not(:first-child)]:mt-6",
        className,
      )}
      data-slot="paragraph"
      {...props}
    />
  );
}

export { Paragraph };

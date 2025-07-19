import { cn } from "@/lib/utils";

type PageContainerTag = "main" | "div";

type PageContainerProps<Tag extends PageContainerTag> = {
  as?: Tag;
  className?: string;
  children: React.ReactNode;
};

export function PageContainer<Tag extends PageContainerTag = "main">({
  as,
  className,
  ...props
}: PageContainerProps<Tag>) {
  const Comp = as || "main";

  return (
    <Comp className={cn("min-h-(--page-height) py-12", className)} {...props} />
  );
}

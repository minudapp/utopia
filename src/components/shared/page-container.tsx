import { cn } from "@/lib/utils";

type PageContainerTag = "main" | "div";

type PageContainerOwnProps<Tag extends PageContainerTag> = {
  as?: Tag;
  children: React.ReactNode;
};

type PageContainerProps<Tag extends PageContainerTag> =
  PageContainerOwnProps<Tag> &
    Omit<React.ComponentPropsWithoutRef<Tag>, keyof PageContainerOwnProps<Tag>>;

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

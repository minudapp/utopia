import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ExternalLinkProps
  extends Omit<React.ComponentProps<typeof Link>, "target" | "rel"> {}

export function ExternalLink(props: ExternalLinkProps) {
  return <Link {...props} target="_blank" rel="noopener noreferrer" />;
}

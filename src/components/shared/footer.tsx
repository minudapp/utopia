import Link from "next/link";

import { Paragraph } from "@/components/ui/paragraph";
import { cn } from "@/lib/utils";
import { ExternalLink } from "./external-link";
import { LogoWithText } from "./logo";

export function Footer({
  className,
  ...props
}: React.ComponentProps<"footer">) {
  return (
    <footer
      className={cn("border-border border-t py-12", className)}
      {...props}
    >
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-4">
            <LogoWithText className="h-auto w-full md:w-64" />
            <Paragraph className="text-sm">
              Your digital paradise awaits. Join the vision today!
            </Paragraph>
          </div>

          <div>
            <h3 className="text-foreground mb-4 font-semibold">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <ExternalLink
                  href="https://x.com/UtopiaBNB"
                  className="underline-offset-4 hover:underline"
                >
                  Twitter
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  href="https://t.me/UtopiaBNB"
                  className="underline-offset-4 hover:underline"
                >
                  Telegram
                </ExternalLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground mb-4 font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <ExternalLink
                  href="https://docs.utopiabnb.com"
                  className="underline-offset-4 hover:underline"
                >
                  Documentation
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  href="https://docs.utopiabnb.com/help-center"
                  className="underline-offset-4 hover:underline"
                >
                  Support
                </ExternalLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground mb-4 font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="underline-offset-4 hover:underline"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="underline-offset-4 hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8">
          <Paragraph className="mx-auto text-center text-sm">
            © {new Date().getFullYear()} Utopia. All rights reserved.
          </Paragraph>
        </div>
      </div>
    </footer>
  );
}

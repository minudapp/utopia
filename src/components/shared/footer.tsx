import Link from "next/link";

import { Paragraph } from "@/components/ui/paragraph";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-card border-border border-t py-12">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-4">
            <Logo className="h-full w-24 object-contain" />
            <Paragraph className="text-sm">
              The coolest utopia community. Join our arctic adventure today!
            </Paragraph>
          </div>

          <div>
            <h3 className="text-foreground mb-4 font-semibold">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Reddit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground mb-4 font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Brand Kit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground mb-4 font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border mt-8 border-t pt-8">
          <Paragraph className="mx-auto text-center text-sm">
            © {new Date().getFullYear()} Utopia. All rights reserved.
          </Paragraph>
        </div>
      </div>
    </footer>
  );
}

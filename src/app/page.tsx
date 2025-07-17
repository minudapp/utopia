import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

import { PageContainer } from "@/components/shared/page-container";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export default function HomePage() {
  return (
    <PageContainer>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
              <Heading className="text-left">
                Build Your SaaS
                <span className="block text-orange-500">Faster Than Ever</span>
              </Heading>
              <Paragraph className="mt-3 sm:mt-5 lg:text-lg">
                Launch your SaaS product in record time with our powerful,
                ready-to-use template. Packed with modern technologies and
                essential integrations.
              </Paragraph>
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full text-lg"
                  asChild
                >
                  <Link
                    href="https://vercel.com/templates/next.js/next-js-saas-starter"
                    target="_blank"
                  >
                    Deploy your own
                    <ArrowRight className="ml-2 size-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

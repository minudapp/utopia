import type { Metadata } from "next";

import { PageContainer } from "@/components/shared/page-container";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export const metadata: Metadata = {
  title: "Terms of Use | Utopia",
  description:
    "Utopia's Terms of Use - Learn about the terms and conditions for using our platform.",
};

export default function TermsPage() {
  return (
    <PageContainer className="px-4 py-32 md:py-48 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <div className="text-6xl">⚖️</div>
          <Heading className="text-primary">Terms of Use</Heading>
          <Paragraph className="text-muted-foreground mx-auto">
            Effective Date:{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date("2025-10-22"))}
          </Paragraph>
        </div>

        <div className="space-y-8">
          <Card className="p-8">
            <div className="space-y-4">
              <Paragraph>
                Welcome to Utopia (&quot;we,&quot; &quot;our,&quot;
                &quot;us&quot;).
              </Paragraph>
              <Paragraph>
                These Terms of Use (&quot;Terms&quot;) govern your access to and
                use of our website (www.utopiabnb.com), documentation
                (docs.utopiabnb.com), and any related materials or services.
              </Paragraph>
              <Paragraph>
                By accessing or using our Terms of Use, you agree to be bound by
                these Terms.
              </Paragraph>
              <Paragraph className="font-semibold">
                If you do not agree with these Terms, please do not use our
                Services.
              </Paragraph>
            </div>
          </Card>

          <Card className="p-8">
            <Heading variant="h2" className="text-primary">
              1. General Information
            </Heading>
            <div className="mt-4 space-y-4">
              <Paragraph>
                Utopia is an educational and informational platform designed to
                provide open, transparent, and community-driven content about
                blockchain technologies.
              </Paragraph>
              <Paragraph>
                We do not require user registration, collect data, or offer any
                paid or subscription-based services.
              </Paragraph>
              <Paragraph>
                Your use of Utopia&apos;s Services is entirely voluntary and at
                your own discretion.
              </Paragraph>
            </div>
          </Card>

          <Card className="p-8">
            <Heading variant="h2" className="text-primary">
              2. No Financial Advice
            </Heading>
            <div className="mt-4 space-y-4">
              <Paragraph>
                All information provided through Utopia — including website
                content, documentation, and resources — is for educational and
                informational purposes only.
              </Paragraph>
              <Paragraph>
                Nothing contained on our website or GitBook constitutes
                financial, investment, or trading advice.
              </Paragraph>
              <Paragraph>
                You should always conduct your own research (DYOR) before making
                any investment or financial decisions.
              </Paragraph>
              <Paragraph className="font-semibold">
                Utopia and its team members are not responsible for any losses,
                risks, or actions taken based on the information available
                through our platforms.
              </Paragraph>
            </div>
          </Card>

          <Card className="p-8">
            <Heading variant="h2" className="text-primary">
              3. No Warranties
            </Heading>
            <div className="mt-4 space-y-4">
              <Paragraph>
                Utopia provides its Services &quot;as is&quot; and &quot;as
                available&quot;, without any warranties or guarantees of any
                kind, express or implied.
              </Paragraph>
              <Paragraph>We do not warrant that:</Paragraph>
              <ul className="mt-3 space-y-3 pl-6">
                <li className="leading-7">
                  <strong>•</strong> The Services will be uninterrupted,
                  error-free, or secure;
                </li>
                <li className="leading-7">
                  <strong>•</strong> The information provided is accurate,
                  complete, or up-to-date; or
                </li>
                <li className="leading-7">
                  <strong>•</strong> Any external links or third-party
                  integrations are safe or functional.
                </li>
              </ul>
              <Paragraph className="mt-4 font-semibold">
                Use of our Services is at your own risk.
              </Paragraph>
            </div>
          </Card>

          <Card className="p-8">
            <Heading variant="h2" className="text-primary">
              4. Third-Party Links
            </Heading>
            <div className="mt-4 space-y-4">
              <Paragraph>
                Our website and documentation may include links to third-party
                websites or resources.
              </Paragraph>
              <Paragraph>
                These links are provided for convenience and informational
                purposes only.
              </Paragraph>
              <Paragraph>
                We are not responsible for the content, accuracy, or policies of
                any third-party sites or services. Accessing them is at your own
                risk.
              </Paragraph>
            </div>
          </Card>

          <Card className="p-8">
            <Heading variant="h2" className="text-primary">
              5. Intellectual Property
            </Heading>
            <div className="mt-4 space-y-4">
              <Paragraph>
                Unless otherwise stated, all content available through Utopia
                (including text, graphics, and design elements) is owned or
                licensed by the Utopia team.
              </Paragraph>
              <Paragraph>
                You may share or quote our content for educational or
                non-commercial purposes, provided that proper credit and a link
                back to our official documentation are included.
              </Paragraph>
            </div>
          </Card>

          <Card className="p-8">
            <Heading variant="h2" className="text-primary">
              6. Limitation of Liability
            </Heading>
            <div className="mt-4 space-y-4">
              <Paragraph>
                To the fullest extent permitted by law, Utopia and its
                contributors shall not be held liable for any direct, indirect,
                incidental, consequential, or special damages arising from your
                use or inability to use our Services.
              </Paragraph>
              <Paragraph>
                This includes, but is not limited to, financial losses, data
                loss, or reputational damage.
              </Paragraph>
            </div>
          </Card>

          <Card className="p-8">
            <Heading variant="h2" className="text-primary">
              7. Changes to These Terms
            </Heading>
            <div className="mt-4 space-y-4">
              <Paragraph>
                We may update or modify these Terms periodically to reflect
                changes in our operations or applicable laws.
              </Paragraph>
              <Paragraph>
                The most recent version will always be available on our official
                documentation page. Continued use of the Services after updates
                constitutes your acceptance of the revised Terms.
              </Paragraph>
            </div>
          </Card>

          <Card className="bg-primary/5 border-primary/20 p-8">
            <Heading variant="h2" className="text-primary">
              8. Contact Us
            </Heading>
            <div className="mt-4 space-y-4">
              <Paragraph>
                If you have any questions or concerns regarding these Terms,
                please reach out to us at:
              </Paragraph>
              <Paragraph className="flex items-center gap-2 font-semibold">
                <span>📧</span>
                <a
                  href="mailto:support@utopiabnb.com"
                  className="text-primary hover:underline"
                >
                  support@utopiabnb.com
                </a>
              </Paragraph>
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}

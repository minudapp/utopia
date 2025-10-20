import type { Metadata } from "next";

import { PageContainer } from "@/components/shared/page-container";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export const metadata: Metadata = {
  title: "Privacy Policy | Utopia",
  description:
    "Utopia's Privacy Policy - Learn how we handle your information and protect your privacy.",
};

export default function PrivacyPage() {
  return (
    <PageContainer className="px-4 py-32 md:py-48 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <div className="text-6xl">🛡️</div>
          <Heading className="text-primary">Privacy Policy</Heading>
        </div>

        <div className="space-y-8">
          <Card className="p-8">
            <Heading variant="h2" className="text-primary">
              1. Introduction
            </Heading>
            <div className="mt-4 space-y-4">
              <Paragraph>Welcome to Utopia.</Paragraph>
              <Paragraph>
                Your privacy is extremely important to us. This Privacy Policy
                explains how we handle your information when you use our website
                (www.utopiabnb.com) and documentation (docs.utopiabnb.com).
              </Paragraph>
            </div>
          </Card>

          <Card className="p-8">
            <Heading variant="h2" className="text-primary">
              2. No Data Collection
            </Heading>
            <div className="mt-4 space-y-4">
              <Paragraph>
                We respect your privacy — Utopia does not collect, store, or
                process any personal data from users.
              </Paragraph>
              <ul className="space-y-3 pl-6">
                <li className="leading-7">
                  <strong>•</strong> We do not require you to create an account.
                </li>
                <li className="leading-7">
                  <strong>•</strong> We do not track your activity through
                  cookies, analytics, or third-party trackers.
                </li>
                <li className="leading-7">
                  <strong>•</strong> We do not collect email addresses, names,
                  wallet addresses, or any form of personal information.
                </li>
                <li className="leading-7">
                  <strong>•</strong> We do not sell, share, or transfer any data
                  to third parties.
                </li>
              </ul>
              <Paragraph className="font-semibold">
                Your interaction with Utopia is completely anonymous.
              </Paragraph>
            </div>
          </Card>

          <Card className="p-8">
            <Heading variant="h2" className="text-primary">
              3. No Financial Advice
            </Heading>
            <div className="mt-4 space-y-4">
              <Paragraph>
                All content provided on Utopia&apos;s platforms — including our
                website, documentation, or related materials — is for
                informational purposes only.
              </Paragraph>
              <Paragraph>
                We do not provide financial, investment, or trading advice of
                any kind.
              </Paragraph>
              <Paragraph>
                Any references to tokens, projects, or blockchain technologies
                are purely educational.
              </Paragraph>
              <Paragraph>
                You should always do your own research (DYOR) and consult
                qualified professionals before making any investment decisions.
              </Paragraph>
              <Paragraph className="font-semibold">
                Utopia and its team members are not responsible for any
                financial losses or actions taken based on the information
                provided through our platforms.
              </Paragraph>
            </div>
          </Card>

          <Card className="p-8">
            <Heading variant="h2" className="text-primary">
              4. Third-Party Links
            </Heading>
            <div className="mt-4 space-y-4">
              <Paragraph>
                Our website and documentation may include links to external
                sites (for example, blockchain explorers, Wallet connection, or
                partner services).
              </Paragraph>
              <Paragraph>
                Please note that we are not responsible for the content or
                privacy practices of those websites. We encourage you to review
                the privacy policies of any third-party services you visit.
              </Paragraph>
            </div>
          </Card>

          <Card className="p-8">
            <Heading variant="h2" className="text-primary">
              5. Security
            </Heading>
            <Paragraph className="mt-4">
              Even though we do not store user data, we maintain strong security
              practices to ensure that our website and documentation are safe
              and free from vulnerabilities or unauthorized access.
            </Paragraph>
          </Card>

          <Card className="p-8">
            <Heading variant="h2" className="text-primary">
              6. Changes to This Policy
            </Heading>
            <Paragraph className="mt-4">
              We may occasionally update this Privacy Policy to reflect
              improvements or legal requirements. The latest version will always
              be available on our official documentation page.
            </Paragraph>
          </Card>

          <Card className="bg-primary/5 border-primary/20 p-8">
            <Heading variant="h2" className="text-primary">
              7. Contact Us
            </Heading>
            <div className="mt-4 space-y-4">
              <Paragraph>
                If you have any questions about this Privacy Policy, please
                contact the Utopia Team at:
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

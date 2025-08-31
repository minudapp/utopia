import Link from "next/link";

import { Logo } from "@/components/shared/logo";
import { PageContainer } from "@/components/shared/page-container";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

export default function NotFound() {
  return (
    <PageContainer className="flex items-center justify-center">
      <div className="max-w-md space-y-8 p-4 text-center">
        <Logo />
        <Heading>Page Not Found</Heading>
        <Paragraph>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Paragraph>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </PageContainer>
  );
}

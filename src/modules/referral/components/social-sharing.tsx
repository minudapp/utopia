"use client";

import { ExternalLinkIcon } from "lucide-react";
import { useCallback } from "react";
import { useAccount } from "wagmi";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useReferralLink } from "@/modules/referral/hooks/use-referral-link";

export function SocialSharing({
  className,
  ...props
}: React.ComponentProps<typeof Card>) {
  const { isConnected } = useAccount();
  const referralLink = useReferralLink();

  const copyReferralLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }, [referralLink]);

  return (
    <Card
      className={cn(
        "text-muted relative border-4 border-[#00142d] bg-[#fbf7eb]",
        className,
      )}
      {...props}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ExternalLinkIcon className="text-primary size-5" />
          Share Your Link
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Button
          onClick={() =>
            window.open(
              `https://twitter.com/intent/tweet?text=Start earning BNB with Utopia! Use my referral link: ${referralLink}`,
              "_blank",
            )
          }
          className="w-full bg-blue-500 hover:bg-blue-600 lg:max-w-full"
          disabled={!isConnected}
        >
          Twitter
        </Button>
        <Button
          onClick={() =>
            window.open(
              `https://t.me/share/url?url=${referralLink}&text=Start earning BNB with Utopia!`,
              "_blank",
            )
          }
          className="w-full bg-blue-400 hover:bg-blue-500 lg:max-w-full"
          disabled={!isConnected}
        >
          Telegram
        </Button>
        <Button
          onClick={copyReferralLink}
          variant="secondary"
          className="w-full lg:max-w-full"
          disabled={!isConnected}
        >
          Copy Link
        </Button>
      </CardContent>
    </Card>
  );
}

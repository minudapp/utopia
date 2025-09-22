"use client";

import { ExternalLinkIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useWeb3Modal } from "@/modules/web3/components/web3-modal-provider";

export function SocialSharing({
  className,
  ...props
}: React.ComponentProps<typeof Card>) {
  const { address, isConnected } = useWeb3Modal();

  const copyReferralLink = async () => {
    const link = `${window.location.origin}?ref=${address}`;
    try {
      await navigator.clipboard.writeText(link);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Card
      className={cn(
        "text-muted relative border-4 border-[#00142d] bg-[#f5fdff]",
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
              `https://twitter.com/intent/tweet?text=Start mining BNB with MinuBones! Use my referral link: ${window.location.origin}?ref=${address}`,
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
              `https://t.me/share/url?url=${window.location.origin}?ref=${address}&text=Start mining BNB with MinuBones!`,
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

"use client";

import { ExternalLinkIcon } from "lucide-react";
import { useAccount } from "wagmi";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SocialSharing() {
  const { address } = useAccount();

  const copyReferralLink = async () => {
    const link = `${window.location.origin}?ref=${address}`;
    try {
      await navigator.clipboard.writeText(link);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Card className="backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ExternalLinkIcon className="h-5 w-5 text-purple-400" />
          Share Your Link
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <Button
            onClick={() =>
              window.open(
                `https://twitter.com/intent/tweet?text=Start mining BNB with MinuBones! Use my referral link: ${window.location.origin}?ref=${address}`,
                "_blank",
              )
            }
            className="bg-blue-500 hover:bg-blue-600"
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
            className="bg-blue-400 hover:bg-blue-500"
          >
            Telegram
          </Button>
          <Button
            onClick={() =>
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}?ref=${address}`,
                "_blank",
              )
            }
            className="bg-blue-600 hover:bg-blue-700"
          >
            Facebook
          </Button>
          <Button onClick={copyReferralLink} variant="secondary">
            Copy Link
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

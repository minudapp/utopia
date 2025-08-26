"use client";

import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import { useAccount } from "wagmi";

import sharePenguin from "@/assets/images/share-penguin.png";
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
    <Card className="text-muted relative border-4 border-[#00142d] bg-[#f5fdff]">
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
          className="w-full max-w-52 bg-blue-500 hover:bg-blue-600 lg:max-w-full"
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
          className="w-full max-w-52 bg-blue-400 hover:bg-blue-500 lg:max-w-full"
        >
          Telegram
        </Button>
        <Button
          onClick={copyReferralLink}
          variant="secondary"
          className="w-full max-w-52 lg:max-w-full"
        >
          Copy Link
        </Button>
      </CardContent>
      <Image
        src={sharePenguin}
        alt="penguin"
        className="absolute right-4 bottom-0 w-32"
      />
    </Card>
  );
}

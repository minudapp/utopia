"use client";

import { CopyIcon, GiftIcon, Share2Icon } from "lucide-react";
import Image from "next/image";
import { useAccount } from "wagmi";

import referralPenguin from "@/assets/images/referral-penguin.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ReferralLink() {
  const { address, isConnected } = useAccount();

  const copyReferralLink = async () => {
    const link = `${window.location.origin}?ref=${address}`;
    try {
      await navigator.clipboard.writeText(link);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const shareReferralLink = async () => {
    const link = `${window.location.origin}?ref=${address}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join MinuBones Mining",
          text: "Start mining BNB with MinuBones! Use my referral link to get started.",
          url: link,
        });
      } catch (err) {
        console.error("Failed to share:", err);
      }
    } else {
      copyReferralLink();
    }
  };

  return (
    <Card className="text-muted relative border-4 border-[#00142d] bg-[#fbf7eb] lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GiftIcon className="text-primary size-5" />
          YOUR REFERRAL LINK
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-3 rounded-lg border p-4">
          <div className="min-w-0 flex-1">
            <p className="text-sm">YOUR LINK:</p>
            <p className="mt-1 truncate font-mono text-sm">
              {isConnected
                ? `${window.location.origin}?ref=${address}`
                : "Connect wallet to generate link"}
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={copyReferralLink} variant="default" size="sm">
              <CopyIcon className="mr-1 size-4" />
              Copy
            </Button>
            <Button onClick={shareReferralLink} variant="default" size="sm">
              <Share2Icon className="mr-1 size-4" />
              Share
            </Button>
          </div>
        </div>

        <div className="w-3/4 rounded-lg border p-4">
          <p className="leading-relaxed">
            <span className="text-primary font-semibold">
              You Can Earn BNB Tokens
            </span>{" "}
            for inviting new users to join Minu. The Minu contract has a direct,
            one-level referral system{" "}
            <span className="text-primary font-semibold">
              That Rewards Referrer
            </span>{" "}
            when invited users deposit and withdraw their tokens. Promote your
            referral link and{" "}
            <span className="text-primary font-semibold">
              Earn 12% Referral Rewards
            </span>
            .
          </p>
        </div>
      </CardContent>
      <Image
        src={referralPenguin}
        alt="penguin"
        className="absolute right-4 bottom-0 w-32"
      />
    </Card>
  );
}

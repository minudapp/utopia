"use client";

import { CopyIcon, GiftIcon, Share2Icon } from "lucide-react";
import { useAccount } from "wagmi";

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
    <Card className="backdrop-blur-sm lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GiftIcon className="h-5 w-5 text-orange-400" />
          YOUR REFERRAL LINK
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3 rounded-lg border p-4">
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-sm">YOUR LINK:</p>
            <p className="truncate font-mono text-sm">
              {isConnected
                ? `${window.location.origin}?ref=${address}`
                : "Connect wallet to generate link"}
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={copyReferralLink}
              variant="outline"
              size="sm"
              className="border-gray-300"
            >
              <CopyIcon className="mr-1 h-4 w-4" />
              Copy
            </Button>
            <Button
              onClick={shareReferralLink}
              variant="outline"
              size="sm"
              className="border-orange-500 bg-orange-500 hover:bg-orange-600"
            >
              <Share2Icon className="mr-1 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        <div className="rounded-lg border p-4">
          <p className="leading-relaxed">
            <span className="font-semibold text-orange-400">
              You Can Earn BNB Tokens
            </span>{" "}
            for inviting new users to join Minu. The Minu contract has a direct,
            one-level referral system{" "}
            <span className="font-semibold text-orange-400">
              That Rewards Referrer
            </span>{" "}
            when invited users deposit and withdraw their tokens. Promote your
            referral link and{" "}
            <span className="font-semibold text-orange-400">
              Earn 12% Referral Rewards
            </span>
            .
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

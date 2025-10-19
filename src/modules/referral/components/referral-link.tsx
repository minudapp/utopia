"use client";

import { CheckIcon, CopyIcon, GiftIcon, Share2Icon } from "lucide-react";
import { useCallback, useState } from "react";
import { useAccount } from "wagmi";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useReferralLink } from "@/modules/referral/hooks/use-referral-link";

export function ReferralLink() {
  const { isConnected } = useAccount();
  const [copied, setCopied] = useState(false);
  const referralLink = useReferralLink();

  const copyReferralLink = useCallback(async () => {
    let timeout: number | null = null;
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      timeout = window.setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [referralLink]);

  const shareReferralLink = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join Utopia World",
          text: "Start earning BNB with Utopia! Use my referral link to get started.",
          url: referralLink,
        });
      } catch (err) {
        console.error("Failed to share:", err);
      }
    } else {
      copyReferralLink();
    }
  }, [referralLink, copyReferralLink]);

  return (
    <Card className="text-muted relative border-4 border-[#00142d] bg-[#fbf7eb] lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GiftIcon className="text-primary size-5" />
          YOUR REFERRAL LINK
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-col gap-3 rounded-lg border p-4">
          <p className="text-sm">YOUR LINK:</p>
          <p className="mt-1 truncate font-mono text-sm">
            {referralLink || "Connect wallet to generate link"}
          </p>
          <div className="flex gap-2">
            <Button
              onClick={copyReferralLink}
              variant="default"
              size="sm"
              disabled={!isConnected}
            >
              {copied ? (
                <CheckIcon className="mr-1" />
              ) : (
                <CopyIcon className="mr-1" />
              )}
              Copy
            </Button>
            <Button
              onClick={shareReferralLink}
              variant="default"
              size="sm"
              disabled={!isConnected}
            >
              <Share2Icon className="mr-1 size-4" />
              Share
            </Button>
          </div>
        </div>

        <div className="rounded-lg border p-4">
          <p className="leading-relaxed">
            <span className="text-primary font-semibold">
              You Can Earn BNB Tokens
            </span>{" "}
            for inviting new explorers to find Utopia. The Utopia contract has a
            direct, one-level referral system{" "}
            <span className="text-primary font-semibold">
              That Rewards Referrer
            </span>{" "}
            when invited users deposit and withdraw their tokens. Promote your
            referral link and{" "}
            <span className="text-primary font-semibold">
              Earn 8% Referral Rewards
            </span>
            .
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

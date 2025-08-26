import {
  AlertTriangleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ExternalLinkIcon,
  InfoIcon,
  PickaxeIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

const steps = [
  {
    id: 1,
    title: "Enter BNB Amount",
    desc: "Set your investment amount",
  },
  {
    id: 2,
    title: "Click 'Hire Miners'",
    desc: "Start your mining operation",
  },
  {
    id: 3,
    title: "Miners Find Tokens",
    desc: "Watch your miners work",
  },
  {
    id: 4,
    title: "Compound Daily",
    desc: "Reinvest for maximum growth",
  },
  {
    id: 5,
    title: "Withdraw Profit!",
    desc: "Collect your earnings",
  },
];

export function HowToStart() {
  return (
    <section id="how-to-start" className="px-4 py-16">
      <div className="text-center">
        <Heading variant="h2">HOW TO START MINING</Heading>
        <Paragraph className="text-primary mx-auto mt-4 max-w-4xl text-lg font-semibold">
          Complete guide and instructions for the DeFi ecosystem
        </Paragraph>
      </div>
      <div className="mx-auto mt-8 grid w-full max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-2">
        {/* Interactive Steps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <CheckCircleIcon className="size-6 text-green-400" />
              Complete 5 Simple Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`group cursor-pointer rounded-lg border border-gray-600/50 bg-gray-700/30 p-4 transition-all duration-300 hover:bg-gray-700/50`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 font-bold text-gray-300 transition-all duration-300 group-hover:bg-gray-500`}
                  >
                    {step.id}
                  </div>
                  <div className="flex-1">
                    <Heading
                      variant="h3"
                      className="group-hover:text-primary font-semibold text-white transition-colors duration-300"
                    >
                      {step.title}
                    </Heading>
                    <Paragraph className="text-sm text-gray-400">
                      {step.desc}
                    </Paragraph>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Detailed Instructions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <InfoIcon className="size-6 text-blue-400" />
              Detailed Instructions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Warning */}
            <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
              <div className="flex items-start gap-3">
                <AlertTriangleIcon className="mt-0.5 size-5 flex-shrink-0 text-yellow-400" />
                <Paragraph className="text-sm text-yellow-200">
                  <strong>Important:</strong> The deposited BNB cannot be
                  withdrawn.
                </Paragraph>
              </div>
            </div>

            {/* Step-by-step instructions */}
            <div className="space-y-5">
              <div className="border-primary/90 border-l-4 pl-4">
                <Heading variant="h4" className="text-primary font-semibold">
                  1. Prepare Your Wallet
                </Heading>
                <Paragraph className="mt-2 text-sm leading-relaxed text-gray-300">
                  Send BNB to your Metamask/Trustwallet on Binance Smart Chain
                  Network (BSC).
                </Paragraph>
              </div>

              <div className="border-primary/90 border-l-4 pl-4">
                <Heading variant="h4" className="text-primary font-semibold">
                  2. Get BNB Tokens
                </Heading>
                <Paragraph className="mt-2 text-sm leading-relaxed text-gray-300">
                  In Metamask/Trustwallet Browser, connect to{" "}
                  <span className="text-primary font-medium">PANCAKESWAP</span>{" "}
                  and swap to BNB.
                </Paragraph>
              </div>

              <div className="border-primary/90 border-l-4 pl-4">
                <Heading variant="h4" className="text-primary font-semibold">
                  3. Start Mining
                </Heading>
                <div className="mt-2 space-y-2 text-sm text-gray-300">
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-medium">A.</span>
                    <span>Enter the BNB amount to Hire Miners.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-medium">B.</span>
                    <span>Click Hire miners.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-medium">C.</span>
                    <span>
                      Compound Daily to hire more miners and increase your
                      profit.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-medium">D.</span>
                    <span>
                      Withdraw Profit using the{" "}
                      <span className="text-primary font-medium">
                        Collect Rewards
                      </span>{" "}
                      button.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategy tip */}
            <div className="border-secondary/30 from-secondary/10 to-primary/10 rounded-lg border bg-gradient-to-r p-4">
              <Heading
                variant="h4"
                className="text-secondary flex items-center gap-2 font-semibold"
              >
                <TrendingUpIcon className="size-4" />
                Pro Strategy
              </Heading>
              <Paragraph className="mt-2 text-sm leading-relaxed text-gray-300">
                <span className="text-primary font-medium">
                  The Object Of The Game
                </span>{" "}
                is hiring more miners, sooner and more often than other players.
                This in turn earns you more BNB faster. Hiring more miners using
                your daily BNB earnings will 3x your miners within 30 days or
                less.
              </Paragraph>
            </div>

            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <Button asChild>
                <Link
                  href="https://pancakeswap.finance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLinkIcon className="mr-2 inline-block size-4" />
                  PancakeSwap
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="#mining">
                  <ArrowRightIcon className="mr-2 inline-block size-4" />
                  Start Mining
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Quick Stats */}
      <div className="mx-auto mt-8 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <CardContent className="p-6 text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-500">
              <TrendingUpIcon className="size-6 text-white" />
            </div>
            <h3 className="mt-3 text-lg font-bold text-green-400">
              Daily Profit
            </h3>
            <p className="text-2xl font-bold text-white">Up to 8%</p>
            <p className="text-sm text-gray-400">Maximum daily returns</p>
          </CardContent>
        </Card>

        <Card className="border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
          <CardContent className="p-6 text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-blue-500">
              <PickaxeIcon className="size-6 text-white" />
            </div>
            <h3 className="mt-3 text-lg font-bold text-blue-400">Mining Fee</h3>
            <p className="text-2xl font-bold text-white">4%</p>
            <p className="text-sm text-gray-400">Platform fee</p>
          </CardContent>
        </Card>

        <Card className="border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
          <CardContent className="p-6 text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-purple-500">
              <UsersIcon className="size-6 text-white" />
            </div>
            <h3 className="mt-3 text-lg font-bold text-purple-400">
              Referral Bonus
            </h3>
            <p className="text-2xl font-bold text-white">12%</p>
            <p className="text-sm text-gray-400">Referral rewards</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

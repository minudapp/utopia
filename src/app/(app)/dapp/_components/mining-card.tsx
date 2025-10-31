import Link from "next/link";
import { formatEther } from "viem";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Form } from "@/modules/mining/components/form";
import { useUserState } from "@/modules/web3/hooks/use-user-state";
import { translateQuantity } from "@/modules/web3/utils/translate-quantity";
import { isBigInt } from "@/utils/guards";

const bonesToHatchOneMiner = 86_400;
const devFeePercent = 4;
const reg = new RegExp("^-?\\d+(?:.\\d{0,4})?");

function calculateBeanRewards(rewards: bigint | null) {
  const formatted = formatEther(rewards ?? BigInt(0));
  const wei = parseFloat(formatted);
  const match = wei.toString().match(reg);
  if (!match) return "N/A";

  let amount = parseFloat(match[0]);
  if (wei > 0) {
    const devFee = (wei * devFeePercent) / 100;
    amount = amount > devFee ? parseFloat(match[0]) - devFee : amount;
  }

  return translateQuantity(amount, 4);
}

function calculateTravelSpeed(boneBuyPrice: bigint, miners: bigint) {
  const total = Number(boneBuyPrice) / bonesToHatchOneMiner;
  const result = (Number(miners) * 0.825) / total;
  const match = result.toString().match(reg);
  if (!match) return "0";

  const speed = Number(match[0]) / 24;

  return translateQuantity(speed, 4);
}

export function MiningCard(props: React.ComponentProps<typeof Card>) {
  const { data } = useUserState();

  const beanRewards = calculateBeanRewards(data.beanRewards);
  const miningSpeed =
    isBigInt(data.boneBuy) &&
    data.boneBuy > BigInt(0) &&
    isBigInt(data.miners) &&
    data.miners > BigInt(0)
      ? calculateTravelSpeed(data.boneBuy, data.miners)
      : "0";

  return (
    <Card {...props}>
      <CardContent className="space-y-6">
        <Form />
        <div className="flex flex-col items-stretch gap-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Explorers</span>
            <span>{data.miners}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Travel Speed</span>
            <span>{miningSpeed} BNB/24h</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Reward</span>
            <span className="flex items-center gap-1">{beanRewards} BNB</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-auto flex-col items-start gap-1">
        <span className="text-muted-foreground text-xs">
          *You must hold a minimum of 10,000 $UTOPIA (0.001% of total supply) to
          begin your journey.
        </span>
        <span className="text-muted-foreground text-xs">
          *There is a 4% fee when you Hire Explorers and a 4% fee when you
          Collect your Rewards.
        </span>
        <span className="text-muted-foreground text-xs">
          * For a full map and instructions, please consult our:{" "}
          <Link href="https://docs.utopiabnb.com" target="_blank">
            Expedition Manual
          </Link>
        </span>
      </CardFooter>
    </Card>
  );
}

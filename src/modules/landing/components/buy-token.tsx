import Image from "next/image";
import Link from "next/link";
import { createPublicClient, formatUnits, getContract, http } from "viem";

import coin from "@/assets/images/coin.png";
import { AnimatedButton } from "@/components/shared/animated-button";
import { CopyButton } from "@/components/shared/copy-button";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { chains } from "@/lib/wagmi";
import { abi } from "@/modules/web3/abis/token";
import { TOKEN_ADDRESS } from "@/modules/web3/constants";

const percentFormatter = new Intl.NumberFormat("en-US", {
  style: "percent",
  maximumFractionDigits: 2,
});

const supplyFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 2,
});

function formatPercentage(value: number) {
  return percentFormatter.format(value);
}

function formatSupply(value: bigint) {
  return supplyFormatter.format(Number(value));
}

async function getTokenInfo() {
  const publicClient = createPublicClient({
    chain: chains.at(0),
    transport: http(),
    batch: { multicall: true },
  });

  const contract = getContract({
    address: TOKEN_ADDRESS,
    abi,
    client: publicClient,
  });

  const [name, symbol, totalSupply, decimals, minerFee, marketingFee] =
    await Promise.all([
      contract.read.name(),
      contract.read.symbol(),
      contract.read.totalSupply(),
      contract.read.decimals(),
      contract.read.minerFee(),
      contract.read.marketingFee(),
    ]);

  return {
    name,
    symbol,
    totalSupply: BigInt(formatUnits(totalSupply, decimals)),
    fee: Number(minerFee + marketingFee) / 10000,
  };
}

export async function BuyToken() {
  const { fee, symbol, totalSupply } = await getTokenInfo();

  return (
    <section
      id="buy-token"
      className="flex min-h-[75svh] items-center justify-center bg-[#00e2ff] px-4 py-20"
    >
      <Card className="w-full max-w-4xl rounded-xl shadow-lg">
        <CardContent className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <Image
            src={coin}
            alt="Utopia Token"
            className="h-full w-full object-contain drop-shadow-lg md:order-last"
          />
          <div className="flex flex-1 flex-col items-center gap-6 md:items-start">
            <Heading variant="h2" className="text-center md:text-left">
              Utopia Token
            </Heading>
            <ul className="flex flex-col gap-1">
              <li className="text-center text-lg md:text-left">
                Symbol: <span className="font-semibold">{symbol}</span>
              </li>
              <li className="text-center text-lg md:text-left">
                Total Supply:{" "}
                <span className="font-semibold">
                  {formatSupply(totalSupply)}
                </span>
              </li>
              <li className="text-center text-lg md:text-left">
                Network: <span className="font-semibold">BNB Chain</span>
              </li>
              <li className="text-center text-lg md:text-left">
                Fee:{" "}
                <span className="font-semibold">
                  {formatPercentage(fee)} Buy - {formatPercentage(fee)} Sell
                </span>
              </li>
              <li className="text-center text-lg md:text-left">
                CA: <span className="font-semibold">{TOKEN_ADDRESS}</span>
                <CopyButton value={TOKEN_ADDRESS} className="ml-2 size-7" />
              </li>
            </ul>
            <Paragraph className="text-center text-base md:text-left">
              Your Gateway to Utopia Awaits. The Utopia Token isn&apos;t just a
              asset—it&apos;s your share of governance, your passport to
              rewards, and your membership to an exclusive world. Secure your
              position and become a founding citizen today.
            </Paragraph>
            <Link
              href="https://exchange.example.com/buy/utopia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AnimatedButton size="lg" className="rounded-full">
                Buy Now
              </AnimatedButton>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

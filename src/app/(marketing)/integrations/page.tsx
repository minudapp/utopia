import Image from "next/image";
import Link from "next/link";

import { PageContainer } from "@/components/shared/page-container";
import { Heading } from "@/components/ui/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = Object.freeze([
  {
    id: "wallets",
    name: "Wallets",
  },
  {
    id: "tracking-apps",
    name: "Tracking Apps",
  },
  {
    id: "dapp-analytics",
    name: "DApp Analytics",
  },
  {
    id: "x-chain-swap-aggregators",
    name: "Cross Chain Swap / Aggregators",
  },
  {
    id: "dex",
    name: "DEX",
  },
  {
    id: "social-fi",
    name: "SocialFi",
  },
] as const satisfies {
  id: string;
  name: string;
}[]);

type CategoryId = (typeof categories)[number]["id"];

interface Integration {
  id: string;
  name: string;
  url: string;
  icon: string;
  categoryId: CategoryId;
}

const integrations = Object.freeze<Integration[]>([
  {
    id: "bitget-wallet",
    name: "BitGet Wallet",
    url: "https://web3.bitget.com/en",
    icon: "/images/integrations/bitget-wallet.png",
    categoryId: "wallets",
  },
  {
    id: "okx-wallet",
    name: "OKX Wallet",
    url: "https://web3.okx.com/token",
    icon: "/images/integrations/okx-wallet.webp",
    categoryId: "wallets",
  },
  {
    id: "binance-wallet",
    name: "Binance Wallet",
    url: "https://web3.binance.com/el/markets/trending?chain=bsc",
    icon: "/images/integrations/binance-wallet.png",
    categoryId: "wallets",
  },
  {
    id: "math-wallet",
    name: "Math Wallet",
    url: "https://mathwallet.org/en-us",
    icon: "/images/integrations/math-wallet.png",
    categoryId: "wallets",
  },
  {
    id: "safepal",
    name: "Safepal",
    url: "https://www.safepal.com/en",
    icon: "/images/integrations/safepal.webp",
    categoryId: "wallets",
  },
  {
    id: "onekey",
    name: "OneKey",
    url: "https://onekey.so/cryptos/6906386c1c4e3219c533c990",
    icon: "/images/integrations/onekey.webp",
    categoryId: "wallets",
  },
  {
    id: "tangem",
    name: "Tangem",
    url: "https://tangem.com/en",
    icon: "/images/integrations/tangem.webp",
    categoryId: "wallets",
  },
  {
    id: "wello",
    name: "Wello",
    url: "https://www.wello.tech",
    icon: "/images/integrations/wello.png",
    categoryId: "wallets",
  },
  {
    id: "metamask",
    name: "MetaMask",
    url: "https://metamask.io",
    icon: "/images/integrations/metamask.png",
    categoryId: "wallets",
  },
  {
    id: "trust-wallet",
    name: "Trust Wallet",
    url: "https://trustwallet.com",
    icon: "/images/integrations/trust-wallet.png",
    categoryId: "wallets",
  },
  {
    id: "coinmarketcap",
    name: "CoinMarketCap",
    url: "https://coinmarketcap.com/currencies/utopiabnb",
    icon: "/images/integrations/coinmarketcap.png",
    categoryId: "tracking-apps",
  },
  {
    id: "coingecko",
    name: "CoinGecko",
    url: "https://www.coingecko.com/en/coins/utopia-2",
    icon: "/images/integrations/coingecko.png",
    categoryId: "tracking-apps",
  },
  {
    id: "dexscreener",
    name: "DexScreener",
    url: "https://dexscreener.com/bsc/0xa024ee286c8d35996d129178ffd731cc85bb3536",
    icon: "/images/integrations/dexscreener.jpg",
    categoryId: "tracking-apps",
  },
  {
    id: "dextools",
    name: "DexTools",
    url: "https://www.dextools.io/app/en/token/utopia?t=1762510979370",
    icon: "/images/integrations/dextools.jpg",
    categoryId: "tracking-apps",
  },
  {
    id: "dapp-radar",
    name: "DappRadar",
    url: "https://dappradar.com/dapp/utopia",
    icon: "/images/integrations/dapp-radar.png",
    categoryId: "dapp-analytics",
  },
  {
    id: "defi-llama",
    name: "DeFi Llama",
    url: "https://defillama.com/protocol/utopia",
    icon: "/images/integrations/defi-llama.jpg",
    categoryId: "dapp-analytics",
  },
  {
    id: "zapper",
    name: "Zapper",
    url: "https://zapper.xyz/el/apps/utopia",
    icon: "/images/integrations/zapper.png",
    categoryId: "dapp-analytics",
  },
  {
    id: "squid-router",
    name: "Squid Router",
    url: "https://app.squidrouter.com",
    icon: "/images/integrations/squid-router.png",
    categoryId: "x-chain-swap-aggregators",
  },
  {
    id: "matcha",
    name: "Matcha",
    url: "https://matcha.xyz/tokens/bsc/0xd83c128e7498be555845a6dc331a99e1524c1777",
    icon: "/images/integrations/matcha.jpg",
    categoryId: "x-chain-swap-aggregators",
  },
  {
    id: "houdini-swap",
    name: "Houdini Swap",
    url: "https://houdiniswap.com/?tokenIn=BNB&tokenOut=UTOPIABSC",
    icon: "/images/integrations/houdini-swap.png",
    categoryId: "x-chain-swap-aggregators",
  },
  {
    id: "rubic-finance",
    name: "Rubic Finance",
    url: "https://app.rubic.exchange/?fromChain=BSC&toChain=BSC&from=BNB&to=UTOPIA",
    icon: "/images/integrations/rubic-finance.png",
    categoryId: "x-chain-swap-aggregators",
  },
  {
    id: "dodo",
    name: "DODO",
    url: "https://app.dodoex.io/swap/network/bsc-mainnet/BNB/UTOPIA",
    icon: "/images/integrations/dodo.webp",
    categoryId: "x-chain-swap-aggregators",
  },
  {
    id: "pancakeswap",
    name: "PancakeSwap",
    url: "https://pancakeswap.finance/swap?outputCurrency=0xd83C128e7498bE555845A6dc331A99E1524C1777",
    icon: "/images/integrations/pancakeswap.png",
    categoryId: "dex",
  },
  {
    id: "sushiswap",
    name: "SushiSwap",
    url: "https://www.sushi.com/bsc/swap?token0=NATIVE&token1=0xd83c128e7498be555845a6dc331a99e1524c1777",
    icon: "/images/integrations/sushiswap.png",
    categoryId: "dex",
  },
  {
    id: "lunarcrush",
    name: "LunarCrush",
    url: "https://lunarcrush.com/topic/0xd83c128e7498be555845a6dc331a99e1524c1777",
    icon: "/images/integrations/lunarcrush.png",
    categoryId: "social-fi",
  },
  {
    id: "iq-wiki",
    name: "IQ.Wiki",
    url: "https://iq.wiki/wiki/utopia",
    icon: "/images/integrations/iq-wiki.png",
    categoryId: "social-fi",
  },
]);

function getCategoryIntegrations(id: CategoryId) {
  return integrations.filter(({ categoryId }) => categoryId === id);
}

export default function IntegrationsPage() {
  return (
    <PageContainer className="py-20 md:py-32">
      <Heading className="uppercase 2xl:text-5xl">
        Explore our Ecosystem
      </Heading>
      <Tabs defaultValue="all" className="mt-10 items-center">
        <TabsList className="gap-1 bg-transparent">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-5 py-4 text-base data-[state=active]:shadow-none"
          >
            All
          </TabsTrigger>
          {categories.map(({ id, name }) => (
            <TabsTrigger
              key={id}
              value={id}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-5 py-4 text-base data-[state=active]:shadow-none"
            >
              {name}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent
          value="all"
          className="mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {integrations.map(({ id, name, url, icon }) => (
            <Link
              key={id}
              href={url}
              target="_blank"
              className="bg-foreground text-background flex aspect-video flex-col items-center justify-center gap-3 rounded-xl p-6"
            >
              <Image
                src={icon}
                alt={name}
                width={140}
                height={80}
                className="h-1/2 w-full rounded object-contain"
              />
              <p className="text-2xl font-extrabold">{name}</p>
            </Link>
          ))}
        </TabsContent>
        {categories.map(({ id }) => (
          <TabsContent
            key={id}
            value={id}
            className="mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {getCategoryIntegrations(id).map(({ id, name, url, icon }) => (
              <Link
                key={id}
                href={url}
                target="_blank"
                className="bg-foreground text-background flex aspect-video flex-col items-center justify-center gap-3 rounded-xl p-6"
              >
                <Image
                  src={icon}
                  alt={name}
                  width={140}
                  height={80}
                  className="h-1/2 w-full rounded object-contain"
                />
                <p className="text-2xl font-extrabold">{name}</p>
              </Link>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </PageContainer>
  );
}

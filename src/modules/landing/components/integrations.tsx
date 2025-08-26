import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

const integrations = [
  // DeFi Platforms
  { name: "PenguinSwap", category: "defi", icon: "🐧" },
  { name: "IceVault", category: "defi", icon: "🧊" },
  { name: "FrostFi", category: "defi", icon: "❄️" },
  { name: "ArcticDAO", category: "defi", icon: "🏔️" },

  // Exchanges
  { name: "PolarExchange", category: "exchange", icon: "🔄" },
  { name: "ChillTrade", category: "exchange", icon: "📈" },
  { name: "IceBerg Markets", category: "exchange", icon: "🗻" },
  { name: "Penguin Pro", category: "exchange", icon: "💎" },

  // Tools & Development
  { name: "Waddle Tools", category: "tools", icon: "🛠️" },
  { name: "Flipper SDK", category: "tools", icon: "⚡" },
  { name: "Colony Builder", category: "tools", icon: "🏗️" },
  { name: "Ice Analytics", category: "tools", icon: "📊" },

  // Gaming & Entertainment
  { name: "Penguin Racing", category: "games", icon: "🏁" },
  { name: "Fish Hunt", category: "games", icon: "🎣" },
  { name: "Slide Adventure", category: "games", icon: "🛷" },
  { name: "Huddle Party", category: "games", icon: "🎉" },

  // Additional integrations to fill the grid
  { name: "Frost Wallet", category: "tools", icon: "👛" },
  { name: "Penguin Staking", category: "defi", icon: "🥩" },
  { name: "Ice Bridge", category: "defi", icon: "🌉" },
  { name: "Waddle Rewards", category: "exchange", icon: "🎁" },
  { name: "Colony Chat", category: "tools", icon: "💬" },
  { name: "Flipper NFTs", category: "games", icon: "🖼️" },
];

export function Integrations() {
  return (
    <section className="relative overflow-hidden px-4 py-24">
      {/* Arctic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 opacity-95" />

      {/* Floating ice crystals */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-2 w-2 animate-pulse rounded-full bg-white/20" />
        <div className="absolute top-40 right-20 h-1 w-1 animate-pulse rounded-full bg-emerald-300/30 delay-1000" />
        <div className="absolute bottom-32 left-1/4 h-3 w-3 animate-pulse rounded-full bg-blue-200/20 delay-500" />
        <div className="absolute top-60 right-1/3 h-2 w-2 animate-pulse rounded-full bg-white/30 delay-700" />
        <div className="absolute right-10 bottom-20 h-1 w-1 animate-pulse rounded-full bg-emerald-200/40 delay-300" />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Header */}
        <Heading
          variant="h2"
          className="text-center text-5xl font-bold tracking-tight md:text-6xl"
        >
          INTEGRATIONS
        </Heading>

        {/* Integration Grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration) => (
            <Card
              key={integration.name}
              className="group cursor-pointer border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-emerald-400/50 hover:bg-white/15"
            >
              <div className="flex items-center gap-3 p-4">
                <div className="text-2xl transition-transform duration-300 group-hover:scale-110">
                  {integration.icon}
                </div>
                <div className="flex-1">
                  <Heading
                    variant="h3"
                    className="text-lg font-bold transition-colors group-hover:text-emerald-300"
                  >
                    {integration.name}
                  </Heading>
                </div>
                <div className="size-2 rounded-full bg-emerald-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Paragraph className="mx-auto max-w-2xl text-lg">
            Join the growing ecosystem of Pudgy Penguins integrations. Build
            with us and become part of the colony!
          </Paragraph>
          <Button className="hover:shadow-primary/25 mt-6 rounded-full px-8 py-4 hover:scale-105 hover:shadow-lg">
            Explore Partnerships
          </Button>
        </div>
      </div>
    </section>
  );
}

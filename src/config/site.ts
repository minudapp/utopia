const url = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export type SiteConfig = {
  title: string;
  description: string;
  keywords: string[];
  url: string;
  author: {
    name: string;
    email?: string;
    url?: string;
  };
};

export const siteConfig = Object.freeze({
  title: "Utopia",
  description:
    "A digital world where exploration builds community and generates rewards.",
  keywords: [
    "UtopiaBNB",
    "digital world",
    "explore to earn",
    "web3 community",
    "digital exploration",
    "virtual rewards",
    "NFT world",
    "metaverse platform",
    "blockchain community",
    "social exploration",
    "decentralized rewards",
    "crypto exploration",
  ],
  url,
  author: {
    name: "Utopia Team",
  },
}) satisfies SiteConfig;

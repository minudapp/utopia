const url = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export type SiteConfig = {
  title: string;
  description: string;
  keywords: string[];
  url: string;
  ogImage: string;
  author: {
    name: string;
    email?: string;
    url?: string;
  };
};

export const siteConfig = Object.freeze({
  title: "Utopia",
  description: "A decentralized mining simulation game.",
  keywords: [
    "utopia",
    "mining",
    "simulation",
    "game",
    "decentralized",
    "blockchain",
    "web3",
  ],
  url,
  author: {
    name: "George Vlassis",
    email: "geovla.dev@gmail.com",
  },
  ogImage: `${url}/og-image.jpg`,
}) satisfies SiteConfig;

// import { env } from "./env/client";

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
  title: "My Site",
  description: "A sample site configuration",
  keywords: ["example", "site", "config"],
  url: url,
  author: {
    name: "George Vlassis",
  },
  ogImage: `${url}/og-image.png`,
}) satisfies SiteConfig;

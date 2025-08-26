// import { env } from "./env/client";

const url = "https://example.com";

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

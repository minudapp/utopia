import { env } from "./env/client";

export interface SiteConfig {
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
  social?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export const siteConfig = Object.freeze({
  title: "My Site",
  description: "A sample site configuration",
  keywords: ["example", "site", "config"],
  url: env.NEXT_PUBLIC_APP_URL,
  author: {
    name: "George Vlassis",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og-image.png`,
  social: {},
}) satisfies SiteConfig;

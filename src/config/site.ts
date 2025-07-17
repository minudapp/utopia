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
  url: "https://www.example.com",
  author: {
    name: "George Vlassis",
  },
  ogImage: "https://www.example.com/og-image.png",
  social: {},
}) satisfies SiteConfig;

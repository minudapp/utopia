import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pino-pretty"],
  async rewrites() {
    const docsOrigin = process.env.DOCS_ORIGIN;
    if (!docsOrigin) throw new Error("DOCS_ORIGIN is required");

    return {
      beforeFiles: [
        { source: "/docs", destination: `${docsOrigin}/docs` },
        { source: "/docs/:path+", destination: `${docsOrigin}/docs/:path+` },
      ],
    };
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
};

export default nextConfig;

## Getting Started

First, run the development server:

```bash
DOCS_ORIGIN=http://localhost:3001 pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Documentation zone

This repository owns `utopiabnb.com` and proxies `/docs` to the separate docs
Next.js application. Set `DOCS_ORIGIN` before starting or building the main site;
the config fails if it is missing. Use an origin without a trailing slash or
`/docs`:

```bash
DOCS_ORIGIN=https://utopia-docs-sigma.vercel.app
```

Set this environment variable on the main website's Vercel project, then redeploy.
Keep `utopiabnb.com` attached to the main website project. The docs project uses
its stable Vercel origin and must allow requests from the main website through
Deployment Protection.

The `beforeFiles` rewrites forward `/docs` and all `/docs/*` resources with the
prefix intact, including Next.js assets, images, search, metadata, and legacy
redirects. Links into the docs zone use plain anchors to load the docs application.
Root `robots.txt` allows `/docs` and advertises both sitemap URLs.

For combined local development, run the docs project on port 3001:

```bash
# In ../utopia-docs
pnpm dev --port 3001

# In this repository
DOCS_ORIGIN=http://localhost:3001 pnpm dev
```

Run the end-to-end suite from the docs repository with an origin (no `/docs`):

```bash
BASE_URL=https://utopia-docs-sigma.vercel.app pnpm test:e2e
BASE_URL=https://utopiabnb.com pnpm test:e2e
```

Verify `/docs/udegen/features/editor` redirects to `/docs/udegen/uai`.

See the Next.js [basePath](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath)
and [Multi-Zones](https://nextjs.org/docs/app/guides/multi-zones) guides.

# Priyanshu Kumar Singh Portfolio

Modern portfolio built with Next.js 16, React 19, Tailwind 4, and Motion.

## Features

- Animated single-page portfolio sections (Home, About, Skills, Projects, Experience, Certificates, Contact)
- Advanced `Projects` showcase with scroll-driven transitions and interactive motion
- Contact API route with Nodemailer
- SEO setup with metadata, Open Graph, Twitter cards, JSON-LD schema, robots, and sitemap generation

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Motion (`motion/react`)
- Biome (lint + format)
- next-sitemap

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Scripts

```bash
pnpm dev        # start dev server
pnpm build      # production build
pnpm start      # run production server
pnpm lint       # biome check
pnpm format     # biome format --write
```

`postbuild` automatically runs `next-sitemap` after `pnpm build`.

## SEO Configuration

SEO is configured in:

- `src/app/layout.tsx` (metadata, robots, canonical, OG/Twitter)
- `src/app/HeadSchema.tsx` (JSON-LD schema)
- `next-sitemap.config.js` (sitemap + robots generation)

Set these environment variables for production:

```bash
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_google_verification_token
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Deployment Notes

1. Deploy to Vercel (or any Node-compatible host).
2. Add environment variables in deployment settings.
3. Verify generated files after build:
   - `public/sitemap.xml`
   - `public/sitemap-0.xml`
   - `public/robots.txt`
4. Submit `https://priyanshu-kumar-singh-portfolio.vercel.app/sitemap.xml` in Google Search Console.

## License

Personal portfolio project.

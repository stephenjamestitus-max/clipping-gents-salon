# Clipping Gents Salon

> **Sharp Cuts. Clean Fades. Sharjah's Finest.**

Production-grade website for Clipping Gents Salon, Al Nad, Sharjah — built with Next.js 15, Tailwind CSS v4, Framer Motion, and TypeScript.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/stephenjamestitus-max/clipping-gents-salon)

---

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Playfair Display + DM Sans (Google Fonts) |
| Language | TypeScript |
| Deployment | Vercel |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero, marquee, stats, services preview, team teaser, testimonials carousel, CTA |
| `/services` | Full service menu with prices and booking links |
| `/team` | Stylist profiles — Abdul Jabbar, Muhamad, Mazhar Iqbal |
| `/reviews` | All 6 named Google reviews as editorial quote cards |
| `/contact` | Map embed, phone/WhatsApp links, address, hours table |
| `/robots.txt` | Dynamic robots file |
| `/sitemap.xml` | Dynamic sitemap |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | No | Production URL (defaults to vercel.app domain) |
| `NEXT_PUBLIC_GOOGLE_MAPS_KEY` | No | Google Maps API key for enhanced map embed |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics 4 measurement ID |

---

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect the GitHub repo at [vercel.com/new](https://vercel.com/new) — zero config needed. `vercel.json` handles the rest.

---

## Business Info

- **Name:** Clipping Gents Salon
- **Location:** Al Shamsi Building, opposite Amber Supermarket, Al Nad, Sharjah
- **Phone:** +971 50 754 5032
- **WhatsApp:** https://wa.me/971507545032
- **Hours:** Daily 8:00 AM – 10:00 PM
- **Rating:** 4.9★ (36 Google Reviews)

---

## Design Tokens

```css
--gold: #C9A84C
--gold-light: #E8C96A
--charcoal: #0F0F0F
--surface: #1A1A1A
--surface-2: #242424
--cream: #F5ECD7
--muted: #888888
```

---

## License

Private. All rights reserved — Clipping Gents Salon.

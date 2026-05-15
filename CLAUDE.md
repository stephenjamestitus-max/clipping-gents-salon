# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build (also runs TypeScript check)
npm run lint     # ESLint across the project
npm start        # serve the production build
```

There is no test suite — `npm run build` is the primary correctness check and must pass before committing.

## Architecture

**Next.js 16 App Router** with Tailwind CSS v4, Framer Motion, TypeScript strict mode.

`@/*` maps to `src/*`.

### Page split pattern

Every route uses a **two-file pattern** to satisfy Next.js RSC constraints:

- `src/app/<route>/page.tsx` — server component; only exports `metadata` and renders the client component.
- `src/app/<route>/<Route>Client.tsx` — `"use client"` component with all Framer Motion / interactive logic.

The homepage (`src/app/page.tsx`) is the exception — it is a single `"use client"` file because it has no per-page metadata beyond the root layout.

### Shared components (`src/components/`)

| Component | Role |
|-----------|------|
| `Navbar` | Sticky, blur-backdrop nav with scroll-aware opacity; mobile hamburger via AnimatePresence |
| `Footer` | Static server component |
| `WhatsAppButton` | Fixed bottom-right floating CTA; Framer Motion spring entry + ping ring |
| `SectionReveal` | Wraps any block in a `whileInView` fadeInUp; accepts `delay` prop |
| `GoldDivider` | Three-dot gold rule used between section heading and body |
| `StatsCounter` | Count-up animation tied to `useInView`; renders the 4-stat bar |
| `Marquee` | CSS `animation: marquee` infinite scroll strip; pauses on hover |
| `TestimonialsCarousel` | Auto-advancing (5 s interval) with manual prev/next; AnimatePresence slide |

### Design system

Defined entirely in `src/app/globals.css` via CSS custom properties:

```
--gold: #C9A84C   --gold-light: #E8C96A
--charcoal: #0F0F0F   --surface: #1A1A1A   --surface-2: #242424
--cream: #F5ECD7   --muted: #888888
```

Tailwind v4 exposes them as `bg-gold`, `text-charcoal`, etc. via `@theme inline`.  
Two utility classes — `.gold-glow` and `.gold-glow-hover` — are defined in globals and used directly on elements; do not replicate these with Tailwind `shadow-*` variants.

Fonts are loaded via `next/font/google` in `layout.tsx` and exposed as CSS variables `--font-playfair` and `--font-dm-sans`. Apply headings with `style={{ fontFamily: "var(--font-playfair)" }}` rather than a Tailwind font class, because Tailwind v4 font variables aren't wired to these.

### SEO & routing

- All metadata is in `layout.tsx` (site-wide) and per `page.tsx` files (page-specific). `next-seo` is installed but the native Next.js `Metadata` API is used instead — keep it that way for consistency.
- `/robots.txt` and `/sitemap.xml` are served by Route Handler files at `src/app/robots.txt/route.ts` and `src/app/sitemap.xml/route.ts` respectively.

### Key constraints

- `lucide-react` v1.x does **not** export `Instagram` or `Facebook` — use inline SVGs for social icons (see `Footer.tsx`).
- All Framer Motion usage must be inside `"use client"` components. `SectionReveal` is the standard wrapper for scroll-triggered animations — prefer it over adding `whileInView` ad-hoc.
- The `marquee-track` CSS animation is defined in `globals.css`; do not attempt to recreate it with Tailwind `animate-*`.

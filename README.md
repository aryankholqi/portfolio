# Aryan Kholghi — portfolio

Personal site for Aryan Kholghi, frontend developer. One page: hero, selected work, about, stack, experience, education, what I'm working on now, and a contact form. Available in English (`/`) and Persian (`/fa`, right-to-left).

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lenis (smooth scroll) · shadcn/ui (Radix) · next/font · next/image

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/
  [locale]/layout.tsx   # <html lang/dir>, fonts, per-locale metadata, Lenis wrapper
  [locale]/page.tsx     # section order
  global-not-found.tsx  # 404 for unmatched URLs
  api/contact/route.ts  # contact form endpoint (Resend)
components/             # one file per section + Nav, Footer, Reveal, SmoothScroll
  ui/select.tsx         # shadcn Select, restyled with the site tokens
lib/
  utils.ts              # cn() class merger for shadcn components
  i18n.ts               # locales, direction, URL per locale
  content/en.ts         # English copy and data
  content/fa.ts         # Persian copy and data
  contact-email.ts      # HTML/text template for incoming briefs
public/
  fonts/peyda/          # Persian typeface
  Portrait.webp
  work/                 # project screenshots
```

## Content

All copy lives in `lib/content/en.ts` and `lib/content/fa.ts`, one file per language — edit there, not in the components. Both files export the same fields; `lib/content/index.ts` types the Persian file against the English one, so a missing field fails the build. Each file exports:

- `projects` — name, year, summary, tags, screenshot, `featured` flag, and optional `url` (makes the whole card a link) and `repo` (secondary source-code link)
- `stack` — grouped skills
- `experience` — roles with bullet points
- `education` — degrees, details, and final project
- `now` — current work
- `links` — email, GitHub, LinkedIn, résumé
- `ui` — interface text: nav, headings, buttons, form messages, page metadata

## Images

Screenshots go in `public/work/` as `.webp` (`Abidarya.webp`, `Liquid-glass-cli.webp`, `Banktest.webp`, `Tahla.webp`, `Rabeck.webp`, `Lynx.webp`); the portrait is `public/Portrait.webp`. Paths are set per project in `lib/content/`. `next/image` serves them as AVIF/WebP.

## Contact form

`POST /api/contact` validates the submission and sends it through [Resend](https://resend.com). It has:

- a hidden honeypot field (`company`) that silently drops bot submissions
- a per-IP limit of 3 messages per 10 minutes (in-memory, per instance)
- length limits on name, email, and message

Environment variables (`.env.local` locally, or Vercel → Project → Settings → Environment Variables):

| Variable         | Purpose                        |
| ---------------- | ------------------------------ |
| `RESEND_API_KEY` | Resend API key                 |
| `CONTACT_TO`     | Address that receives messages |

If either is missing, development logs the submission to the console instead of sending it. Production returns a 500 error.

## Deploy

Import `aryankholqi/portfolio` at [vercel.com/new](https://vercel.com/new). Vercel detects the framework, so no build config is needed. Add the two environment variables above to enable the contact form.

## Languages and RTL

- English is served at `/`, Persian at `/fa`. `/en` redirects to `/` (see `next.config.mjs`). The nav has a language switch (shadcn `Select`).
- `app/[locale]/layout.tsx` sets `lang` and `dir` on `<html>` from the URL.
- Components use logical utilities (`ps-*`, `ms-auto`, `text-end`, `rtl:` variants), so the layout mirrors on its own. Direction-sensitive icons (↗) are flipped with `rtl:-scale-x-100`.
- Persian uses Peyda (FaNum build, so digits render as Persian numerals) via `next/font/local`. It isn't preloaded, so the English page never downloads it.
- In RTL, `app/globals.css` removes letter-spacing (it breaks the joined Persian letters) and loosens heading line-height.

`components.json` is configured by hand, without `shadcn init`, so the CLI doesn't overwrite `globals.css`. shadcn's `accent` token would clash with the site's purple `--color-accent`. Components added with `npx shadcn@latest add <name>` need restyling with the site tokens, the way `ui/select.tsx` was.

To add a language: add it to `locales` in `lib/i18n.ts`, create `lib/content/<locale>.ts`, and register it in `lib/content/index.ts`.

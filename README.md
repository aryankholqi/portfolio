# Aryan Kholghi — portfolio

Personal site for Aryan Kholghi, frontend developer. One page: hero, selected work, about, stack, experience, education, what I'm working on now, and a contact form.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lenis (smooth scroll) · next/font · next/image

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
  layout.tsx            # fonts, metadata, Lenis smooth-scroll wrapper
  page.tsx              # section order
  api/contact/route.ts  # contact form endpoint (Resend)
components/             # one file per section + Nav, Footer, Reveal, SmoothScroll
lib/
  content.ts            # all copy and data
  contact-email.ts      # HTML/text template for incoming briefs
public/
  Portrait.webp
  work/                 # project screenshots
```

## Content

All copy lives in `lib/content.ts` — edit there, not in the components:

- `projects` — name, year, summary, tags, screenshot, `featured` flag, and optional `url` (makes the whole card a link) and `repo` (secondary source-code link)
- `stack` — grouped skills
- `experience` — roles with bullet points
- `education` — degrees, details, and final project
- `now` — current work
- `links` — email, GitHub, LinkedIn, résumé

## Images

Screenshots go in `public/work/` as `.webp` (`Abidarya.webp`, `Liquid-glass-cli.webp`, `Banktest.webp`, `Tahla.webp`, `Rabeck.webp`, `Lynx.webp`); the portrait is `public/Portrait.webp`. Paths are set per project in `lib/content.ts`. `next/image` serves them as AVIF/WebP.

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

## RTL / Persian

The layout doesn't depend on text direction: it uses logical spacing and no hard-coded left/right. For a Persian version, set `lang="fa" dir="rtl"` on `<html>` in `app/layout.tsx` and replace Inter with a Persian typeface (e.g. Vazirmatn via `next/font/local`).

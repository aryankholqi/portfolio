# Aryan Kholghi — portfolio

Next.js 15 (App Router) · TypeScript · Tailwind v4 · Framer Motion · next/font · next/image.

## Run

\`\`\`bash
npm install
npm run dev
\`\`\`

## Push to GitHub

\`\`\`bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/aryankholqi/portfolio.git
git push -u origin main
\`\`\`

## Deploy on Vercel

Import \`aryankholqi/portfolio\` at vercel.com/new — framework is auto-detected, no build config needed.

Optional env vars for the contact form (Project → Settings → Environment Variables):

- \`RESEND_API_KEY\` — provider key
- \`CONTACT_TO\` — where briefs are delivered

Without them the API route validates and logs the submission instead of sending.

## Images

Drop real screenshots into \`public/work/\` as \`abidarya.jpg\`, \`lynx.jpg\`, \`bank-test.jpg\`, \`tahla.jpg\`, \`rabeck.jpg\`, and a portrait at \`public/portrait.jpg\`. File names are set in \`lib/content.ts\`.

## Content

All copy, projects, stack, experience and links live in \`lib/content.ts\` — edit there, not in the components.

## RTL / Persian

The layout is direction-agnostic (logical spacing, no hard-coded left/right). For a Persian version set \`lang="fa" dir="rtl"\` on \`<html>\` in \`app/layout.tsx\` and swap Inter for a Persian face (e.g. Vazirmatn via \`next/font/local\`).

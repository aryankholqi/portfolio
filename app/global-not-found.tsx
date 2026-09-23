import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = { title: 'Page not found — Aryan Kholghi' };

export default function GlobalNotFound() {
  return (
    <html lang="en" dir="ltr" className={inter.variable}>
      <body className="grid min-h-dvh place-content-center gap-4 px-5 text-center">
        <p className="m-0 text-[13px] uppercase tracking-[0.14em] text-[var(--color-accent-300)]">404</p>
        <h1 className="m-0 text-[28px] tracking-[-0.025em]">This page doesn’t exist.</h1>
        <a href="/" className="text-sm text-[var(--color-accent-200)] underline underline-offset-4">
          Back to the homepage
        </a>
      </body>
    </html>
  );
}

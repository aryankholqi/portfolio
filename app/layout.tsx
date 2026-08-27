import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Aryan Kholghi — Frontend developer',
  description:
    'Independent frontend work: product UI, design-system implementation, and performance on React and Next.js codebases.',
  openGraph: {
    title: 'Aryan Kholghi — Frontend developer',
    description: 'Frontend developer building fast, accessible interfaces in Next.js.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}

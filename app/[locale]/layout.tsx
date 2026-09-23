import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import SmoothScroll from '@/components/SmoothScroll';
import { getContent } from '@/lib/content';
import { defaultLocale, dirOf, isLocale, locales, pathOf } from '@/lib/i18n';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

// FaNum build: Latin digits render as Persian digits, so "2024" reads "۲۰۲۴".
// Not preloaded — the English page never uses it, and preloading here would
// ship it to both locales.
const peyda = localFont({
  src: [
    { path: '../../public/fonts/peyda/PeydaFaNum-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/peyda/PeydaFaNum-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../../public/fonts/peyda/PeydaFaNum-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../../public/fonts/peyda/PeydaFaNum-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-peyda',
  display: 'swap',
  preload: false,
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<'/[locale]'>): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const { meta } = getContent(locale).ui;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: pathOf(locale),
      languages: Object.fromEntries(locales.map((l) => [l, pathOf(l)])),
    },
    openGraph: {
      title: meta.title,
      description: meta.ogDescription,
      type: 'website',
      locale: locale === 'fa' ? 'fa_IR' : 'en_US',
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<'/[locale]'>) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;

  return (
    <html lang={locale} dir={dirOf(locale)} className={`${inter.variable} ${peyda.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

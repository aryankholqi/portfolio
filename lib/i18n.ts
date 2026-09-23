export const locales = ['en', 'fa'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

export const dirOf = (locale: Locale) => (locale === 'fa' ? 'rtl' : 'ltr');

/** English lives at `/` (rewritten to `/en` in next.config.mjs); other locales at `/<locale>`. */
export const pathOf = (locale: Locale) => (locale === defaultLocale ? '/' : `/${locale}`);

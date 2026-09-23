import type { Locale } from '@/lib/i18n';
import * as en from './en';
import * as fa from './fa';

export type { Project } from './en';
export type Content = typeof en;
export type UI = Content['ui'];

// Typed against the English module, so a Persian file with a missing or
// misshapen field fails the build instead of rendering `undefined`.
const content: Record<Locale, Content> = { en, fa };

export const getContent = (locale: Locale) => content[locale];

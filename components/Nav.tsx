'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { UI } from '@/lib/content';
import { dirOf, locales, pathOf, type Locale } from '@/lib/i18n';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const items = [
  { href: '#work', key: 'work' },
  { href: '#about', key: 'about' },
  { href: '#now', key: 'now' },
  { href: '#contact', key: 'contact' },
] as const;

/**
 * Glass navbar: a translucent floating bar that samples the page behind it
 * (backdrop blur + saturation), with a bright top edge, a soft inner shade at
 * the bottom and two specular highlights. It condenses slightly once scrolled.
 * The active/hovered item is a shared pill that slides between links.
 */
export default function Nav({ ui, locale }: { ui: UI; locale: Locale }) {
  const [active, setActive] = useState<string>('#work');
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();
  const dir = dirOf(locale);

  useEffect(() => {
    const sections = items
      .map((i) => document.querySelector(i.href))
      .filter((el): el is Element => Boolean(el));

    // Derive the active link from scroll position on every scroll, so it also
    // resets when scrolling back up past the first section (e.g. to the hero).
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const line = window.innerHeight * 0.4;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current: string = items[0].href;
      if (atBottom && sections.length) {
        current = `#${sections[sections.length - 1].id}`;
      } else {
        for (const s of sections) {
          if (s.getBoundingClientRect().top <= line) current = `#${s.id}`;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 px-4 pt-3 md:px-24 md:pt-5">
      <header
        className={`relative flex items-center gap-3 overflow-hidden rounded-full ps-4 pe-2.5 whitespace-nowrap transition-[padding,background-color] duration-300 md:gap-4 md:ps-5 md:pe-3 lg:gap-8 lg:ps-6 lg:pe-3.5 ${
          scrolled ? 'py-2' : 'py-2.5 md:py-3'
        }`}
        style={{
          background:
            'linear-gradient(150deg, rgba(233,233,237,0.09), rgba(233,233,237,0.03) 42%, rgba(145,132,217,0.07))',
          backdropFilter: 'blur(22px) saturate(180%)',
          WebkitBackdropFilter: 'blur(22px) saturate(180%)',
          boxShadow: [
            'inset 0 1px 0 rgba(233,233,237,0.22)',
            'inset 0 -1px 0 rgba(22,24,38,0.5)',
            'inset 1px 0 0 rgba(233,233,237,0.08)',
            'inset -1px 0 0 rgba(233,233,237,0.08)',
            scrolled ? '0 14px 34px rgba(10,11,20,0.6)' : '0 10px 26px rgba(10,11,20,0.45)',
          ].join(', '),
        }}
      >
        {/* specular highlights */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 180% at 12% -40%, rgba(233,233,237,0.16), transparent 55%), radial-gradient(90% 160% at 88% 140%, rgba(145,132,217,0.14), transparent 60%)',
          }}
        />
        {/* bright top rim, fading at both ends */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-[14%] top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(233,233,237,0.5), transparent)' }}
        />

        <span className="relative shrink-0 text-[15px] tracking-[-0.02em]">{ui.name}</span>

        <nav className="relative ms-auto hidden items-center gap-0.5 md:flex lg:gap-1">
          {items.map((i) => {
            const on = active === i.href;
            return (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setActive(i.href)}
                className={`relative rounded-full px-3 py-1.5 text-sm transition-colors lg:px-4 ${
                  on ? 'text-[var(--color-text)]' : 'text-[rgba(233,233,237,0.72)] hover:text-[var(--color-text)]'
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute inset-0 -z-10 rounded-full"
                    style={{
                      background: 'linear-gradient(160deg, rgba(233,233,237,0.14), rgba(145,132,217,0.10))',
                      boxShadow: 'inset 0 1px 0 rgba(233,233,237,0.3), inset 0 -1px 0 rgba(22,24,38,0.35)',
                    }}
                  />
                )}
                {ui.nav[i.key]}
              </a>
            );
          })}
        </nav>

        {/* Each locale has its own root layout, so switching is a full page load. */}
        <Select value={locale} onValueChange={(v) => window.location.assign(pathOf(v as Locale))} dir={dir}>
          <SelectTrigger size="sm" aria-label={ui.nav.language} className="relative ms-auto shrink-0 md:ms-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="end">
            {locales.map((l) => (
              <SelectItem key={l} value={l} lang={l}>
                {ui.nav.languages[l]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <span
          className="relative flex shrink-0 items-center gap-2 rounded-full py-1.5 ps-3 pe-4 text-xs text-[rgba(233,233,237,0.72)] md:hidden xl:flex"
          style={{
            background: 'rgba(22,24,38,0.28)',
            boxShadow: 'inset 0 1px 0 rgba(233,233,237,0.14)',
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]" />
          <span className="hidden sm:inline">{ui.nav.available}</span>
          <span className="sm:hidden">{ui.nav.availableShort}</span>
        </span>
      </header>
    </div>
  );
}

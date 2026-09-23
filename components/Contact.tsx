'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal';
import type { Content, UI } from '@/lib/content';

export default function Contact({ ui, links }: { ui: UI; links: Content['links'] }) {
  const t = ui.contact;
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error' | 'limited'>('idle');
  const [sender, setSender] = useState({ name: '', email: '' });
  const reduced = useReducedMotion();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setState(res.ok ? 'sent' : res.status === 429 ? 'limited' : 'error');
      if (res.ok) {
        setSender({ name: data.name.trim().split(/\s+/)[0], email: data.email.trim() });
        form.reset();
      }
    } catch {
      setState('error');
    }
  }

  // Fields take their direction from what's typed (dir="auto"/"ltr"), which is LTR while empty;
  // in RTL, right-align the empty state so the Persian placeholder sits on the reading side.
  const field =
    'w-full rounded-[var(--radius-md)] border border-[var(--color-divider)] bg-[rgba(0,0,0,0.15)] px-3.5 py-3 text-sm text-[var(--color-text)] outline-none placeholder:text-[rgba(233,233,237,0.35)] focus:border-[var(--color-accent)] rtl:placeholder-shown:text-right';

  return (
    <section
      id="contact"
      className="mt-24 grid items-end gap-10 px-5 py-14 md:grid-cols-[7fr_4fr] md:gap-20 md:px-24 md:py-20"
      style={{
        background:
          'linear-gradient(160deg, var(--color-section) 0%, #1b1e3f 60%, var(--color-bg) 100%)',
      }}
    >
      <Reveal>
        <p className="m-0 mb-4 text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-300)] md:text-xs">
          07 — {t.heading}
        </p>
        <h2 className="m-0 mb-4 max-w-[22ch] text-[28px] leading-[1.1] tracking-[-0.025em] md:text-[46px]">
          {t.title}
        </h2>
        <p className="m-0 mb-7 max-w-[46ch] text-[15px] text-[rgba(233,233,237,0.72)] md:text-base">
          {t.lead}
        </p>

        <AnimatePresence mode="wait" initial={false}>
        {state === 'sent' ? (
          <motion.div
            key="sent"
            role="status"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[46ch] rounded-[var(--radius-lg)] border border-[color-mix(in_oklch,var(--color-accent)_40%,transparent)] bg-[color-mix(in_oklch,var(--color-accent)_8%,transparent)] p-6"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[color-mix(in_oklch,var(--color-accent)_22%,transparent)] text-[var(--color-accent-200)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <p className="m-0 mb-2 text-lg font-medium text-[var(--color-text)]">
              {sender.name ? t.thanksNamed.replace('{name}', sender.name) : t.thanks}
            </p>
            <p className="m-0 mb-5 text-sm leading-relaxed text-[rgba(233,233,237,0.72)]">
              {t.replyBefore}{' '}
              <bdi className="text-[var(--color-accent-200)]">{sender.email || t.yourEmail}</bdi> {t.replyAfter}
            </p>
            <button
              type="button"
              onClick={() => setState('idle')}
              className="text-sm text-[rgba(233,233,237,0.6)] underline underline-offset-4 hover:text-[var(--color-accent-200)]"
            >
              {t.again}
            </button>
          </motion.div>
        ) : (
        <motion.form
          key="form"
          onSubmit={onSubmit}
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="flex max-w-[46ch] flex-col gap-3"
        >
          {/* Honeypot: hidden from people and screen readers; bots that fill it are dropped server-side. */}
          <input
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -start-[9999px] h-px w-px opacity-0"
          />
          <input name="name" required maxLength={100} placeholder={t.name} dir="auto" className={field} />
          <input name="email" type="email" required maxLength={200} placeholder={t.email} dir="ltr" className={field} />
          <textarea name="message" required maxLength={5000} rows={4} placeholder={t.message} dir="auto" className={field} />
          <button
            type="submit"
            disabled={state === 'sending'}
            className="rounded-[var(--radius-md)] border border-[var(--color-accent-300)] px-5 py-3 text-sm text-[var(--color-accent-200)] transition-colors hover:bg-[color-mix(in_oklch,var(--color-accent)_16%,transparent)] disabled:opacity-45"
          >
            {state === 'sending' ? t.sending : t.send}
          </button>
          {state === 'error' && (
            <p className="m-0 text-[13px] text-[rgba(233,233,237,0.6)]">
              {t.error} <bdi>{links.email}</bdi>
            </p>
          )}
          {state === 'limited' && (
            <p className="m-0 text-[13px] text-[rgba(233,233,237,0.6)]">
              {t.limited} <bdi>{links.email}</bdi>
            </p>
          )}
        </motion.form>
        )}
        </AnimatePresence>
      </Reveal>

      <Reveal delay={0.08}>
        <ul className="m-0 flex list-none flex-col gap-3 p-0 text-sm">
          {[
            [t.links.github, links.github],
            [t.links.linkedin, links.linkedin],
            [t.links.resume, links.resume],
            [t.links.email, `mailto:${links.email}`],
          ].map(([label, href]) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-[rgba(233,233,237,0.8)]">
                {label} <span className="inline-block rtl:-scale-x-100">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { links } from '@/lib/content';

export default function Contact() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setState(res.ok ? 'sent' : 'error');
      if (res.ok) e.currentTarget.reset();
    } catch {
      setState('error');
    }
  }

  const field =
    'w-full rounded-[var(--radius-md)] border border-[var(--color-divider)] bg-[rgba(0,0,0,0.15)] px-3.5 py-3 text-sm text-[var(--color-text)] outline-none placeholder:text-[rgba(233,233,237,0.35)] focus:border-[var(--color-accent)]';

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
          06 — Contact
        </p>
        <h2 className="m-0 mb-4 max-w-[22ch] text-[28px] leading-[1.1] tracking-[-0.025em] md:text-[46px]">
          Have a frontend problem that needs shipping?
        </h2>
        <p className="m-0 mb-7 max-w-[46ch] text-[15px] text-[rgba(233,233,237,0.72)] md:text-base">
          Send a short brief — what it is, when it needs to be live. I reply within a day.
        </p>

        <form onSubmit={onSubmit} className="flex max-w-[46ch] flex-col gap-3">
          <input name="name" required placeholder="Your name" className={field} />
          <input name="email" type="email" required placeholder="Email" className={field} />
          <textarea name="message" required rows={4} placeholder="What are you building?" className={field} />
          <button
            type="submit"
            disabled={state === 'sending'}
            className="rounded-[var(--radius-md)] border border-[var(--color-accent-300)] px-5 py-3 text-sm text-[var(--color-accent-200)] transition-colors hover:bg-[color-mix(in_oklch,var(--color-accent)_16%,transparent)] disabled:opacity-45"
          >
            {state === 'sending' ? 'Sending…' : state === 'sent' ? 'Sent — thanks' : 'Send brief'}
          </button>
          {state === 'error' && (
            <p className="m-0 text-[13px] text-[rgba(233,233,237,0.6)]">
              Something went wrong. Email me directly at {links.email}.
            </p>
          )}
        </form>
      </Reveal>

      <Reveal delay={0.08}>
        <ul className="m-0 flex list-none flex-col gap-3 p-0 text-sm">
          {[
            ['GitHub', links.github],
            ['LinkedIn', links.linkedin],
            ['Résumé (PDF)', links.resume],
            ['Email', `mailto:${links.email}`],
          ].map(([label, href]) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-[rgba(233,233,237,0.8)]">
                {label} ↗
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

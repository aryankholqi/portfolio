import Reveal from './Reveal';
import { links } from '@/lib/content';

const facts = [
  ['Based', 'Remote · UTC+3:30'],
  ['Focus', 'Next.js, TypeScript, React'],
  ['Since', '2023 — 4 shipped products'],
  ['Next opening', 'September 2026'],
];

export default function Hero() {
  return (
    <section className="grid items-end gap-12 px-5 pt-14 md:grid-cols-[7fr_4fr] md:gap-20 md:px-24 md:pt-26">
      <Reveal>
        <p className="m-0 mb-5 text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent)] md:text-xs">
          Frontend developer
        </p>
        <h1 className="m-0 mb-5 max-w-[15ch] text-[36px] leading-[1.06] tracking-[-0.03em] md:text-[68px]">
          I build fast, accessible interfaces in Next.js.
        </h1>
        <p className="m-0 mb-8 max-w-[52ch] text-[15px] leading-relaxed text-[rgba(233,233,237,0.7)] md:text-[17px]">
          Independent frontend work: product UI, design-system implementation, and performance on React and
          Next.js codebases. Currently taking on contract projects.
        </p>
        <div className="flex flex-col gap-3 md:flex-row">
          <a
            href="#work"
            className="rounded-[var(--radius-md)] border border-[var(--color-accent)] px-5 py-3 text-center text-sm text-[var(--color-text)] transition-colors hover:bg-[color-mix(in_oklch,var(--color-accent)_14%,transparent)]"
          >
            See selected work
          </a>
          <a
            href={`mailto:${links.email}`}
            className="rounded-[var(--radius-md)] border border-[var(--color-divider)] px-5 py-3 text-center text-sm text-[rgba(233,233,237,0.85)] transition-colors hover:border-[var(--color-accent)]"
          >
            {links.email}
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <dl className="m-0 grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-3 border-t border-[var(--color-divider)] pt-6 text-[13px] md:border-0 md:pt-0">
          {facts.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="text-[rgba(233,233,237,0.45)]">{k}</dt>
              <dd className="m-0">{v}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}

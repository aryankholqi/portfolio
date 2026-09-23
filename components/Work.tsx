import Image from 'next/image';
import Reveal from './Reveal';
import { SectionHeading } from './Section';
import type { Project, UI } from '@/lib/content';

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className="rounded-full border border-[var(--color-divider)] px-2.5 py-1 text-[11px] text-[rgba(233,233,237,0.7)]"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`rtl:-scale-x-100 ${className ?? ''}`}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

const hostOf = (url: string) => new URL(url).host.replace(/^www\./, '');

const EASE = 'ease-[cubic-bezier(0.22,1,0.36,1)]';

function Card({ p, ui, large, delay }: { p: Project; ui: UI; large?: boolean; delay: number }) {
  const linked = Boolean(p.url);

  return (
    <Reveal as="article" delay={delay} className="group relative flex flex-col gap-4">
      <div
        className={`relative h-[200px] overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-surface)] ring-1 ring-[var(--color-divider)] transition-[box-shadow,transform] duration-500 md:h-[340px] ${EASE} ${
          linked
            ? 'group-hover:ring-[color-mix(in_oklch,var(--color-accent)_45%,transparent)] group-hover:shadow-[0_18px_50px_-20px_color-mix(in_oklch,var(--color-accent)_45%,transparent)] motion-safe:group-hover:-translate-y-1'
            : ''
        }`}
      >
        <Image
          src={p.image}
          alt={`${p.name} — ${ui.work.screenshot}`}
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          className={`object-cover object-top transition-transform duration-700 ${EASE} ${linked ? 'motion-safe:group-hover:scale-[1.03]' : ''}`}
          loading="eager"
        />
        {linked && (
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 flex items-end bg-linear-to-t from-[rgba(22,24,38,0.85)] via-[rgba(22,24,38,0.15)] to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:p-5 ${EASE}`}
          >
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border border-[rgba(233,233,237,0.18)] bg-[rgba(22,24,38,0.55)] px-3.5 py-1.5 text-[13px] text-[var(--color-text)] backdrop-blur-md transition-transform duration-500 motion-safe:translate-y-2 motion-safe:group-hover:translate-y-0 ${EASE}`}
            >
              {ui.work.visit} <bdi>{hostOf(p.url!)}</bdi>
              <ArrowUpRight className="size-3.5" />
            </span>
          </div>
        )}
      </div>
      <div className="flex items-baseline gap-4">
        <h3 className={`m-0 ${large ? 'text-[21px] md:text-[26px]' : 'text-[19px]'}`}>
          {linked ? (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline gap-1.5 outline-none transition-colors duration-300 group-hover:text-[var(--color-accent-200)] after:absolute after:inset-0 after:rounded-[var(--radius-lg)] focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-[var(--color-accent)]"
            >
              {p.name}
              <ArrowUpRight
                className={`size-[0.7em] self-center text-[rgba(233,233,237,0.45)] transition-[transform,color] duration-300 group-hover:text-[var(--color-accent-200)] motion-safe:group-hover:translate-x-0.5 rtl:motion-safe:group-hover:-translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 ${EASE}`}
              />
              <span className="sr-only">{ui.work.newTab}</span>
            </a>
          ) : (
            p.name
          )}
        </h3>
        <div className="ms-auto flex items-baseline gap-3 text-xs text-[rgba(233,233,237,0.4)]">
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 -my-1 inline-flex items-center gap-1 rounded-full px-2 py-1 text-[rgba(233,233,237,0.6)] transition-colors duration-300 hover:bg-[rgba(233,233,237,0.06)] hover:text-[var(--color-accent-200)]"
            >
              {ui.work.source}
              <ArrowUpRight className="size-3" />
              <span className="sr-only">{ui.work.codeFor} {p.name} {ui.work.newTab}</span>
            </a>
          )}
          <span>{p.year}</span>
        </div>
      </div>
      <p className="m-0 max-w-[46ch] text-sm leading-relaxed text-[rgba(233,233,237,0.66)]">{p.summary}</p>
      <Tags tags={p.tags} />
    </Reveal>
  );
}

export default function Work({ ui, projects }: { ui: UI; projects: Project[] }) {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="px-5 pt-20 md:px-24 md:pt-24">
      <Reveal>
        <div className="mb-9 flex items-baseline justify-between">
          <SectionHeading index="01">{ui.work.heading}</SectionHeading>
          <span className="text-[13px] text-[rgba(233,233,237,0.4)]">
            {ui.work.count.replace('{n}', String(projects.length))}
          </span>
        </div>
      </Reveal>

      <div className="grid gap-9 lg:grid-cols-2 lg:gap-7">
        {featured.map((p, i) => (
          <Card key={p.slug} p={p} ui={ui} large delay={i * 0.07} />
        ))}
      </div>

      <div className="mt-9  md:mt-13 grid gap-9 lg:grid-cols-2 lg:gap-7">
        {rest.map((p, i) => (
          <Card key={p.slug} p={p} ui={ui} delay={i * 0.07} />
        ))}
      </div>
    </section>
  );
}

import Image from 'next/image';
import Reveal from './Reveal';
import { SectionHeading } from './Section';
import { projects, type Project } from '@/lib/content';

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

function Card({ p, large, delay }: { p: Project; large?: boolean; delay: number }) {
  return (
    <Reveal as="article" delay={delay} className="flex flex-col gap-4">
      <div className="relative h-[200px] overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-surface)] md:h-[340px]">
        <Image src={p.image} alt={`${p.name} — screenshot`} fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover object-top" loading='eager'/>
      </div>
      <div className="flex items-baseline gap-4">
        <h3 className={`m-0 ${large ? 'text-[21px] md:text-[26px]' : 'text-[19px]'}`}>{p.name}</h3>
        <span className="ml-auto text-xs text-[rgba(233,233,237,0.4)]">{p.year}</span>
      </div>
      <p className="m-0 max-w-[46ch] text-sm leading-relaxed text-[rgba(233,233,237,0.66)]">{p.summary}</p>
      <Tags tags={p.tags} />
    </Reveal>
  );
}

export default function Work() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="px-5 pt-20 md:px-24 md:pt-24">
      <Reveal>
        <div className="mb-9 flex items-baseline justify-between">
          <SectionHeading index="01">Selected work</SectionHeading>
          <span className="text-[13px] text-[rgba(233,233,237,0.4)]">
            {projects.length} projects · 2023—2026
          </span>
        </div>
      </Reveal>

      <div className="grid gap-9 lg:grid-cols-2 lg:gap-7">
        {featured.map((p, i) => (
          <Card key={p.slug} p={p} large delay={i * 0.07} />
        ))}
      </div>

      <div className="mt-9 grid gap-9 md:mt-13 md:grid-cols-2 md:gap-7">
        {rest.map((p, i) => (
          <Card key={p.slug} p={p} delay={i * 0.07} />
        ))}
      </div>
    </section>
  );
}

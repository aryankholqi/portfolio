import Image from 'next/image';
import Reveal from './Reveal';
import { SectionHeading } from './Section';
import type { UI } from '@/lib/content';

export default function About({ ui }: { ui: UI }) {
  return (
    <section id="about" className="grid items-start gap-10 px-5 pt-20 md:grid-cols-[6fr_5fr] md:gap-20 md:px-24 md:pt-24">
      <Reveal>
        <div className="mb-8">
          <SectionHeading index="02">{ui.about.heading}</SectionHeading>
        </div>
        <p className="m-0 mb-5 max-w-[40ch] text-[19px] leading-[1.5] md:text-[22px]">
          {ui.about.lead}
        </p>
        {ui.about.body.map((p, i) => (
          <p
            key={i}
            className="m-0 mb-3 max-w-[52ch] text-[15px] leading-[1.7] text-[rgba(233,233,237,0.66)] last:mb-0"
          >
            {p}
          </p>
        ))}
      </Reveal>
      <Reveal delay={0.08}>
        <div className="relative h-[260px] overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-surface)] md:h-[420px]">
          <Image src="/Portrait.webp" alt={ui.name} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
        </div>
      </Reveal>
    </section>
  );
}

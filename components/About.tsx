import Image from 'next/image';
import Reveal from './Reveal';
import { SectionHeading } from './Section';

export default function About() {
  return (
    <section id="about" className="grid items-start gap-10 px-5 pt-20 md:grid-cols-[6fr_5fr] md:gap-20 md:px-24 md:pt-24">
      <Reveal>
        <div className="mb-8">
          <SectionHeading index="02">About</SectionHeading>
        </div>
        <p className="m-0 mb-5 max-w-[40ch] text-[19px] leading-[1.5] md:text-[22px]">
          I work with small product teams that need frontend depth without a full-time hire.
        </p>
        <p className="m-0 mb-3 max-w-[52ch] text-[15px] leading-[1.7] text-[rgba(233,233,237,0.66)]">
          Most of my work starts where a design hands off and ends where the code ships: turning Figma into
          components that hold up, replacing accumulated CSS with a token system, and fixing the pages that got
          slow.
        </p>
        <p className="m-0 max-w-[52ch] text-[15px] leading-[1.7] text-[rgba(233,233,237,0.66)]">
          I write TypeScript by default, test the parts that break, and care more about the interface being quick
          and legible than about which framework it was built with. Available for two- to twelve-week engagements.
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="relative h-[260px] overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-surface)] md:h-[420px]">
          <Image src="/Portrait.webp" alt="Aryan Kholghi" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
        </div>
      </Reveal>
    </section>
  );
}

import Reveal from './Reveal';
import { SectionHeading } from './Section';
import { now } from '@/lib/content';

export default function Now() {
  return (
    <section id="now" className="grid gap-6 px-5 pt-20 md:grid-cols-[4fr_7fr] md:gap-20 md:px-24 md:pt-22">
      <Reveal>
        <SectionHeading index="05">Now</SectionHeading>
      </Reveal>
      <ul className="m-0 flex list-none flex-col gap-4 p-0">
        {now.map((item, i) => (
          <Reveal as="li" key={item} delay={i * 0.07} className="grid grid-cols-[16px_1fr] gap-3.5 text-[15px] leading-[1.6] text-[rgba(233,233,237,0.8)] md:text-base">
            <span className="pt-1 text-[13px] text-[var(--color-accent)]">—</span>
            <span>{item}</span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

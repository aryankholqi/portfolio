import Reveal from './Reveal';
import { SectionHeading } from './Section';
import { stack } from '@/lib/content';

export default function Stack() {
  return (
    <section className="px-5 pt-20 md:px-24 md:pt-22">
      <Reveal>
        <div className="mb-8">
          <SectionHeading index="03">Stack</SectionHeading>
        </div>
      </Reveal>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
        {stack.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <h5 className="m-0 mb-3 text-[13px] text-[var(--color-accent)]">{group.title}</h5>
            <ul className="m-0 flex list-none flex-col gap-2 p-0 text-sm text-[rgba(233,233,237,0.72)]">
              {group.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

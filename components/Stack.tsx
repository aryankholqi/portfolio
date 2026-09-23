import Reveal from './Reveal';
import { SectionHeading } from './Section';
import type { Content, UI } from '@/lib/content';

export default function Stack({ ui, stack }: { ui: UI; stack: Content['stack'] }) {
  return (
    <section className="px-5 pt-20 md:px-24 md:pt-22">
      <Reveal>
        <div className="mb-8">
          <SectionHeading index="03">{ui.stackHeading}</SectionHeading>
        </div>
      </Reveal>
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-12">
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

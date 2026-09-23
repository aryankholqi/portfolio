import Reveal from './Reveal';
import { SectionHeading } from './Section';
import type { Content, UI } from '@/lib/content';

export default function Education({ ui, education }: { ui: UI; education: Content['education'] }) {
  return (
    <section id="education" className="px-5 pt-20 md:px-24 md:pt-22">
      <Reveal>
        <div className="mb-6">
          <SectionHeading index="05">{ui.educationHeading}</SectionHeading>
        </div>
      </Reveal>
      <div className="flex flex-col">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 0.07}>
            <div className="grid gap-3 border-t border-[var(--color-divider)] py-6 md:grid-cols-[130px_1fr_auto] md:gap-8">
              <span className="text-[13px] text-[rgba(233,233,237,0.45)]">{item.period}</span>
              <div>
                <div className="text-[17px] md:text-[18px]">{item.degree}</div>
                {item.details.length > 0 && (
                  <ul className="m-0 mt-3 flex list-disc flex-col gap-2 ps-4 text-[13.5px] leading-[1.65] text-[rgba(233,233,237,0.6)]">
                    {item.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                )}
                {item.project && (
                  <div className="mt-5">
                    <div className="mb-2 text-[14.5px] text-[rgba(233,233,237,0.85)]">{item.project.title}</div>
                    <ul className="m-0 flex list-disc flex-col gap-2 ps-4 text-[13.5px] leading-[1.65] text-[rgba(233,233,237,0.6)]">
                      {item.project.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <span className="text-[13px] text-[rgba(233,233,237,0.45)] md:text-end">{item.grade}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

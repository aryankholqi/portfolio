import Reveal from './Reveal';
import { SectionHeading } from './Section';
import { experience } from '@/lib/content';

export default function Experience() {
  return (
    <section className="px-5 pt-20 md:px-24 md:pt-22">
      <Reveal>
        <div className="mb-6">
          <SectionHeading index="04">Experience</SectionHeading>
        </div>
      </Reveal>
      <div className="flex flex-col">
        {experience.map((job, i) => (
          <Reveal key={job.role} delay={i * 0.07}>
            <div className="grid gap-3 border-t border-[var(--color-divider)] py-6 md:grid-cols-[130px_1fr_auto] md:gap-8">
              <span className="text-[13px] text-[rgba(233,233,237,0.45)]">{job.period}</span>
              <div>
                <div className="mb-3 text-[17px] md:text-[18px]">{job.role}</div>
                <ul className="m-0 flex list-disc flex-col gap-2 pl-4 text-[13.5px] leading-[1.65] text-[rgba(233,233,237,0.6)]">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <span className="text-[13px] text-[rgba(233,233,237,0.45)] md:text-right">{job.mode}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

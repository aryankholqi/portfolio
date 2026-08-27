import type { ReactNode } from 'react';

export function SectionHeading({ index, children }: { index: string; children: ReactNode }) {
  return (
    <h2 className="m-0 text-[13px] uppercase tracking-[0.14em] text-[rgba(233,233,237,0.55)] md:text-[15px]">
      {index} — {children}
    </h2>
  );
}

export function Shell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`px-5 md:px-24 ${className}`}>{children}</section>;
}

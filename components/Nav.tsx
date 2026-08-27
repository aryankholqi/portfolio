import Link from 'next/link';

const items = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#now', label: 'Now' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="flex items-center gap-6 px-5 pt-5 md:px-24 md:pt-6">
      <span className="text-[15px] tracking-[-0.02em]">Aryan Kholghi</span>
      <nav className="ml-auto hidden gap-6 text-sm md:flex">
        {items.map((i) => (
          <Link key={i.href} href={i.href} className="text-[rgba(233,233,237,0.75)]">
            {i.label}
          </Link>
        ))}
      </nav>
      <span className="ml-auto flex items-center gap-2 text-xs text-[rgba(233,233,237,0.6)] md:ml-3">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]" />
        Available for projects
      </span>
    </header>
  );
}

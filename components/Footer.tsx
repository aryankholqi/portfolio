import type { UI } from '@/lib/content';

export default function Footer({ ui }: { ui: UI }) {
  return (
    <footer className="flex flex-col gap-2 px-5 py-7 text-xs text-[rgba(233,233,237,0.4)] md:flex-row md:items-center md:px-24">
      <span>{ui.footer.credit}</span>
      <span className="md:ms-auto">{ui.footer.built}</span>
    </footer>
  );
}

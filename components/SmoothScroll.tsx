'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { ReactLenis, type LenisRef } from 'lenis/react';
import 'lenis/dist/lenis.css';

/** Room left above a section so it clears the sticky nav. */
const HEADER_OFFSET = -96;

/**
 * Lenis smooth scroll on the page root. It drives the real window scroll, so
 * sticky positioning, scroll events and IntersectionObserver keep working.
 * Lenis honours prefers-reduced-motion on its own (smoothing is dropped and
 * programmatic scrolls become instant), so no extra guard is needed here.
 *
 * Same-page anchor clicks are routed through Lenis instead of the browser's
 * instant hash jump — one listener here covers every `#section` link on the page.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const ref = useRef<LenisRef>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const link = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      const lenis = ref.current?.lenis;
      if (!link || !lenis || link.target === '_blank') return;

      const url = new URL(link.href, window.location.href);
      const samePage =
        url.origin === window.location.origin && url.pathname === window.location.pathname && url.hash;
      if (!samePage) return;

      const target = document.querySelector(url.hash);
      if (!target) return;

      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: HEADER_OFFSET });
      window.history.replaceState(null, '', url.hash);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <ReactLenis
      root
      ref={ref}
      options={{
        // How fast the animated position catches up with the real one: lower
        // is heavier/slower, higher is snappier.
        lerp: 0.1,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
        // Touch devices already scroll smoothly; smoothing them fights the OS.
        syncTouch: false,
        // Handled by the listener above, which adds the sticky-nav offset.
        anchors: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}

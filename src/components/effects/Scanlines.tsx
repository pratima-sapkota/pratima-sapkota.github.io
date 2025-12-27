'use client';

import { useEffect, useState } from 'react';

export function Scanlines() {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (isReducedMotion) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9998]"
      style={{
        background: `repeating-linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.1),
          rgba(0, 0, 0, 0.1) 1px,
          transparent 1px,
          transparent 2px
        )`,
      }}
      aria-hidden="true"
    />
  );
}

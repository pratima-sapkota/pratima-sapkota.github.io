'use client';

import { useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function GlitchText({ text, className = '', as: Component = 'span' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  return (
    <Component
      className={`relative inline-block ${className} ${isGlitching ? 'animate-glitch' : ''}`}
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
      style={{
        textShadow: isGlitching
          ? '2px 0 #ff3333, -2px 0 #00d4ff'
          : 'none',
      }}
    >
      {text}
    </Component>
  );
}

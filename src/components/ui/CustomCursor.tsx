'use client';

import { useCustomCursor } from '@/hooks/useCustomCursor';

export function CustomCursor() {
  const { pos, hovered } = useCustomCursor();

  return (
    <div
      className={`custom-cursor-container pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block`}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      <div
        className={`w-10 h-10 rounded-full border border-white/60 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
          hovered ? 'scale-[1.6] bg-white/10 border-white' : ''
        }`}
      />
    </div>
  );
}

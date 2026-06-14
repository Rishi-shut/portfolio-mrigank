'use client';

import { useEffect, useRef, useState } from 'react';

export function CursorRing() {
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Dynamically detect theme based on element under cursor
      const targetEl = document.elementFromPoint(e.clientX, e.clientY);
      if (targetEl) {
        const darkParent = targetEl.closest('.scene--dark');
        setIsDark(!!darkParent);
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const targetEl = e.target as HTMLElement;
      if (
        targetEl &&
        (targetEl.tagName === 'A' ||
          targetEl.tagName === 'BUTTON' ||
          targetEl.closest('a') ||
          targetEl.closest('button') ||
          targetEl.classList.contains('interactive') ||
          targetEl.getAttribute('role') === 'button')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    let rafId: number;
    const tick = () => {
      // Lerp calculations (0.14 lag)
      ring.current.x += (mouse.current.x - ring.current.x) * 0.14;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.14;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ringRef}
      className={`cursor-ring pointer-events-none fixed top-0 left-0 hidden md:block ${
        isDark ? 'dark border-white/25' : 'border-blue-primary/38'
      } ${hovered ? 'hovered' : ''}`}
    />
  );
}

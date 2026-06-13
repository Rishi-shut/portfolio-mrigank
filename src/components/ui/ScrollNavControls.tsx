'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollNavControlsProps {
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

export function ScrollNavControls({ containerRef }: ScrollNavControlsProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [totalSections, setTotalSections] = useState(0);

  useEffect(() => {
    const container = containerRef?.current || document.querySelector('.snap-container');
    if (!container) return;

    const updateSections = () => {
      const sections = container.querySelectorAll('.snap-section');
      setTotalSections(sections.length);
    };

    updateSections();
    // Watch for dynamic DOM changes
    const observer = new MutationObserver(updateSections);
    observer.observe(container, { childList: true, subtree: true });

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const height = window.innerHeight;
      const idx = Math.round(scrollTop / height);
      setActiveIdx(idx);
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [containerRef]);

  const scrollToSection = (index: number) => {
    const container = containerRef?.current || document.querySelector('.snap-container');
    if (!container) return;

    const sections = container.querySelectorAll('.snap-section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveIdx(index);
    }
  };

  const handlePrev = () => {
    if (activeIdx > 0) {
      scrollToSection(activeIdx - 1);
    }
  };

  const handleNext = () => {
    if (activeIdx < totalSections - 1) {
      scrollToSection(activeIdx + 1);
    }
  };

  // If there's only 0 or 1 section, or we are on mobile (where snapping might be disabled/different), hide or adapt
  if (totalSections <= 1) return null;

  const isFirst = activeIdx === 0;
  const isLast = activeIdx === totalSections - 1;

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-center gap-4 z-40 bg-black/10 backdrop-blur-sm p-2 rounded-full border border-white/5 md:flex">
      {/* Up Arrow - Hidden on first section */}
      <button
        onClick={handlePrev}
        disabled={isFirst}
        className={`w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-white text-white transition-all cursor-pointer ${
          isFirst ? 'opacity-0 pointer-events-none' : 'opacity-60 hover:opacity-100'
        }`}
        aria-label="Scroll to previous section"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Down Wave (~) - Always present on non-final sections, pulses gently */}
      <button
        onClick={handleNext}
        disabled={isLast}
        className={`w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-white text-white font-serif text-lg leading-none transition-all cursor-pointer ${
          isLast ? 'opacity-0 pointer-events-none' : 'opacity-60 hover:opacity-100 animate-pulse-wave'
        }`}
        aria-label="Scroll to next section"
      >
        ~
      </button>
    </div>
  );
}

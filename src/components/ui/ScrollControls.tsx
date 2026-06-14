'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollControls() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [totalScenes, setTotalScenes] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const scenes = document.querySelectorAll('.scene');
    setTotalScenes(scenes.length);

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let currentIdx = 0;

      scenes.forEach((scene, idx) => {
        const top = (scene as HTMLElement).offsetTop;
        const height = (scene as HTMLElement).offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentIdx = idx;
        }
      });

      setActiveIdx(currentIdx);

      // Detect theme for scroll buttons based on the active scene
      const activeScene = scenes[currentIdx];
      if (activeScene) {
        setIsDark(activeScene.classList.contains('scene--dark'));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToScene = (idx: number) => {
    const scenes = document.querySelectorAll('.scene');
    if (scenes[idx]) {
      scenes[idx].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (activeIdx > 0) {
      scrollToScene(activeIdx - 1);
    }
  };

  const handleNext = () => {
    if (activeIdx < totalScenes - 1) {
      scrollToScene(activeIdx + 1);
    }
  };

  if (totalScenes <= 1) return null;

  const isFirst = activeIdx === 0;
  const isLast = activeIdx === totalScenes - 1;

  const circleBorderClass = isDark 
    ? 'border-white/20 text-white hover:border-white' 
    : 'border-blue-primary/18 text-blue-primary hover:border-blue-primary';

  return (
    <div className="scroll-controls fixed right-[clamp(72px,14vw,270px)] bottom-[62px] z-30 grid gap-5">
      {/* Up Button */}
      <button
        onClick={handlePrev}
        disabled={isFirst}
        className={`scroll-button w-16 h-16 rounded-full border bg-transparent flex items-center justify-center transition-all duration-300 cursor-pointer ${circleBorderClass} ${
          isFirst ? 'opacity-0 pointer-events-none' : 'opacity-75 hover:opacity-100'
        }`}
        aria-label="Scroll up"
      >
        <ArrowUp className="w-[18px] h-[18px]" />
      </button>

      {/* Down Wave Button */}
      <button
        onClick={handleNext}
        disabled={isLast}
        className={`scroll-button w-16 h-16 rounded-full border bg-transparent flex items-center justify-center font-serif text-lg transition-all duration-300 cursor-pointer ${circleBorderClass} ${
          isLast ? 'opacity-0 pointer-events-none' : 'opacity-75 hover:opacity-100 animate-pulse-wave'
        }`}
        style={{ animation: 'wavePulse 2s ease-in-out infinite' }}
        aria-label="Scroll down"
      >
        ~
      </button>
    </div>
  );
}

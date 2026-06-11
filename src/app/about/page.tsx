'use client';

import { useState } from 'react';
import { BackButton } from '@/components/layout/BackButton';
import { FlowerStack } from '@/components/about/FlowerStack';
import { SkillsDashboard } from '@/components/about/SkillsDashboard';
import { PageTransition } from '@/components/layout/PageTransition';
import { AnimatePresence, motion } from 'framer-motion';

export default function AboutPage() {
  const [open, setOpen] = useState(false);
  const [flowerColor, setFlowerColor] = useState<'white' | 'pink' | 'blue' | 'orange'>('white');
  const [activeSnippet, setActiveSnippet] = useState<string>('');

  const pillars = [
    {
      name: 'Frontend & Motion',
      color: 'pink' as const,
      snippet: 'Developing fluid 60fps animations using Framer Motion, GSAP, and Three.js.'
    },
    {
      name: 'Backend & Database',
      color: 'blue' as const,
      snippet: 'Architecting secure server layouts using Node.js, Prisma, SQL, and Neon database.'
    },
    {
      name: 'Systems & Design',
      color: 'orange' as const,
      snippet: 'Prototyping responsive layouts in Figma, designing design tokens and component libraries.'
    }
  ];

  return (
    <PageTransition>
      <main className="page about-page">
        {/* Back button on the right for About page layout */}
        <BackButton position="right" />
        
        <section className="about-copy">
          <h1 className="about-title">
            About <em>Him</em>
          </h1>
          <p className="about-instruction">
            SELECT A PILLAR BELOW TO INSPECT MY CREDENTIALS, OR VIEW THE COMPLETE SKILLS DASHBOARD.
          </p>

          <div className="about-pillars">
            {pillars.map((pillar) => (
              <button
                key={pillar.name}
                className="pillar-btn"
                onMouseEnter={() => {
                  setFlowerColor(pillar.color);
                  setActiveSnippet(pillar.snippet);
                }}
                onMouseLeave={() => {
                  setFlowerColor('white');
                  setActiveSnippet('');
                }}
                onClick={() => setOpen(true)}
              >
                &rsaquo; {pillar.name}
              </button>
            ))}
            
            <button 
              className="pillar-btn mt-6 border-white/20 text-white font-medium"
              onClick={() => setOpen(true)}
            >
              &rsaquo; View Skills Dashboard
            </button>
          </div>

          {/* Active Pillar Snippet Box */}
          <div className="h-16 mt-8 max-w-[480px]">
            <AnimatePresence mode="wait">
              {activeSnippet && (
                <motion.p
                  key={activeSnippet}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-xs text-white/40 leading-relaxed uppercase tracking-wider"
                >
                  {activeSnippet}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Flower stack responding to pillar hovering */}
        <FlowerStack colorState={flowerColor} />

        <AnimatePresence>
          {open && (
            <SkillsDashboard onClose={() => setOpen(false)} />
          )}
        </AnimatePresence>

        <footer className="footer-nav">
          <span>PORTFOLIO 2026</span>
          <span className="text-[rgba(255,255,255,0.24)]">hover pillars to inject color</span>
          <span>PROFILE DOME: ONLINE</span>
        </footer>
      </main>
    </PageTransition>
  );
}

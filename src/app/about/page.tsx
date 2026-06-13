'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollNavControls } from '@/components/ui/ScrollNavControls';
import { Footer } from '@/components/layout/Footer';

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const timeline = [
    { year: '2024 — PRESENT', role: 'SENIOR CREATIVE DEVELOPER', org: 'MONTFORT DIGITAL' },
    { year: '2022 — 2024', role: 'SYSTEMS ARCHITECT & UX PROTOTYPER', org: 'LUMINA MEDIA' },
    { year: '2020 — 2022', role: 'INTERACTIVE DESIGN ENGINEER', org: 'GENESIS STUDIOS' },
  ];

  const values = [
    { title: 'PERFORMANCE FIRST', desc: 'Interfaces must react instantly. We design with zero waste: fast rendering paths, optimized bundle sizes, and fluid 60fps animations.' },
    { title: 'AESTHETIC PRESTIGE', desc: 'Typography is art. Whitespace is breathing room. We reject crowded tables and boring templates, crafting custom layouts that feel premium.' },
    { title: 'DETERMINISTIC LOGIC', desc: 'Systems must behave predictably. Clean types, deterministic state transitions, modular hooks, and robust architectures define our engineering.' },
  ];

  return (
    <main ref={containerRef} className="snap-container bg-pearl text-teal-dark">
      {/* SECTION 1: HERO */}
      <section className="snap-section bg-sky text-teal-dark flex flex-col justify-between p-8 md:p-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
            alt="Atmospheric node sky"
            fill
            className="object-cover opacity-20 filter grayscale"
            priority
          />
        </div>

        <div className="z-10 mt-24">
          <SectionLabel>BACKGROUND PROFILE</SectionLabel>
        </div>

        <div className="z-10 mb-12 ml-4 md:ml-12 text-reveal">
          <h1 className="text-6xl md:text-9vw font-display font-thin uppercase tracking-wider leading-none">
            ABOUT
          </h1>
          <p className="text-xs md:text-sm tracking-[0.25em] text-teal-dark/60 mt-4 max-w-md uppercase font-light leading-relaxed">
            Personal narrative, technical timeline, and architectural philosophy.
          </p>
        </div>

        <div className="z-10 flex justify-between items-end">
          <span className="text-[10px] font-display tracking-[0.2em] opacity-40 uppercase">
            SCROLL TO DISCOVER STORY
          </span>
        </div>
      </section>

      {/* SECTION 2: STORY */}
      <section className="snap-section bg-pearl text-teal-dark flex flex-col justify-between p-8 md:p-16">
        <div className="z-10 mt-24">
          <SectionLabel>THE JOURNEY</SectionLabel>
        </div>

        <div className="z-10 max-w-3xl ml-4 md:ml-12 my-auto flex flex-col gap-6 md:gap-10">
          <h2 className="text-3xl md:text-5xl font-display font-light uppercase tracking-wider text-teal-dark">
            ENGINEERING MEETS CINEMATIC DESIGN
          </h2>
          <p className="font-body text-xl md:text-2xl font-light leading-relaxed text-slate">
            I am a full-stack engineer and creative technologist based in India. For the past half-decade, I have specialized in building bespoke layouts for luxury brands, high-end design agencies, and industrial scale systems.
          </p>
          <p className="font-body text-xl md:text-2xl font-light leading-relaxed text-slate opacity-80">
            By rejecting standard framework defaults, I treat web systems as physical canvases. Every frame is choreographed, every pixel is deliberate, and every server payload is optimized for prestige performance.
          </p>
        </div>

        <div className="z-10">
          {/* Bottom spacing spacer */}
        </div>
      </section>

      {/* SECTION 3: TIMELINE */}
      <section className="snap-section bg-sky text-teal-dark flex flex-col justify-between p-8 md:p-16">
        <div className="z-10 mt-24">
          <SectionLabel>CHRONOLOGICAL RECORD</SectionLabel>
        </div>

        <div className="z-10 w-full max-w-5xl mx-auto my-auto flex flex-col gap-12">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-teal-dark/10 pb-6 w-full gap-4 text-reveal"
            >
              <span className="font-mono text-xs text-teal-dark/50 tracking-wider">
                {item.year}
              </span>
              <div className="flex flex-col md:text-right">
                <h3 className="text-xl md:text-2xl font-display font-light uppercase tracking-widest text-teal-dark">
                  {item.role}
                </h3>
                <span className="text-xs font-mono tracking-wider opacity-60 mt-1">
                  {item.org}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="z-10">
          {/* Bottom spacing spacer */}
        </div>
      </section>

      {/* SECTION 4: VALUES (DARK FOREST THEME) */}
      <section className="snap-section bg-forest text-text-dark flex flex-col justify-between p-8 md:p-16">
        <div className="z-10 mt-24 text-white">
          <SectionLabel>GUIDING PROTOCOLS</SectionLabel>
        </div>

        <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto w-full my-auto">
          {values.map((val, idx) => (
            <div key={idx} className="flex flex-col gap-4 border-t border-white/10 pt-8">
              <span className="font-mono text-xs text-particle tracking-widest">PROTOCOL 0{idx + 1}</span>
              <h3 className="text-white text-xl md:text-2xl font-display tracking-widest font-thin uppercase">
                {val.title}
              </h3>
              <p className="font-display text-sm leading-relaxed text-text-dark/70">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="z-10">
          {/* Bottom spacing spacer */}
        </div>
      </section>

      {/* SECTION 5: FOOTER */}
      <section className="snap-section bg-white flex flex-col justify-between">
        <div className="flex-grow flex items-center">
          <Footer />
        </div>
      </section>

      {/* Global Scroll Navigation Controls */}
      <ScrollNavControls containerRef={containerRef} />
    </main>
  );
}

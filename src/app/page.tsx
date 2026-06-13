'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollNavControls } from '@/components/ui/ScrollNavControls';
import { Footer } from '@/components/layout/Footer';

// Dynamically import Three.js Globe scene (SSR safe)
const GlobeScene = dynamic(() => import('@/components/three/Globe'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-navy/20 animate-pulse flex items-center justify-center text-white/20">LOADING CGI GLOBE...</div>,
});

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main ref={containerRef} className="snap-container">
      {/* SECTION 1: HERO (LIGHT THEME) */}
      <section className="snap-section bg-sky text-teal-dark flex flex-col justify-between p-8 md:p-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80"
            alt="Misty Mountains"
            fill
            className="object-cover opacity-35 filter grayscale"
            priority
          />
        </div>

        {/* Foreground Content */}
        <div className="z-10 mt-24">
          {/* Empty spacer or top content */}
        </div>

        {/* Logo / Brand Quadrant */}
        <div className="z-10 max-w-lg mb-12 ml-4 md:ml-12 text-reveal">
          <div className="flex items-center gap-4 mb-2">
            {/* Dot-matrix style icon */}
            <div className="grid grid-cols-3 gap-1 w-6 h-6 opacity-80">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-teal-dark rounded-full" />
              ))}
            </div>
            <span className="text-[10px] font-display tracking-[0.3em] font-bold">MRIGANK</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-thin tracking-wider leading-tight">
            SYSTEMS &<br />EXPERIENCES
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="z-10 flex justify-between items-end">
          <span className="text-[10px] font-display tracking-[0.2em] opacity-40 uppercase">
            SCROLL DOWN TO DISCOVER
          </span>
          {/* ScrollNavControls handles the wave pulse internally, but we render global scroll controller */}
        </div>
      </section>

      {/* SECTION 2: MISSION / TAGLINE (LIGHT THEME) */}
      <section className="snap-section bg-pearl text-teal-dark flex items-center p-8 md:p-16">
        <div className="max-w-7xl mx-auto w-full z-10">
          <SectionLabel>IDENTITY STATEMENT</SectionLabel>
          <div className="mt-8 flex flex-col gap-2">
            <h2 className="text-5xl md:text-8xl font-display font-thin uppercase tracking-wider leading-none text-reveal">
              YOUR CRAFT.
            </h2>
            <h2 className="text-5xl md:text-8xl font-display font-thin uppercase tracking-wider leading-none opacity-40 text-reveal">
              YOUR VISION.
            </h2>
          </div>
        </div>
      </section>

      {/* SECTION 3: DESCRIPTION (LIGHT THEME) */}
      <section className="snap-section bg-sky text-teal-dark flex flex-col justify-between p-8 md:p-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Corporate architecture in mist"
            fill
            className="object-cover opacity-15 filter grayscale"
          />
        </div>

        <div className="z-10 mt-24">
          <SectionLabel>EXECUTIVE BIO</SectionLabel>
        </div>

        <div className="z-10 max-w-2xl ml-4 md:ml-12 my-auto">
          <p className="font-body text-2xl md:text-4xl font-light leading-relaxed text-reveal text-slate">
            I build premium, high-contrast, editorial-grade web applications. Combining systems architecture with creative frontend choreography to formulate cinematic digital environments.
          </p>
        </div>

        <div className="z-10">
          {/* Bottom padding spacer */}
        </div>
      </section>

      {/* SECTION 4: VISUAL TRANSITION (LIGHT THEME) */}
      <section className="snap-section bg-sky flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2000&q=80"
            alt="Emerging vessel in mist"
            fill
            className="object-cover opacity-60 filter grayscale"
          />
        </div>
        <div className="z-10 text-center">
          {/* Empty text on purpose - pure visual transition drama */}
        </div>
      </section>

      {/* SECTION 5: GLOBAL REACH (DARK THEME) */}
      <section className="snap-section bg-navy text-text-dark flex flex-col justify-between p-8 md:p-16">
        {/* CGI Globe background */}
        <div className="absolute inset-y-0 right-0 w-full md:w-1/2 z-0 opacity-80">
          <GlobeScene />
        </div>

        <div className="z-10 mt-24">
          <SectionLabel>GLOBAL FOOTPRINT</SectionLabel>
        </div>

        <div className="z-10 max-w-md ml-4 md:ml-12 mb-12">
          <h3 className="text-white text-3xl font-display font-light tracking-wide mb-6 uppercase">
            DISTRIBUTED EXCELLENCE
          </h3>
          <p className="font-display text-sm leading-loose opacity-70">
            Deploying modern nodes across the cloud architecture. Designing systems that operate globally, scale instantly, and present with prestigious layout integrity.
          </p>
        </div>

        <div className="z-10">
          {/* Bottom spacing spacer */}
        </div>
      </section>

      {/* SECTION 6: SKILLS & METHODOLOGY (DARK GREEN THEME) */}
      <section className="snap-section bg-forest text-text-dark flex flex-col justify-between p-8 md:p-16">
        <div className="z-10 mt-24">
          <SectionLabel>METHODOLOGY & SKILLS</SectionLabel>
        </div>

        <div className="z-10 max-w-3xl mx-auto text-center my-auto">
          <p className="font-body text-xl md:text-3xl font-light leading-relaxed text-text-dark/95 mb-12">
            Adhering to strict engineering protocols: modular components, client-side fluidity, deterministic layouts, and semantic code cleanliness.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-mono tracking-wider opacity-60">
            <span>[ FRONTEND & THREE.JS ]</span>
            <span>•</span>
            <span>[ BACKEND ARCHITECTURES ]</span>
            <span>•</span>
            <span>[ SYSTEMS DESIGN ]</span>
          </div>
        </div>

        <div className="z-10">
          {/* Bottom spacing spacer */}
        </div>
      </section>

      {/* SECTION 7: FEATURED WORK GRID (GREEN-DARK THEME) */}
      <section className="snap-section bg-forest-mid text-text-dark flex flex-col justify-between p-8 md:p-16">
        <div className="z-10 mt-24">
          <SectionLabel>SELECTED WORK</SectionLabel>
        </div>

        {/* 3-Column Work Grid */}
        <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-2 w-full my-auto max-w-6xl mx-auto">
          {[
            {
              id: '01',
              title: 'PHOTOBOOTH APP',
              src: '/assets/projects/project-01-photobooth.png',
            },
            {
              id: '02',
              title: 'INNER VOICE APP',
              src: '/assets/projects/project-02-inner-voice.png',
            },
            {
              id: '03',
              title: 'AUTOMOTIVE INDEX',
              src: '/assets/projects/project-03-automotive.png',
            },
          ].map((project) => (
            <Link key={project.id} href="/work" className="group block relative overflow-hidden aspect-[4/3] bg-black/40 border border-white/5">
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="font-mono text-[9px] text-white/40 tracking-wider mb-2">PROJECT {project.id}</span>
                <h4 className="text-white text-sm font-display tracking-widest uppercase font-light">
                  {project.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>

        <div className="z-10 text-center">
          <Link href="/work" className="text-xs font-display tracking-[0.25em] text-white/50 hover:text-white transition-colors">
            VIEW FULL INDEX &rarr;
          </Link>
        </div>
      </section>

      {/* SECTION 8: RECOGNITION / PARTNERS (DARK GREEN THEME) */}
      <section className="snap-section bg-forest text-text-dark flex flex-col justify-between p-8 md:p-16">
        <div className="z-10 mt-24">
          <SectionLabel>RECOGNITION & CLIENTS</SectionLabel>
        </div>

        <div className="z-10 text-center my-auto max-w-4xl mx-auto w-full">
          <h3 className="text-white text-2xl font-display font-thin tracking-widest uppercase mb-12">
            TRUSTED BY PROFESSIONAL TEAMS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-65">
            <span className="font-display font-thin text-lg tracking-[0.3em] text-white">[ VERCEL ]</span>
            <span className="font-display font-thin text-lg tracking-[0.3em] text-white">[ GITHUB ]</span>
            <span className="font-display font-thin text-lg tracking-[0.3em] text-white">[ GOOGLE ]</span>
            <span className="font-display font-thin text-lg tracking-[0.3em] text-white">[ STRIPE ]</span>
          </div>
        </div>

        <div className="z-10">
          {/* Bottom spacing spacer */}
        </div>
      </section>

      {/* SECTION 9: FOOTER (LIGHT THEME, FULL VIEWPORT GRID) */}
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

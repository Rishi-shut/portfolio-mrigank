'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollNavControls } from '@/components/ui/ScrollNavControls';
import { Footer } from '@/components/layout/Footer';
import { projects } from '@/data/projects';

// Dynamically import WireframeScene (SSR safe)
const WireframeScene = dynamic(() => import('@/components/three/WireframeScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-space/20" />,
});

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main ref={containerRef} className="snap-container bg-space">
      {/* SECTION 1: HERO */}
      <section className="snap-section bg-space text-white flex flex-col justify-between p-8 md:p-16">
        <div className="absolute inset-0 z-0 opacity-40">
          <WireframeScene type="cylinder" />
        </div>

        <div className="z-10 mt-24">
          <SectionLabel>PORTFOLIO PROJECTS</SectionLabel>
        </div>

        <div className="z-10 mb-12 ml-4 md:ml-12 text-reveal">
          <h1 className="text-6xl md:text-9vw font-display font-thin uppercase tracking-wider leading-none">
            WORK
          </h1>
          <p className="text-xs md:text-sm tracking-[0.25em] text-white/40 mt-4 max-w-md uppercase font-light leading-relaxed">
            A comprehensive index of digital systems, creative installations, and frontend development.
          </p>
        </div>

        <div className="z-10 flex justify-between items-end">
          <span className="text-[10px] font-display tracking-[0.2em] opacity-40 uppercase">
            SCROLL TO VIEW INDEX
          </span>
        </div>
      </section>

      {/* SECTION 2: DESCRIPTION */}
      <section className="snap-section bg-navy text-text-dark flex flex-col justify-between p-8 md:p-16">
        <div className="absolute inset-0 z-0 opacity-20">
          <WireframeScene type="torus" />
        </div>

        <div className="z-10 mt-24">
          <SectionLabel>PHILOSOPHY</SectionLabel>
        </div>

        <div className="z-10 max-w-3xl ml-4 md:ml-12 my-auto">
          <h2 className="text-white text-3xl md:text-5xl font-display font-light uppercase tracking-wider mb-6">
            SYSTEM DESIGN OVER CARD DESIGN
          </h2>
          <p className="font-body text-xl md:text-2xl font-light leading-relaxed text-text-dark/80">
            Every project represents a commitment to responsive fluidity, visual performance, and structured state machine management. We reject generic cards in favor of full-bleed immersive environments.
          </p>
        </div>

        <div className="z-10">
          {/* Bottom spacing spacer */}
        </div>
      </section>

      {/* SECTIONS 3-8: PROJECTS */}
      {projects.map((project, idx) => {
        const bgVariant = idx % 3 === 0 ? 'bg-space' : idx % 3 === 1 ? 'bg-navy' : 'bg-deep-teal';
        const modelType = idx % 3 === 0 ? 'cylinder' : idx % 3 === 1 ? 'torus' : 'sphere';

        return (
          <section
            key={project.id}
            className={`snap-section ${bgVariant} text-text-dark flex flex-col justify-between p-8 md:p-16`}
          >
            {/* Background 3D scene */}
            <div className="absolute inset-0 z-0 opacity-40">
              <WireframeScene type={modelType} />
            </div>

            {/* Background Image Preview (positioned to float as an editorial card) */}
            <div className="absolute right-[8vw] top-[25%] w-full max-w-[400px] aspect-[4/3] z-0 hidden md:block border border-white/5 bg-black/20">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-60 filter grayscale"
              />
            </div>

            <div className="z-10 mt-24">
              <SectionLabel>PROJECT {project.id}</SectionLabel>
            </div>

            {/* Left aligned title, Right aligned description details */}
            <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto w-full my-auto">
              <div className="text-left">
                <span className="font-mono text-xs text-white/40 tracking-[0.2em]">CASE {project.id}</span>
                <h3 className="text-white text-4xl md:text-6xl font-display tracking-widest font-thin uppercase mt-2">
                  {project.title}
                </h3>
              </div>
              <div className="text-left md:text-right border-l md:border-l-0 md:border-r border-white/10 pl-6 md:pl-0 md:pr-6 flex flex-col items-start md:items-end justify-center">
                <p className="font-display text-base md:text-lg font-light leading-relaxed text-white/80 max-w-md">
                  {project.short}
                </p>
                <div className="mt-6 flex gap-3">
                  <span className="font-mono text-[9px] bg-white/5 border border-white/10 text-white/60 px-2.5 py-1 uppercase tracking-wider">
                    REACT / TS
                  </span>
                  <span className="font-mono text-[9px] bg-white/5 border border-white/10 text-white/60 px-2.5 py-1 uppercase tracking-wider">
                    THREE.JS
                  </span>
                </div>
              </div>
            </div>

            <div className="z-10">
              {/* Bottom spacing spacer */}
            </div>
          </section>
        );
      })}

      {/* SECTION 9: FOOTER */}
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

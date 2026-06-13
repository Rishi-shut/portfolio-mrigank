'use client';

import { useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollNavControls } from '@/components/ui/ScrollNavControls';
import { Footer } from '@/components/layout/Footer';

// Dynamically import WireframeScene (SSR safe)
const WireframeScene = dynamic(() => import('@/components/three/WireframeScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-space/20" />,
});

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: '01',
      title: 'FRONTEND ENGINEERING',
      desc: 'Developing high-fidelity client-side environments. Implementing smooth scrolling mechanics, interactive 3D WebGL scenes, complex timeline animations, and pixel-perfect layouts using React, Next.js, Framer Motion, and GSAP.',
      tech: ['React / TypeScript', 'Three.js / WebGL', 'Framer Motion & GSAP', 'Tailwind / Vanilla CSS'],
    },
    {
      id: '02',
      title: 'BACKEND ARCHITECTURES',
      desc: 'Formulating robust, secure, and performant backend node clusters. Optimizing database query times, implementing serverless edge endpoints, caching strategies, and designing type-safe REST/GraphQL APIs.',
      tech: ['Node.js & Express', 'Prisma ORM & PostgreSQL', 'Edge Functions', 'REST & GraphQL APIs'],
    },
    {
      id: '03',
      title: 'CREATIVE DESIGN SYSTEMS',
      desc: 'Drafting strict brand standards and responsive components. Defining color registers, typographic hierarchies, responsive grid tokens, and modular code structures that preserve corporate luxury aesthetics.',
      tech: ['UI/UX Prototyping', 'Figma Libraries', 'Token Architectures', 'Responsive Standards'],
    },
  ];

  return (
    <main ref={containerRef} className="snap-container bg-space">
      {/* SECTION 1: HERO */}
      <section className="snap-section bg-space text-white flex flex-col justify-between p-8 md:p-16">
        <div className="absolute inset-0 z-0 opacity-40">
          <WireframeScene type="torus" />
        </div>

        <div className="z-10 mt-24">
          <SectionLabel>SERVICE CAPABILITIES</SectionLabel>
        </div>

        <div className="z-10 mb-12 ml-4 md:ml-12 text-reveal">
          <h1 className="text-6xl md:text-9vw font-display font-thin uppercase tracking-wider leading-none">
            SERVICES
          </h1>
          <p className="text-xs md:text-sm tracking-[0.25em] text-white/40 mt-4 max-w-md uppercase font-light leading-relaxed">
            Professional execution across frontend, backend, and interface design systems.
          </p>
        </div>

        <div className="z-10 flex justify-between items-end">
          <span className="text-[10px] font-display tracking-[0.2em] opacity-40 uppercase">
            SCROLL TO DISCOVER CAPABILITIES
          </span>
        </div>
      </section>

      {/* SECTIONS 2-4: SERVICES */}
      {services.map((service, idx) => {
        const bgVariant = idx % 2 === 0 ? 'bg-navy' : 'bg-deep-teal';
        const modelType = idx % 2 === 0 ? 'cylinder' : 'sphere';

        return (
          <section
            key={service.id}
            className={`snap-section ${bgVariant} text-text-dark flex flex-col justify-between p-8 md:p-16`}
          >
            <div className="absolute inset-0 z-0 opacity-20">
              <WireframeScene type={modelType} />
            </div>

            <div className="z-10 mt-24">
              <SectionLabel>CAPABILITY {service.id}</SectionLabel>
            </div>

            {/* Left aligned title, Right aligned description details */}
            <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto w-full my-auto">
              <div className="text-left">
                <span className="font-mono text-xs text-white/40 tracking-[0.2em]">NODE {service.id}</span>
                <h3 className="text-white text-3xl md:text-5xl font-display tracking-widest font-thin uppercase mt-2">
                  {service.title}
                </h3>
              </div>
              <div className="text-left md:text-right border-l md:border-l-0 md:border-r border-white/10 pl-6 md:pl-0 md:pr-6 flex flex-col items-start md:items-end justify-center">
                <p className="font-display text-sm md:text-base font-light leading-relaxed text-white/80 max-w-md mb-6">
                  {service.desc}
                </p>
                <div className="flex flex-wrap justify-start md:justify-end gap-2">
                  {service.tech.map((t, i) => (
                    <span
                      key={i}
                      className="font-mono text-[9px] bg-white/5 border border-white/10 text-white/60 px-2 py-0.5 uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="z-10">
              {/* Bottom spacing spacer */}
            </div>
          </section>
        );
      })}

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

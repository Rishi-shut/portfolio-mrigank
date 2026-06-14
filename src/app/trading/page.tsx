'use client';

import { useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Header } from '@/components/layout/Header';
import { ScrollControls } from '@/components/ui/ScrollControls';
import { Footer } from '@/components/layout/Footer';

// Dynamically import 3D points grid and wireframe models
const DottedGrid = dynamic(() => import('@/components/three/DottedGrid'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#000407]" />,
});

const WireframeScene = dynamic(() => import('@/components/three/WireframeScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#000407]" />,
});

export default function TradingPage() {
  return (
    <div className="bg-[#000407]">
      {/* Header */}
      <Header variant="transparent" isDarkTheme={true} />

      {/* SECTION 1: DARK GRID HERO */}
      <section className="scene scene--dark bg-[#000407] text-white flex flex-col justify-between p-8 md:p-16">
        {/* Dynamic points grid floor */}
        <div className="absolute inset-0 z-0">
          <DottedGrid color="#0097d7" />
        </div>

        <div className="z-10 mt-[var(--nav-top)] text-center">
          <span className="text-xs md:text-sm font-display tracking-[0.2em] text-white/40 uppercase font-semibold">
            MONTFORT TRADING
          </span>
        </div>

        {/* Central content */}
        <div className="z-10 max-w-3xl mx-auto my-auto px-4 text-center">
          <h2 className="text-white text-3xl md:text-5xl font-display font-light uppercase tracking-[0.12em] mb-8 leading-snug">
            LEADING WITH INNOVATION.
          </h2>
          <p className="font-display text-lg md:text-[24px] font-light leading-[1.55] text-white/90">
            Montfort Trading manages a diverse portfolio of products and services, safely and responsibly, all over the world. With extensive expertise and knowledge in various fields, we ensure top-quality service and delivery in every market we serve.
          </p>
        </div>

        <div className="h-12" />
      </section>

      {/* SECTION 2: MARINE FUELS / CYLINDERS */}
      <section className="scene scene--dark bg-[#061d2f] text-white flex flex-col justify-between p-8 md:p-16">
        {/* Wireframe cylinders floating in background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <WireframeScene type="cylinder" />
        </div>

        <div className="z-10 mt-[var(--nav-top)] text-center md:text-left md:ml-[var(--page-x)]">
          <span className="text-[13px] font-display tracking-[0.2em] text-white/40 uppercase font-semibold">
            PRODUCTS & SERVICES
          </span>
        </div>

        {/* Floating cards / text layers */}
        <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto w-full my-auto px-4 md:px-[var(--page-x)]">
          {/* Categories index */}
          <div className="flex flex-col gap-6 text-left border-l border-white/10 pl-6">
            <span className="text-sm tracking-widest opacity-40 uppercase">Crude oil</span>
            <span className="text-lg md:text-[32px] font-display font-light uppercase tracking-wider text-white">Marine Fuels</span>
            <span className="text-sm tracking-widest opacity-40 uppercase">Gasoline</span>
          </div>

          {/* Description details */}
          <div className="text-left flex flex-col justify-center border-l md:border-l-0 md:border-r border-white/10 pl-6 md:pl-0 md:pr-6 md:text-right">
            <p className="font-display text-lg md:text-[24px] font-light leading-[1.42] text-white/92 max-w-lg md:ml-auto">
              Montfort&apos;s bunkering operations are designed to ensure reliable and efficient marine fuel supply in Fujairah, UAE, the third largest bunker hub in the world.
            </p>
          </div>
        </div>

        <div className="h-12" />
      </section>

      {/* SECTION 3: COMPLIANCE FRAMEWORK */}
      <section className="scene scene--dark bg-[#000407] text-white flex flex-col justify-between p-8 md:p-16">
        <div className="absolute inset-0 z-0 opacity-15">
          <DottedGrid color="#0097d7" />
        </div>

        <div className="z-10 mt-[var(--nav-top)] text-center">
          <span className="text-xs md:text-sm font-display tracking-[0.2em] text-white/40 uppercase font-semibold">
            COMPLIANCE PROTOCOL
          </span>
        </div>

        <div className="z-10 max-w-3xl mx-auto my-auto px-4 text-center">
          <h3 className="text-white text-2xl md:text-4xl font-display font-light uppercase tracking-widest mb-6">
            RISK ASSESSMENT
          </h3>
          <p className="font-display text-sm md:text-base leading-loose opacity-70">
            Adhering to severe corporate compliance, checking credit requirements, vetting operations, and coordinating with institutional counterparties to ensure transactions operate safely under international regulations.
          </p>
        </div>

        <div className="h-12" />
      </section>

      {/* FOOTER */}
      <Footer />

      {/* Scroll Controls */}
      <ScrollControls />
    </div>
  );
}

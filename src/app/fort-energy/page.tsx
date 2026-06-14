'use client';

import { useRef } from 'react';
import Image from 'next/image';
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

export default function FortEnergyPage() {
  return (
    <div className="bg-[#ecebe7]">
      {/* Header */}
      <Header variant="auto" />

      {/* SECTION 1: WHITE CLOUD HERO */}
      <section className="scene bg-[#ecebe7] text-blue-primary flex flex-col justify-between p-8 md:p-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?auto=format&fit=crop&w=2000&q=80"
            alt="Misty White Clouds"
            fill
            className="object-cover opacity-95 filter brightness-[106%] contrast-[88%] saturate-[70%] grayscale"
            priority
          />
          <div className="absolute inset-0 bg-[#ecebe7]/30" />
        </div>

        {/* Faint vertical light beams */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent z-1 pointer-events-none" />

        <div className="z-10 mt-[var(--nav-top)] text-center">
          <span className="text-xs md:text-sm font-display tracking-[0.2em] text-blue-primary/60 uppercase font-semibold">
            FORT ENERGY
          </span>
        </div>

        {/* Giant Title Overlay */}
        <div className="z-10 w-full relative my-auto overflow-hidden">
          <h1 className="energy-title text-4xl md:text-[76px] font-display font-light uppercase tracking-[0.40em] text-blue-primary leading-none text-left pl-4">
            TIME · FORT ENERGY
          </h1>
          <div className="energy-title-line absolute left-0 right-0 top-1/2 h-[1px] bg-blue-primary/16 z-0" />
        </div>

        <div className="h-12" />
      </section>

      {/* SECTION 2: WIREFRAME REFINERY */}
      <section className="scene scene--dark bg-[#000407] text-white flex flex-col justify-between p-8 md:p-16">
        {/* Glow grid floor and wireframe meshes */}
        <div className="absolute inset-0 z-0 opacity-40">
          <DottedGrid color="#2fb7ff" />
        </div>
        <div className="absolute inset-0 z-0 opacity-30">
          <WireframeScene type="cylinder" />
        </div>

        <div className="z-10 mt-[var(--nav-top)] text-center">
          <span className="text-xs md:text-sm font-display tracking-[0.2em] text-white/40 uppercase font-semibold">
            REFINERY INFRASTRUCTURE
          </span>
        </div>

        {/* Text Blocks floating around grid */}
        <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto w-full my-auto px-4 md:px-[var(--page-x)]">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-8">
            <span className="font-mono text-xs text-grid-blue uppercase tracking-widest">Responsibility</span>
            <p className="font-display text-lg leading-relaxed text-white/90">
              Empowering communities through social responsibility and sustainable local investment projects.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-8">
            <span className="font-mono text-xs text-grid-blue uppercase tracking-widest">Market Access</span>
            <p className="font-display text-lg leading-relaxed text-white/90">
              Securing preferential market access across domestic refining nodes and pipelines.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-8">
            <span className="font-mono text-xs text-grid-blue uppercase tracking-widest">Asset Portfolio</span>
            <p className="font-display text-lg leading-relaxed text-white/90">
              The company&apos;s portfolio consists of six companies in the refining, storage, and distribution sectors.
            </p>
          </div>
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

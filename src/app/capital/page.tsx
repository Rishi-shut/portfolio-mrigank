'use client';

import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { ScrollControls } from '@/components/ui/ScrollControls';
import { Footer } from '@/components/layout/Footer';

export default function CapitalPage() {
  return (
    <div className="bg-[#f3f8fa]">
      {/* Header */}
      <Header variant="auto" />

      {/* SECTION 1: GREEN LAND HERO */}
      <section className="scene bg-mist text-blue-primary flex flex-col justify-between p-8 md:p-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2000&q=80"
            alt="Misty Green Land"
            fill
            className="object-cover opacity-90 filter saturate-[80%] contrast-[94%] brightness-[102%] grayscale-30"
            priority
          />
          <div className="absolute inset-0 bg-[#f3f8fa]/20" />
        </div>

        <div className="z-10 mt-[var(--nav-top)] text-center">
          <span className="text-xs md:text-sm font-display tracking-[0.2em] text-blue-primary/60 uppercase font-semibold">
            MONTFORT CAPITAL
          </span>
        </div>

        {/* Title */}
        <div className="z-10 max-w-4xl mx-auto my-auto px-4 text-center text-reveal">
          <h1 className="text-4xl md:text-[76px] font-display font-light uppercase tracking-[0.13em] text-blue-primary leading-tight">
            CAPITAL ALLOCATION
          </h1>
          <p className="text-xs md:text-sm tracking-[0.25em] text-blue-muted mt-6 uppercase font-light max-w-md mx-auto">
            Strategic investment in energy assets and supply infrastructure worldwide.
          </p>
        </div>

        <div className="h-12" />
      </section>

      {/* SECTION 2: PORTFOLIO & SECTORS */}
      <section className="scene bg-pearl text-blue-primary flex flex-col justify-between p-8 md:p-16">
        <div className="z-10 mt-[var(--nav-top)] text-center">
          <span className="text-xs md:text-sm font-display tracking-[0.2em] text-blue-primary/60 uppercase font-semibold">
            INVESTMENT FOCUS
          </span>
        </div>

        <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto w-full my-auto px-4">
          <div className="text-left flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-display font-light uppercase tracking-wider text-blue-primary mb-6">
              INFRASTRUCTURE ASSETS
            </h2>
            <p className="font-display text-sm md:text-base leading-relaxed text-blue-muted">
              We allocate capital toward storage terminals, marine bunkering assets, and logistics systems that support long-term energy flow and deliver solid institutional returns.
            </p>
          </div>

          <div className="text-left flex flex-col justify-center border-l border-blue-primary/10 pl-6">
            <h2 className="text-2xl md:text-4xl font-display font-light uppercase tracking-wider text-blue-primary mb-6">
              ENERGY TRANSITION
            </h2>
            <p className="font-display text-sm md:text-base leading-relaxed text-blue-muted">
              Investing in the optimization of existing assets and funding modern clean energy projects. Enabling efficiency to reduce carbon intensities under responsible standards.
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

'use client';

import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { ScrollControls } from '@/components/ui/ScrollControls';
import { Footer } from '@/components/layout/Footer';

export default function MaritimePage() {
  return (
    <div className="bg-[#9ba5a1]">
      {/* Header */}
      <Header variant="transparent" isDarkTheme={true} />

      {/* SECTION 1: ISLAND HERO */}
      <section className="scene scene--maritime-hero flex flex-col justify-between p-8 md:p-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=2000&q=80"
            alt="Misty Rocky Island"
            fill
            className="object-cover opacity-90 filter saturate-[80%] contrast-[94%] brightness-[95%] grayscale-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
        </div>

        <div className="z-10 mt-[var(--nav-top)] text-center">
          <span className="text-xs md:text-sm font-display tracking-[0.2em] text-white/50 uppercase font-semibold">
            MONTFORT MARITIME
          </span>
        </div>

        {/* Large Logo Ghost */}
        <div className="z-10 flex flex-col items-center justify-center my-auto text-reveal opacity-50 mix-blend-screen text-white">
          <h1 className="text-5xl md:text-[92px] font-display font-light uppercase tracking-[0.34em] leading-none text-center">
            MARITIME
          </h1>
        </div>

        <div className="h-12" />
      </section>

      {/* SECTION 2: HSSE / VETTING SHIP */}
      <section className="scene scene--dark bg-[#082236] text-white flex flex-col justify-between p-8 md:p-16">
        {/* Ocean background with tanker */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=2000&q=80"
            alt="Top-down tanker ship"
            fill
            className="object-cover object-top filter grayscale"
          />
        </div>

        <div className="z-10 mt-[var(--nav-top)] text-center">
          <span className="text-xs md:text-sm font-display tracking-[0.2em] text-white/40 uppercase font-semibold">
            HSSE OPERATIONS
          </span>
        </div>

        {/* 3 Columns Layout */}
        <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto w-full my-auto px-4 md:px-[var(--page-x)]">
          {/* Column 1: Title */}
          <div className="text-left flex flex-col justify-center">
            <h2 className="maritime-vetting-title text-3xl md:text-5xl font-display font-light uppercase tracking-[0.08em] leading-snug">
              HSSE –<br />
              Vetting<br />
              Procedure &<br />
              Policies
            </h2>
          </div>

          {/* Column 2: Policy copy */}
          <div className="text-left flex flex-col justify-center border-l border-white/10 pl-6">
            <p className="maritime-vetting-copy text-lg md:text-[24px] font-display font-light leading-relaxed text-white/90">
              Montfort prioritizes safety, particularly maritime safety, and consistently liaises with its technical management partners to ensure the highest standards are upheld.
            </p>
          </div>

          {/* Column 3: Partner copy */}
          <div className="text-left flex flex-col justify-center border-l border-white/10 pl-6">
            <p className="maritime-vetting-copy text-lg md:text-[24px] font-display font-light leading-relaxed text-white/90">
              Vessels are screened via partners RIGHTSHIP, making sure that we are up to date on vessel performance and condition before engaging in trade with Montfort.
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

'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollNavControls } from '@/components/ui/ScrollNavControls';
import { Footer } from '@/components/layout/Footer';

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main ref={containerRef} className="snap-container bg-pearl text-teal-dark">
      {/* SECTION 1: HERO */}
      <section className="snap-section bg-sky text-teal-dark flex flex-col justify-between p-8 md:p-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Misty architectural view"
            fill
            className="object-cover opacity-20 filter grayscale"
            priority
          />
        </div>

        <div className="z-10 mt-24">
          <SectionLabel>COMMUNICATIONS CHANNEL</SectionLabel>
        </div>

        <div className="z-10 mb-12 ml-4 md:ml-12 text-reveal">
          <h1 className="text-6xl md:text-9vw font-display font-thin uppercase tracking-wider leading-none">
            CONTACT
          </h1>
          <p className="text-xs md:text-sm tracking-[0.25em] text-teal-dark/60 mt-4 max-w-md uppercase font-light leading-relaxed">
            Establishing transmission lines. Initiate contact for collaborations or consultations.
          </p>
        </div>

        <div className="z-10 flex justify-between items-end">
          <span className="text-[10px] font-display tracking-[0.2em] opacity-40 uppercase">
            SCROLL TO CHANNELS
          </span>
        </div>
      </section>

      {/* SECTION 2: CONTACT BLOCK */}
      <section className="snap-section bg-pearl text-teal-dark flex flex-col justify-between p-8 md:p-16">
        <div className="z-10 mt-24">
          <SectionLabel>INQUIRIES</SectionLabel>
        </div>

        <div className="z-10 max-w-4xl mx-auto text-center my-auto flex flex-col items-center gap-12 w-full">
          <div>
            <span className="font-mono text-xs opacity-50 uppercase tracking-widest block mb-4">
              PRIMARY NODE
            </span>
            <a
              href="mailto:hello@mrigank.dev"
              className="text-3xl md:text-6xl font-display font-thin tracking-wider hover:opacity-70 transition-opacity block break-all text-teal-dark"
            >
              HELLO@MRIGANK.DEV
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 font-display text-xs tracking-[0.2em] font-semibold mt-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover-underline uppercase">
              GITHUB
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover-underline uppercase">
              LINKEDIN
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover-underline uppercase">
              TWITTER
            </a>
          </div>
        </div>

        <div className="z-10">
          {/* Bottom spacing spacer */}
        </div>
      </section>

      {/* SECTION 3: LOCATION */}
      <section className="snap-section bg-sky text-teal-dark flex flex-col justify-between p-8 md:p-16">
        <div className="z-10 mt-24">
          <SectionLabel>HQ CO-ORDINATES</SectionLabel>
        </div>

        <div className="z-10 max-w-3xl ml-4 md:ml-12 my-auto flex flex-col gap-6">
          <span className="font-mono text-xs opacity-50 uppercase tracking-widest">
            GEOGRAPHIC TERMINAL
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-thin uppercase tracking-widest text-teal-dark">
            NEW DELHI, IND
          </h2>
          <p className="font-body text-xl md:text-2xl font-light leading-relaxed text-slate">
            Operating dynamically across the Indian subcontinent. Servicing global entities remotely.
          </p>
          <div className="flex flex-col gap-2 font-mono text-xs opacity-60 mt-4">
            <p>TIMEZONE: IST (GMT+5:30)</p>
            <p>COORDINATES: 28.6139° N, 77.2090° E</p>
          </div>
        </div>

        <div className="z-10">
          {/* Bottom spacing spacer */}
        </div>
      </section>

      {/* SECTION 4: FOOTER */}
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

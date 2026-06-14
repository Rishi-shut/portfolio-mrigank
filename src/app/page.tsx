'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Header } from '@/components/layout/Header';
import { Wordmark } from '@/components/ui/Wordmark';
import { ScrollControls } from '@/components/ui/ScrollControls';
import { Footer } from '@/components/layout/Footer';

// Dynamically import Three.js Globe scene (SSR safe)
const GlobeScene = dynamic(() => import('@/components/three/Globe'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#082236]/20 animate-pulse flex items-center justify-center text-white/20">LOADING CGI GLOBE...</div>,
});

export default function Home() {
  return (
    <div className="bg-[#eaf0f4]">
      {/* Fixed Header */}
      <Header variant="auto" />

      {/* SECTION 1: MOUNTAIN HERO (LIGHT THEME) */}
      <section className="scene scene--home flex flex-col justify-between p-8 md:p-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80"
            alt="Misty Mountain Range"
            fill
            className="object-cover opacity-95 filter saturate-[82%] contrast-[92%] brightness-[105%] grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#eaf0f4]/20 via-transparent to-[#eaf0f4]/10" />
        </div>

        {/* Spacer */}
        <div className="h-24" />

        {/* Central Logo Group */}
        <div className="z-10 flex items-center justify-start ml-4 md:ml-[var(--page-x)] my-auto text-reveal">
          <Wordmark className="w-20 h-20 md:w-[88px] md:h-[88px] text-blue-primary" dotColor="#0b5e7d" />
          <span className="w-[1px] h-16 bg-blue-primary/45 mx-6 md:mx-[44px]" />
          <h1 className="text-4xl md:text-[70px] font-display font-light tracking-[0.32em] text-blue-primary leading-none">
            MONTFORT
          </h1>
        </div>

        {/* Bottom indicators */}
        <div className="z-10 flex justify-between items-center px-4 md:px-[var(--page-x)] mb-8">
          <span className="text-[14px] font-display tracking-[0.06em] text-blue-primary uppercase font-light">
            SCROLL DOWN TO DISCOVER
          </span>
          <button className="w-12 h-12 flex items-center justify-center rounded-full border border-blue-primary/18 text-blue-primary font-serif text-lg leading-none animate-pulse-wave">
            ~
          </button>
        </div>
      </section>

      {/* SECTION 2: BUSINESS DIVISIONS CLOUD TRANSITION (LIGHT THEME) */}
      <section className="scene bg-mist flex flex-col justify-between p-8 md:p-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=2000&q=80"
            alt="Misty clouds"
            fill
            className="object-cover opacity-20 filter grayscale"
          />
        </div>

        <div className="z-10 mt-[var(--nav-top)] text-center w-full">
          <span className="text-xs md:text-sm font-display tracking-[0.2em] text-blue-primary/60 uppercase font-semibold">
            DIFFERENT BUSINESS DIVISIONS
          </span>
        </div>

        <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto w-full my-auto px-4 md:px-[var(--page-x)]">
          {/* Numbers list */}
          <div className="flex flex-col gap-6 text-left border-l border-blue-primary/20 pl-6">
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 rounded-full border border-blue-primary/30 flex items-center justify-center font-mono text-[11px] text-blue-primary">01</span>
              <span className="text-[13px] font-display tracking-[0.1em] text-blue-primary uppercase">Trading</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 rounded-full border border-blue-primary/30 flex items-center justify-center font-mono text-[11px] text-blue-primary">02</span>
              <span className="text-[13px] font-display tracking-[0.1em] text-blue-primary uppercase">Capital</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-6 h-6 rounded-full border border-blue-primary/30 flex items-center justify-center font-mono text-[11px] text-blue-primary">03</span>
              <span className="text-[13px] font-display tracking-[0.1em] text-blue-primary uppercase">Maritime</span>
            </div>
          </div>

          {/* Core Copy */}
          <div className="text-left flex flex-col justify-center">
            <p className="font-display text-lg md:text-2xl font-light leading-relaxed text-blue-muted">
              Operating across key institutional sectors of global energy trading, asset investment, and maritime supply chains. Delivering value through responsive logistics.
            </p>
          </div>
        </div>

        <div className="h-12" />
      </section>

      {/* SECTION 3: GLOBAL OFFICES EARTH (DARK THEME) */}
      <section className="scene scene--dark bg-navy-black flex flex-col justify-between p-8 md:p-16">
        {/* Globe backdrop */}
        <div className="absolute inset-0 z-0 opacity-70">
          <GlobeScene />
        </div>

        <div className="z-10 mt-[var(--nav-top)] px-4 md:px-[var(--page-x)]">
          <span className="text-xs md:text-sm font-display tracking-[0.2em] text-white/40 uppercase font-semibold">
            GLOBAL REACH
          </span>
        </div>

        <div className="z-10 max-w-5xl mx-auto w-full my-auto px-4 md:px-[var(--page-x)] text-center">
          <h2 className="text-white text-3xl md:text-[56px] font-display font-light uppercase tracking-[0.15em] leading-[1.42]">
            ESTABLISHED IN THE WORLD&apos;S<br />
            MAJOR TRADE HUBS AND<br />
            FINANCIAL MARKETS WITH OVER 15<br />
            GLOBAL OFFICES, WE CONNECT<br />
            AND SERVE BOTH EMERGING AND<br />
            MATURE MARKETS WORLDWIDE.
          </h2>
        </div>

        {/* Map Label Overlay Dots */}
        <div className="absolute left-[30%] top-[40%] z-10 flex items-center gap-3 hidden md:flex">
          <div className="w-3.5 h-3.5 rounded-full bg-white animate-ping absolute" />
          <div className="w-3.5 h-3.5 rounded-full bg-white" />
          <span className="text-[13px] font-display text-white tracking-widest font-light uppercase">GENEVA</span>
        </div>
        <div className="absolute left-[55%] top-[55%] z-10 flex items-center gap-3 hidden md:flex">
          <div className="w-3.5 h-3.5 rounded-full bg-white" />
          <span className="text-[13px] font-display text-white tracking-widest font-light uppercase">DUBAI</span>
        </div>
        <div className="absolute left-[78%] top-[68%] z-10 flex items-center gap-3 hidden md:flex">
          <div className="w-3.5 h-3.5 rounded-full bg-white" />
          <span className="text-[13px] font-display text-white tracking-widest font-light uppercase">SINGAPORE</span>
        </div>

        <div className="h-12" />
      </section>

      {/* SECTION 4: CORPORATE RESPONSIBILITY / ESG FOREST (DARK THEME) */}
      <section className="scene scene--dark bg-[#123d42] flex flex-col justify-between p-8 md:p-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80"
            alt="Forest Blur"
            fill
            className="object-cover opacity-35 filter saturate-[92%] contrast-[90%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123d42]/70 via-transparent to-[#123d42]/60" />
        </div>

        {/* Top photo strip overlay */}
        <div className="absolute left-[var(--page-x)] right-[var(--page-x)] top-0 h-[164px] grid grid-cols-4 gap-2 overflow-hidden rounded-b-[6px] opacity-80 z-25 hidden md:grid">
          {[
            'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=400&q=80',
          ].map((url, i) => (
            <div key={i} className="relative w-full h-full border-r border-white/10">
              <Image src={url} alt="ESG thumbnail" fill className="object-cover filter grayscale contrast-125" />
            </div>
          ))}
        </div>

        <div className="h-48" />

        {/* Content Block */}
        <div className="z-10 max-w-4xl mx-auto md:ml-[48%] my-auto px-4 text-left">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            ALLEVIATING POVERTY
          </h3>
          <div className="w-[176px] h-[2px] bg-white/80 mt-[36px] mb-[52px]" />
          <p className="font-display text-xl md:text-[27px] font-light leading-[1.55] tracking-[0.035em] text-white">
            Montfort prioritizes global corporate responsibility, liaising with humanitarian partners to provide resources and support communities in mature and emerging markets.
          </p>

          {/* NGO Logos Row */}
          <div className="flex flex-wrap items-center gap-12 mt-12 filter brightness-0 invert opacity-95">
            <span className="font-display text-[15px] tracking-[0.2em] font-light">[ MERCY SHIPS ]</span>
            <span className="font-display text-[15px] tracking-[0.2em] font-light">[ RED CROSS ]</span>
            <span className="font-display text-[15px] tracking-[0.2em] font-light">[ MERCY CORPS ]</span>
          </div>
        </div>

        <div className="h-12" />
      </section>

      {/* SECTION 5: FOOTER (LIGHT THEME) */}
      <Footer />

      {/* Scrolling controls floating to the right */}
      <ScrollControls />
    </div>
  );
}

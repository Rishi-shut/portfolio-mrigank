'use client';

import Link from 'next/link';
import { Wordmark } from '@/components/ui/Wordmark';

export function Footer() {
  return (
    <footer className="footer bg-paper text-text-dark w-full px-8 md:px-[var(--page-x)] pt-[180px] pb-[46px] z-10 relative">
      <div className="footer__grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-[130px] min-h-[520px]">
        {/* Column 1: Institutional Directory */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Link href="/" className="font-display text-[15px] font-medium tracking-[0.055em] hover:opacity-75 transition-opacity">MONTFORT GROUP</Link>
            <Link href="/trading" className="font-display text-[15px] font-medium tracking-[0.055em] hover:opacity-75 transition-opacity">MONTFORT TRADING</Link>
            <Link href="/capital" className="font-display text-[15px] font-medium tracking-[0.055em] hover:opacity-75 transition-opacity">MONTFORT CAPITAL</Link>
            <Link href="/maritime" className="font-display text-[15px] font-medium tracking-[0.055em] hover:opacity-75 transition-opacity">MONTFORT MARITIME</Link>
            <Link href="/fort-energy" className="font-display text-[15px] font-medium tracking-[0.055em] hover:opacity-75 transition-opacity">FORT ENERGY</Link>
          </div>
          <div className="flex flex-col gap-2 opacity-60 mt-4">
            <Link href="#contact" className="font-display text-[13px] tracking-[0.055em] hover:opacity-100 transition-opacity">CONTACT</Link>
            <Link href="#esg" className="font-display text-[13px] tracking-[0.055em] hover:opacity-100 transition-opacity">ESG</Link>
            <Link href="#privacy" className="font-display text-[13px] tracking-[0.055em] hover:opacity-100 transition-opacity">PRIVACY POLICY</Link>
            <Link href="#terms" className="font-display text-[13px] tracking-[0.055em] hover:opacity-100 transition-opacity">TERMS OF USE</Link>
          </div>
        </div>

        {/* Column 2: Geneva Office */}
        <div>
          <h3 className="footer__city font-display text-[26px] font-light tracking-[0.08em] uppercase mb-[42px]">
            GENEVA
          </h3>
          <p className="font-display text-[15px] leading-[1.6] opacity-75">
            SWITZERLAND<br />
            3rd & 4th floor<br />
            Rue du Mont-Blanc 14<br />
            1201 Geneva, Switzerland<br />
            P : +41 227415900<br />
            <a href="mailto:gva.reception@mont-fort.com" className="hover:underline">gva.reception@mont-fort.com</a>
          </p>
        </div>

        {/* Column 3: Dubai Office */}
        <div>
          <h3 className="footer__city font-display text-[26px] font-light tracking-[0.08em] uppercase mb-[42px]">
            DUBAI
          </h3>
          <p className="font-display text-[15px] leading-[1.6] opacity-75">
            UAE<br />
            1104 ICD Brookfield Place<br />
            Dubai International Financial Centre<br />
            Dubai, United Arab Emirates<br />
            P : +971 45914032<br />
            <a href="mailto:uae.reception@mont-fort.com" className="hover:underline">uae.reception@mont-fort.com</a>
          </p>
        </div>

        {/* Column 4: Singapore Office */}
        <div>
          <h3 className="footer__city font-display text-[26px] font-light tracking-[0.08em] uppercase mb-[42px]">
            SINGAPORE
          </h3>
          <p className="font-display text-[15px] leading-[1.6] opacity-75">
            0804 Marina One East Tower<br />
            7 Straits View<br />
            018936, Singapore<br />
            P : +65 3105 1583<br />
            <a href="mailto:sing.reception@mont-fort.com" className="hover:underline">sing.reception@mont-fort.com</a>
          </p>
        </div>
      </div>

      <div className="footer__bottom border-t border-text-dark/14 pt-[48px] mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-text-dark">
          <Wordmark className="w-10 h-10" />
          <span className="font-display text-sm tracking-[0.2em] font-light uppercase">MONTFORT GROUP</span>
        </div>
        <p className="font-display text-[13px] opacity-65">
          © {new Date().getFullYear()} | Montfort - All rights reserved
        </p>
      </div>
    </footer>
  );
}

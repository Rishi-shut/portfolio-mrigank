'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-teal-dark py-16 px-6 md:px-16 w-full z-10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-left">
        {/* Column 1: Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] font-display tracking-[0.25em] text-teal-dark/40 font-semibold uppercase">
            NAVIGATION
          </h4>
          <div className="flex flex-col gap-2 font-display text-xs tracking-wider font-light">
            <Link href="/" className="hover:text-teal-dark/60 transition-colors">HOME</Link>
            <Link href="/work" className="hover:text-teal-dark/60 transition-colors">WORK</Link>
            <Link href="/about" className="hover:text-teal-dark/60 transition-colors">ABOUT</Link>
            <Link href="/services" className="hover:text-teal-dark/60 transition-colors">SERVICES</Link>
            <Link href="/contact" className="hover:text-teal-dark/60 transition-colors">CONTACT</Link>
          </div>
        </div>

        {/* Column 2: Location */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] font-display tracking-[0.25em] text-teal-dark/40 font-semibold uppercase">
            LOCATION
          </h4>
          <div>
            <h5 className="font-display font-thin text-xl tracking-widest text-teal-dark mb-2">
              NEW DELHI
            </h5>
            <p className="text-xs opacity-60 leading-relaxed font-light">
              NCR, India<br />
              Timezone: GMT+5:30 (IST)<br />
              Open to remote operations worldwide.
            </p>
          </div>
        </div>

        {/* Column 3: Digital Channels */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] font-display tracking-[0.25em] text-teal-dark/40 font-semibold uppercase">
            CONNECT
          </h4>
          <div className="flex flex-col gap-2 font-display text-xs tracking-wider font-light">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-dark/60 transition-colors">GITHUB</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-dark/60 transition-colors">LINKEDIN</a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-dark/60 transition-colors">TWITTER</a>
            <a href="mailto:hello@mrigank.dev" className="hover:text-teal-dark/60 transition-colors">EMAIL</a>
          </div>
        </div>

        {/* Column 4: Focus / Architecture */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] font-display tracking-[0.25em] text-teal-dark/40 font-semibold uppercase">
            ARCHITECTURE
          </h4>
          <div>
            <h5 className="font-display font-thin text-xl tracking-widest text-teal-dark mb-2">
              STACK
            </h5>
            <p className="text-xs opacity-60 leading-relaxed font-light">
              Next.js 16 (App Router)<br />
              Three.js / React Three Fiber<br />
              Tailwind CSS v4 & PostCSS<br />
              Framer Motion & GSAP
            </p>
          </div>
        </div>
      </div>

      <hr className="my-12 border-teal-dark/10" />

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-display tracking-widest text-teal-dark/50">
        <span className="font-light">MRIGANK SHUT</span>
        <span className="font-light">© {currentYear} | ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
}

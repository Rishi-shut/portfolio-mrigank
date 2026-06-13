'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { name: 'HOME', href: '/' },
  { name: 'WORK', href: '/work' },
  { name: 'ABOUT', href: '/about' },
  { name: 'SERVICES', href: '/services' },
  { name: 'CONTACT', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close menu when pathname changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if active or sub-active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-16 ${
          isScrolled ? 'bg-black/10 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left Cluster: Brand / Section Links */}
          <div className="flex items-center gap-12">
            {/* Logo / Brand Name */}
            <Link
              href="/"
              className="text-white text-xs font-display tracking-[0.3em] font-light hover:opacity-85 transition-opacity"
            >
              MRIGANK
            </Link>

            {/* Desktop Section Links */}
            <div className="hidden md:flex items-center gap-8">
              {LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-[10px] font-display tracking-[0.2em] transition-all duration-300 relative py-2 ${
                      active
                        ? 'text-white font-medium opacity-100 nav-link-active'
                        : 'text-white/40 hover:text-white hover:opacity-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Cluster: Utilities */}
          <div className="flex items-center gap-6 text-white text-[10px] font-display tracking-[0.2em]">
            {/* News Counter Badge */}
            <div className="hidden sm:flex items-center gap-2">
              <span className="opacity-40">INDEX</span>
              <span className="bg-white text-black px-1.5 py-0.5 rounded-full font-mono text-[9px] font-bold">
                v1.2
              </span>
            </div>

            {/* Menu Toggle Text Link */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 text-[10px] font-display tracking-[0.2em] text-white hover:opacity-80 transition-opacity cursor-pointer uppercase"
            >
              {menuOpen ? 'CLOSE' : 'MENU'}
              <span className="opacity-40 font-mono">• •</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mega Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-45 bg-[#050A10] flex flex-col justify-center px-8 md:px-24"
          >
            {/* Background grid lines for premium corporate look */}
            <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-5">
              <div className="border-r border-white/50 h-full" />
              <div className="border-r border-white/50 h-full" />
              <div className="border-r border-white/50 h-full" />
              <div className="h-full" />
            </div>

            <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 z-10">
              {/* Left Column: Huge vertical navigation links */}
              <div className="flex flex-col gap-6">
                <span className="text-white/30 text-[10px] tracking-[0.3em] font-display mb-4">
                  NAVIGATION INDEX
                </span>
                {LINKS.map((link, idx) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 + 0.1, duration: 0.5 }}
                    >
                      <Link
                        href={link.href}
                        className={`text-4xl md:text-6xl font-display font-thin tracking-wider block transition-colors ${
                          active ? 'text-teal-dark font-light' : 'text-white hover:text-white/60'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right Column: Narrative / Brand Statement */}
              <div className="flex flex-col justify-end text-left border-l border-white/10 pl-6 md:pl-12">
                <span className="text-white/30 text-[10px] tracking-[0.3em] font-display mb-4">
                  PORTFOLIO STATEMENT
                </span>
                <p className="font-serif text-xl md:text-2xl text-text-dark font-light leading-relaxed mb-8">
                  Creating cinematic digital worlds where premium corporate aesthetics meet creative frontend technology. Inspired by high-end design languages and technical excellence.
                </p>
                <div className="flex flex-col gap-2 font-mono text-[11px] text-white/50">
                  <p>DEVELOPER: MRIGANK SHUT</p>
                  <p>FOCUS: CREATIVE DEVELOPMENT & SYSTEM DESIGN</p>
                  <p>LOCATION: IND (GMT+5:30)</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

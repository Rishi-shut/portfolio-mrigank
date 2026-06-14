'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  variant?: 'glass' | 'transparent' | 'auto';
  isDarkTheme?: boolean;
}

const NAV_ITEMS = [
  { name: 'Montfort Group', href: '/' },
  { name: 'Montfort Trading', href: '/trading' },
  { name: 'Montfort Capital', href: '/capital' },
  { name: 'Montfort Maritime', href: '/maritime' },
  { name: 'Fort Energy', href: '/fort-energy' },
];

export function Header({ variant = 'auto', isDarkTheme = false }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Header pill behavior
  // On home hero: starts transparent. On scroll: becomes glass.
  // On sub-pages: could be glass or transparent depending on design.
  let headerClasses = 'site-header ';
  
  if (variant === 'glass' || (variant === 'auto' && isScrolled)) {
    headerClasses += 'site-header--glass text-blue-primary';
  } else if (variant === 'transparent') {
    headerClasses += `site-header--transparent ${isDarkTheme ? 'text-white' : 'text-blue-primary'}`;
  } else {
    // Default transparent before scroll
    headerClasses += `site-header--transparent ${isDarkTheme ? 'text-white' : 'text-blue-primary'}`;
  }

  return (
    <>
      <header className={`${headerClasses} fixed left-[var(--nav-x)] right-[var(--nav-x)] top-[var(--nav-top)] h-[var(--nav-height)] z-50 flex items-center justify-between px-10 md:px-[60px] transition-all duration-500`}>
        {/* Navigation Links */}
        <nav className="site-nav flex items-center gap-[34px] h-full">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`site-nav__link text-xs font-display tracking-[0.05em] uppercase transition-all duration-300 relative py-2 ${
                  active
                    ? 'is-active text-current font-medium'
                    : 'opacity-45 hover:opacity-100'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="site-actions flex items-center gap-[18px] text-[13px] uppercase font-display font-medium">
          <Link href="#news" className="hover:opacity-75 transition-opacity flex items-center gap-2">
            News
            <span className="news-badge">20</span>
          </Link>
          <button 
            onClick={() => setMenuOpen(true)}
            className="hover:opacity-75 transition-opacity cursor-pointer text-[13px] uppercase font-display font-medium bg-transparent border-0"
          >
            Menu
          </button>
          <button 
            onClick={() => setMenuOpen(true)}
            className="two-dot hover:opacity-75 transition-opacity" 
            aria-label="More options" 
          />
        </div>
      </header>

      {/* Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-[#000407] flex flex-col justify-between p-16 text-white"
          >
            {/* Grid overlay */}
            <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-[0.03]">
              <div className="border-r border-white h-full" />
              <div className="border-r border-white h-full" />
              <div className="border-r border-white h-full" />
              <div className="h-full" />
            </div>

            <div className="flex justify-between items-center z-10">
              <span className="text-[10px] font-display tracking-[0.3em] opacity-40">MONTFORT MENU INDEX</span>
              <button 
                onClick={() => setMenuOpen(false)}
                className="text-[10px] font-display tracking-[0.2em] opacity-60 hover:opacity-100 uppercase transition-opacity cursor-pointer bg-transparent border-0"
              >
                CLOSE [✕]
              </button>
            </div>

            <div className="max-w-4xl mx-auto w-full z-10 flex flex-col gap-6 my-auto text-left">
              {NAV_ITEMS.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 + 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-4xl md:text-6xl font-display font-light tracking-widest uppercase hover:text-blue-pale transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="z-10 flex flex-col md:flex-row justify-between text-[11px] font-mono opacity-40 gap-4">
              <span>MONTFORT GROUP OPERATIONAL DESK</span>
              <span>© {new Date().getFullYear()} MONTFORT | ALL RIGHTS RESERVED</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

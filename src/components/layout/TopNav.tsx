'use client';

import Link from 'next/link';

export function TopNav() {
  return (
    <nav className="top-nav">
      <Link href="/" className="top-nav-logo font-medium tracking-wider">
        MRIGANK
      </Link>
      <div className="top-nav-links">
        <Link href="/projects" className="top-nav-link">
          [ PROJECTS ]
        </Link>
        <Link href="/about" className="top-nav-link">
          [ ABOUT ]
        </Link>
        <Link href="/contact" className="top-nav-link">
          [ CONTACT ]
        </Link>
      </div>
    </nav>
  );
}

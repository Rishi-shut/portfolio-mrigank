import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { PageTransitionOverlay } from '@/components/ui/PageTransitionOverlay';

export const metadata: Metadata = {
  title: 'Mrigank Shut | Cinematic Portfolio',
  description: 'A cinematic, scroll-driven personal portfolio designed with premium corporate aesthetics, typography, and interactive 3D elements.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-display bg-space text-text-dark select-none">
        {/* Global Nav */}
        <Navbar />

        {/* Global Page Transitions */}
        <PageTransitionOverlay />

        {/* Global Custom Cursor */}
        <CustomCursor />

        {/* Page Content */}
        {children}

        {/* Aesthetic overlays */}
        <div className="grain-overlay" aria-hidden="true" />
        <div className="vignette-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}

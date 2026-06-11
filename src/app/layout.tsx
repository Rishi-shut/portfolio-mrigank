import './globals.css';
import type { Metadata } from 'next';
import { GrainOverlay } from '@/components/effects/GrainOverlay';
import { FloatingSearch } from '@/components/effects/FloatingSearch';

export const metadata: Metadata = {
  title: "Mrigank's Cinematic Portfolio",
  description: "A dark, high-contrast, editorial style portfolio showcasing design systems, frontend animation, and code structures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <div className="vignette" aria-hidden="true" />
        <GrainOverlay />
        <FloatingSearch />
      </body>
    </html>
  );
}

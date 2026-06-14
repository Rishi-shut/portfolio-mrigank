import './globals.css';
import type { Metadata } from 'next';
import { SmoothScrollProvider } from '@/components/effects/SmoothScrollProvider';
import { CursorRing } from '@/components/ui/CursorRing';
import { PageTransitionOverlay } from '@/components/ui/PageTransitionOverlay';

export const metadata: Metadata = {
  title: 'Montfort Group | Cinematic Corporate Website',
  description: 'Montfort Group is a global institutional energy trading, capital, and maritime company. Safely and responsibly delivering solutions worldwide.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-display bg-navy-black text-text-white select-none">
        <SmoothScrollProvider>
          {/* Global Page Transitions */}
          <PageTransitionOverlay />

          {/* Global Custom Cursor Ring */}
          <CursorRing />

          {/* Page Content */}
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

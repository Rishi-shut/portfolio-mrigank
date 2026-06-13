'use client';

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export function PageTransitionOverlay() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.55, 0, 1, 0.45] }}
        className="fixed inset-0 bg-black z-[9999] pointer-events-none"
      />
    </AnimatePresence>
  );
}

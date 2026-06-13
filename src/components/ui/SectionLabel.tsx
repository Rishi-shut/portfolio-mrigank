'use client';

import { motion } from 'framer-motion';

interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <motion.span
      initial={{ opacity: 0, letterSpacing: '0.6em' }}
      whileInView={{ opacity: 0.6, letterSpacing: '0.25em' }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="text-[11px] font-display uppercase font-semibold text-current block mb-4"
    >
      {children}
    </motion.span>
  );
}

'use client';

import Link from 'next/link';

interface BackButtonProps {
  position?: 'left' | 'right';
}

export function BackButton({ position = 'left' }: BackButtonProps) {
  const styles = position === 'right' 
    ? { left: 'auto', right: '60px' } 
    : { left: '60px', right: 'auto' };

  return (
    <Link 
      href="/" 
      className="back-button" 
      style={styles}
    >
      &larr; Back
    </Link>
  );
}

'use client';

import { motion } from 'framer-motion';

interface FlowerStackProps {
  colorState?: 'white' | 'pink' | 'blue' | 'orange';
}

export function FlowerStack({ colorState = 'white' }: FlowerStackProps) {
  // Map color state to file suffix or dynamic filter if needed
  const getFlowerImage = (baseColor: string) => {
    // If the color state is anything other than white, we use the custom pngs
    if (colorState === 'white') return '/assets/flowers/carnation-white.png';
    if (colorState === 'pink') return '/assets/flowers/carnation-pink.png';
    if (colorState === 'blue') return '/assets/flowers/carnation-blue.png';
    if (colorState === 'orange') return '/assets/flowers/carnation-orange.png';
    return '/assets/flowers/carnation-white.png';
  };

  return (
    <motion.div 
      className="flower-stack"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Floating animations on flowers */}
      <motion.img 
        src={getFlowerImage('white')} 
        alt="Carnation White"
        className="flower-1"
        animate={{ 
          y: [0, -8, 0],
          rotate: [9, 10, 9]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.img 
        src={getFlowerImage('pink')} 
        alt="Carnation Pink"
        className="flower-2"
        animate={{ 
          y: [0, 6, 0],
          rotate: [-8, -7, -8]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.img 
        src={getFlowerImage('orange')} 
        alt="Carnation Orange"
        className="flower-3"
        animate={{ 
          y: [0, -5, 0],
          rotate: [5, 4, 5]
        }}
        transition={{ 
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';

export function NetworkDome() {
  const nodes = [
    [7, 88], [16, 70], [27, 52], [41, 39], [55, 32], [70, 39], [83, 55], [94, 73],
    [25, 92], [40, 79], [55, 70], [71, 77], [86, 92],
    [35, 61], [50, 51], [64, 60],
  ];
  const lines = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],
    [1,8],[2,8],[2,9],[3,9],[3,13],[4,13],[4,14],[5,14],[5,15],[6,15],[6,10],[7,11],
    [8,9],[9,10],[10,11],[11,12],[13,14],[14,15],[9,14],[10,15],[8,13],[12,15]
  ];

  return (
    <svg 
      className="network-dome" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none" 
      aria-hidden="true"
    >
      {/* Animating the lines drawing in */}
      {lines.map(([a,b], i) => (
        <motion.line 
          key={`line-${i}`} 
          x1={nodes[a][0]} 
          y1={nodes[a][1]} 
          x2={nodes[b][0]} 
          y2={nodes[b][1]}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            delay: i * 0.05 + 1.2,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
        />
      ))}
      
      {/* Animating the node squares fading/scaling in */}
      {nodes.map(([x,y], i) => (
        <motion.rect 
          key={`node-${i}`} 
          x={x - 0.45} 
          y={y - 0.45} 
          width="0.9" 
          height="0.9"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: i * 0.08 + 0.8,
            duration: 0.5,
            ease: 'easeOut'
          }}
          style={{ transformOrigin: `${x}% ${y}%` }}
        />
      ))}
    </svg>
  );
}

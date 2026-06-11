'use client';

import { useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMemo, useRef } from 'react';

function StarsPrimitive({ count = 900 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - .5) * 18;
      arr[i * 3 + 1] = (Math.random() - .5) * 9;
      arr[i * 3 + 2] = (Math.random() - .5) * 8;
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.007;
    ref.current.rotation.x = Math.sin(clock.elapsedTime * .08) * .015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          args={[positions, 3]} 
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color="#ffffff"
        transparent
        opacity={0.72}
        sizeAttenuation
      />
    </points>
  );
}

export function StarField({ className = '' }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={className} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]}>
        <StarsPrimitive />
      </Canvas>
    </div>
  );
}

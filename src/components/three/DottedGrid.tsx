'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GridPointsProps {
  color?: string;
  count?: number;
}

function GridPoints({ color = '#0097d7', count = 40 }: GridPointsProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const spacing = 0.5;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * count * 3);
    let idx = 0;
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        arr[idx++] = (i - count / 2) * spacing; // X
        arr[idx++] = 0; // Y (height modulated by sine wave in render loop)
        arr[idx++] = (j - count / 2) * spacing; // Z
      }
    }
    return arr;
  }, [count, spacing]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const elapsed = clock.getElapsedTime();

    // Rotate grid floor slowly
    pointsRef.current.rotation.y = elapsed * 0.02;

    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position;
    if (posAttr) {
      let idx = 0;
      for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
          const x = (i - count / 2) * spacing;
          const z = (j - count / 2) * spacing;
          // Apply wave motion
          const wave = Math.sin(x * 0.3 + elapsed * 1.5) * Math.cos(z * 0.3 + elapsed * 1.2) * 0.18;
          posAttr.setY(idx, wave);
          idx++;
        }
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef} position={[0, -1.5, 0]} rotation={[0.4, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function DottedGrid({ color = '#0097d7' }: { color?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-[#000407]" />;
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 1.8, 6.5], fov: 55 }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <GridPoints color={color} />
      </Canvas>
    </div>
  );
}

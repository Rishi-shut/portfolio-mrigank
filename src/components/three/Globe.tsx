'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function GlobeMesh() {
  const globeRef = useRef<THREE.Points>(null);
  const cloudRef = useRef<THREE.Mesh>(null);

  // Generate dots distributed evenly on a sphere using Fibonacci lattice
  const count = 2500;
  const positions = useMemo(() => {
    const pts = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / count);
      const theta = Math.PI * (1 + 5 ** 0.5) * i;

      const r = 2.2;
      pts[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pts[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pts[i * 3 + 2] = r * Math.cos(phi);
    }
    return pts;
  }, [count]);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    
    if (globeRef.current) {
      globeRef.current.rotation.y = elapsed * 0.08;
      globeRef.current.rotation.x = Math.sin(elapsed * 0.05) * 0.05;
    }
    
    if (cloudRef.current) {
      cloudRef.current.rotation.y = elapsed * 0.12;
      cloudRef.current.rotation.x = -Math.cos(elapsed * 0.05) * 0.03;
    }
  });

  return (
    <group>
      {/* Glow / Atmosphere sphere */}
      <mesh>
        <sphereGeometry args={[2.35, 32, 32]} />
        <meshBasicMaterial
          color="#1E7CC8"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Main dot globe */}
      <points ref={globeRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.025}
          color="#2AABFF"
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>

      {/* Subtle outer wireframe ring representing cloud/orbit */}
      <mesh ref={cloudRef}>
        <sphereGeometry args={[2.5, 16, 16]} />
        <meshBasicMaterial
          color="#1E7CC8"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
    </group>
  );
}

export default function Globe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-full bg-navy/20 animate-pulse" />;
  }

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1.5} />
        <GlobeMesh />
      </Canvas>
    </div>
  );
}

'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SceneMeshProps {
  type: 'cylinder' | 'torus' | 'sphere';
}

function SceneMesh({ type }: SceneMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointCloudRef = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) - 0.5;
      mouse.current.y = (e.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    // Central Object continuous rotation
    if (meshRef.current) {
      meshRef.current.rotation.x = elapsed * 0.15;
      meshRef.current.rotation.y = elapsed * 0.2;
      
      // Hover parallax
      const targetX = mouse.current.x * 0.5;
      const targetY = -mouse.current.y * 0.5;
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
    }

    // Background point grid slow drift
    if (pointCloudRef.current) {
      pointCloudRef.current.rotation.y = elapsed * 0.02;
      pointCloudRef.current.rotation.z = Math.sin(elapsed * 0.05) * 0.02;
    }
  });

  // Background point grid positions
  const gridPositions = useRef(() => {
    const pts = [];
    const count = 400;
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 15;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 8 - 2;
      pts.push(x, y, z);
    }
    return new Float32Array(pts);
  }).current();

  return (
    <group>
      {/* Background Point Cloud */}
      <points ref={pointCloudRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[gridPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.015}
          color="#1E7CC8"
          transparent
          opacity={0.3}
          sizeAttenuation
        />
      </points>

      {/* Main Wireframe Mesh */}
      <mesh ref={meshRef}>
        {type === 'cylinder' && <cylinderGeometry args={[1, 1, 2.5, 12, 6, true]} />}
        {type === 'torus' && <torusGeometry args={[1.2, 0.4, 8, 24]} />}
        {type === 'sphere' && <sphereGeometry args={[1.4, 12, 12]} />}
        
        <meshBasicMaterial
          color="#1E7CC8"
          wireframe
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Glow Accent Mesh (slightly larger, lower opacity) */}
      {meshRef.current && (
        <mesh
          position={meshRef.current.position}
          rotation={meshRef.current.rotation}
        >
          {type === 'cylinder' && <cylinderGeometry args={[1.05, 1.05, 2.55, 12, 6, true]} />}
          {type === 'torus' && <torusGeometry args={[1.25, 0.42, 8, 24]} />}
          {type === 'sphere' && <sphereGeometry args={[1.45, 12, 12]} />}
          
          <meshBasicMaterial
            color="#2AABFF"
            wireframe
            transparent
            opacity={0.25}
          />
        </mesh>
      )}
    </group>
  );
}

interface WireframeSceneProps {
  type?: 'cylinder' | 'torus' | 'sphere';
}

export default function WireframeScene({ type = 'cylinder' }: WireframeSceneProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-space/20" />;
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 55 }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <WireframeMesh type={type} />
      </Canvas>
    </div>
  );
}

// Wrapper for R3F canvas error handling
function WireframeMesh({ type }: SceneMeshProps) {
  return <SceneMesh type={type} />;
}

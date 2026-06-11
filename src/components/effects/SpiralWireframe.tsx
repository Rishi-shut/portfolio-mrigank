'use client';

import { useEffect, useState, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SpiralMesh() {
  const group = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) - 0.5;
      mouse.current.y = (e.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const ringsAndLines = useMemo(() => {
    const output: THREE.Line[] = [];
    const ringCount = 46;
    const segments = 160;

    for (let i = 0; i < ringCount; i++) {
      const t = i / (ringCount - 1);
      const radiusX = THREE.MathUtils.lerp(0.7, 5.2, t);
      const radiusY = THREE.MathUtils.lerp(0.45, 3.2, t);
      const twist = t * Math.PI * 2.35;
      const z = -t * 5.5;
      const pts: number[] = [];

      for (let s = 0; s <= segments; s++) {
        const a = (s / segments) * Math.PI * 2;
        const wave = Math.sin(a * 3 + t * 8) * 0.035;
        const x = Math.cos(a + twist) * (radiusX + wave);
        const y = Math.sin(a) * (radiusY + wave);
        pts.push(x, y, z);
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
      
      const mat = new THREE.LineBasicMaterial({
        color: new THREE.Color("#a0a0a0"),
        transparent: true,
        opacity: THREE.MathUtils.lerp(0.12, 0.75, i / ringCount)
      });
      
      const line = new THREE.Line(geo, mat);
      output.push(line);
    }
    return output;
  }, []);

  // Animating color and rotation
  useFrame(({ clock }) => {
    if (!group.current) return;
    
    // Slow rotation
    group.current.rotation.z = clock.elapsedTime * 0.025;
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.12) * 0.06;

    // Mouse parallax (shift position opposite to mouse movement)
    const targetX = 1.25 - mouse.current.x * 0.6;
    const targetY = 0.2 - mouse.current.y * 0.6;
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetX, 0.05);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY, 0.05);

    // Slowly cycle HSL colors of children lines
    const time = clock.getElapsedTime();
    const hue = (time * 0.03) % 1.0;
    const color = new THREE.Color().setHSL(hue, 0.4, 0.65);

    group.current.children.forEach((child) => {
      // child is a primitive representing our THREE.Line
      if (child instanceof THREE.Line) {
        const mat = child.material as THREE.LineBasicMaterial;
        // Shift color towards the calculated color
        mat.color.lerp(color, 0.02);
      }
    });
  });

  return (
    <group ref={group} rotation={[0.08, -0.38, -0.05]} position={[1.25, 0.2, 0]}>
      {ringsAndLines.map((line, i) => (
        <primitive key={i} object={line} />
      ))}
    </group>
  );
}

export function SpiralWireframe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="home-spiral" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 8], fov: 42 }} dpr={[1, 1.8]}>
        <SpiralMesh />
      </Canvas>
    </div>
  );
}

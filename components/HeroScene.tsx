'use client';
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Module-level state — read each frame, no re-renders needed
const mouse = { x: 0, y: 0 };

function WireSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.005;
    ref.current.rotation.x += (mouse.y * 0.2 - ref.current.rotation.x) * 0.05;
  });
  return (
    <mesh ref={ref} position={[-7, 2.5, 0]}>
      <sphereGeometry args={[1.5, 18, 18]} />
      <meshBasicMaterial wireframe color="#A78BFA" transparent opacity={0.65} />
    </mesh>
  );
}

function WireTorus() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.z += 0.003;
    ref.current.rotation.y += 0.004;
    ref.current.rotation.x += (mouse.y * 0.12 - ref.current.rotation.x) * 0.03;
  });
  return (
    <mesh ref={ref} position={[8, -2.8, 0]} rotation={[0.3, 0.2, 0]}>
      <torusGeometry args={[1.4, 0.4, 10, 44]} />
      <meshBasicMaterial wireframe color="#67E8F9" transparent opacity={0.55} />
    </mesh>
  );
}

export default function HeroScene() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100vw',
        height: '100%',
        pointerEvents: 'none',
      }}
      camera={{ position: [0, 0, 9], fov: 80 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <WireSphere />
      <WireTorus />
    </Canvas>
  );
}

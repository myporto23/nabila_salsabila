import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Preload } from '@react-three/drei';
import FloatingParticles from './FloatingParticles';
import FloatingShapes from './FloatingShapes';

const HeroScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.6} color="#fdf2f8" />
        <pointLight position={[5, 5, 5]} intensity={1} color="#f9a8d4" />
        <pointLight position={[-5, 3, 3]} intensity={0.6} color="#c4b5fd" />
        <pointLight position={[0, -3, 5]} intensity={0.4} color="#fbcfe8" />
        <directionalLight
          position={[0, 10, 5]}
          intensity={0.5}
          color="#ffffff"
        />

        {/* 3D Elements */}
        <FloatingParticles count={60} />
        <FloatingShapes />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default HeroScene;

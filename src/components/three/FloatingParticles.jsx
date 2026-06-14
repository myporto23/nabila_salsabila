import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingParticles = ({ count = 80 }) => {
  const meshRef = useRef();

  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const colorPalette = [
      new THREE.Color('#f9a8d4'),
      new THREE.Color('#c4b5fd'),
      new THREE.Color('#fbcfe8'),
      new THREE.Color('#e9d5ff'),
      new THREE.Color('#fce7f3'),
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 0.08 + 0.02;
    }

    return { positions, colors, sizes };
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const x = positions[i * 3] + Math.sin(time * 0.3 + i * 0.5) * 0.3;
      const y = positions[i * 3 + 1] + Math.cos(time * 0.2 + i * 0.3) * 0.4;
      const z = positions[i * 3 + 2] + Math.sin(time * 0.1 + i * 0.7) * 0.2;

      dummy.position.set(x, y, z);
      dummy.scale.setScalar(sizes[i] * (1 + Math.sin(time + i) * 0.3));
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial
        color="#f9a8d4"
        emissive="#f472b6"
        emissiveIntensity={0.5}
        transparent
        opacity={0.7}
        roughness={0.3}
      />
    </instancedMesh>
  );
};

export default FloatingParticles;

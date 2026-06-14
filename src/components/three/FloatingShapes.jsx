import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const Shape = ({ geometry, position, rotation, scale, color, speed = 1 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    meshRef.current.rotation.x = rotation[0] + time * 0.1 * speed;
    meshRef.current.rotation.y = rotation[1] + time * 0.15 * speed;
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry}
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.15}
          roughness={0.1}
          metalness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
};

const FloatingShapes = () => {
  return (
    <group>
      <Shape
        geometry={<torusGeometry args={[1, 0.3, 16, 32]} />}
        position={[-5, 1, -6]}
        rotation={[0.5, 0.5, 0]}
        scale={0.8}
        color="#f472b6"
        speed={0.7}
      />
      <Shape
        geometry={<octahedronGeometry args={[1, 0]} />}
        position={[5, 2, -7]}
        rotation={[0, 0.3, 0]}
        scale={0.6}
        color="#c4b5fd"
        speed={0.5}
      />
      <Shape
        geometry={<icosahedronGeometry args={[1, 0]} />}
        position={[-4, -3, -5]}
        rotation={[0.2, 0, 0.5]}
        scale={0.5}
        color="#e9d5ff"
        speed={0.8}
      />
      <Shape
        geometry={<dodecahedronGeometry args={[1, 0]} />}
        position={[4, -2, -8]}
        rotation={[0.3, 0.7, 0]}
        scale={0.7}
        color="#fbcfe8"
        speed={0.6}
      />
      <Shape
        geometry={<torusKnotGeometry args={[0.8, 0.25, 64, 16]} />}
        position={[0, 4, -9]}
        rotation={[0, 0, 0]}
        scale={0.4}
        color="#f9a8d4"
        speed={0.4}
      />
    </group>
  );
};

export default FloatingShapes;

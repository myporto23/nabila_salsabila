import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';

const Sphere = ({ position, scale, speed = 1, color = '#f9a8d4' }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    meshRef.current.position.y =
      position[1] + Math.sin(time * speed * 0.5) * 0.3;
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.4}
          chromaticAberration={0.3}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.5}
          temporalDistortion={0.1}
          color={color}
          roughness={0}
          transmission={0.95}
          ior={1.5}
        />
      </mesh>
    </Float>
  );
};

const GlassSpheres = () => {
  return (
    <group>
      <Sphere position={[-4, 2, -3]} scale={0.6} speed={1.2} color="#f9a8d4" />
      <Sphere position={[4.5, -1, -4]} scale={0.8} speed={0.8} color="#c4b5fd" />
      <Sphere position={[-3, -2, -2]} scale={0.4} speed={1.5} color="#fce7f3" />
      <Sphere position={[3, 3, -5]} scale={0.5} speed={1} color="#e9d5ff" />
      <Sphere position={[0, -3, -3]} scale={0.35} speed={1.3} color="#fbcfe8" />
    </group>
  );
};

export default GlassSpheres;

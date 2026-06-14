import { useRef, useState, useCallback, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const SEGMENT_COUNT = 12;
const SEGMENT_LENGTH = 0.3;
const GRAVITY = -0.015;
const DAMPING = 0.97;
const MOUSE_INFLUENCE = 0.002;

const LanyardBadge = () => {
  const { viewport, pointer } = useThree();
  const [isDragging, setIsDragging] = useState(false);
  const dragPoint = useRef(null);
  const ropePoints = useRef([]);
  const velocities = useRef([]);
  const prevPointer = useRef({ x: 0, y: 0 });

  // Initialize rope segments
  useEffect(() => {
    const points = [];
    const vels = [];
    for (let i = 0; i < SEGMENT_COUNT; i++) {
      points.push(new THREE.Vector3(0, 2.5 - i * SEGMENT_LENGTH, 0));
      vels.push(new THREE.Vector3(0, 0, 0));
    }
    ropePoints.current = points;
    velocities.current = vels;
  }, []);

  const lineRef = useRef();
  const badgeGroupRef = useRef();

  const handlePointerDown = useCallback((e) => {
    e.stopPropagation();
    setIsDragging(true);
    dragPoint.current = SEGMENT_COUNT - 1;
    if (e.target) e.target.setPointerCapture?.(e.pointerId);
  }, []);

  const handlePointerUp = useCallback((e) => {
    setIsDragging(false);
    dragPoint.current = null;
    if (e.target) e.target.releasePointerCapture?.(e.pointerId);
  }, []);

  useFrame(() => {
    if (ropePoints.current.length === 0) return;

    const points = ropePoints.current;
    const vels = velocities.current;

    // Mouse influence
    const mouseX = pointer.x * viewport.width * 0.5;
    const mouseY = pointer.y * viewport.height * 0.5;
    const mouseDelta = {
      x: (pointer.x - prevPointer.current.x) * 2,
      y: (pointer.y - prevPointer.current.y) * 2,
    };
    prevPointer.current = { x: pointer.x, y: pointer.y };

    // Fix first point at the top
    points[0].set(0, 2.8, 0);

    // If dragging, move the badge
    if (isDragging && dragPoint.current !== null) {
      points[SEGMENT_COUNT - 1].x = mouseX * 0.6;
      points[SEGMENT_COUNT - 1].y = mouseY * 0.6;
    }

    // Apply physics
    for (let i = 1; i < SEGMENT_COUNT; i++) {
      if (isDragging && i === SEGMENT_COUNT - 1) continue;

      // Gravity
      vels[i].y += GRAVITY;

      // Mouse influence (subtle)
      vels[i].x += mouseDelta.x * MOUSE_INFLUENCE * (i / SEGMENT_COUNT);
      vels[i].y += mouseDelta.y * MOUSE_INFLUENCE * (i / SEGMENT_COUNT);

      // Damping
      vels[i].multiplyScalar(DAMPING);

      // Update position
      points[i].add(vels[i]);
    }

    // Distance constraints (maintain rope length)
    for (let iteration = 0; iteration < 5; iteration++) {
      for (let i = 0; i < SEGMENT_COUNT - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dz = p2.z - p1.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist > SEGMENT_LENGTH) {
          const diff = (dist - SEGMENT_LENGTH) / dist;

          if (i === 0) {
            // First point is fixed
            p2.x -= dx * diff;
            p2.y -= dy * diff;
            p2.z -= dz * diff;
          } else if (isDragging && i + 1 === SEGMENT_COUNT - 1) {
            p1.x += dx * diff;
            p1.y += dy * diff;
            p1.z += dz * diff;
          } else {
            p1.x += dx * diff * 0.5;
            p1.y += dy * diff * 0.5;
            p1.z += dz * diff * 0.5;
            p2.x -= dx * diff * 0.5;
            p2.y -= dy * diff * 0.5;
            p2.z -= dz * diff * 0.5;
          }
        }
      }
    }

    // Update rope visual (necklace chain)
    if (lineRef.current && points.length > 0) {
      // Create a curve from the points
      const curvePoints = points.map((p) => new THREE.Vector3(p.x, p.y, p.z));
      const curve = new THREE.CatmullRomCurve3(curvePoints);
      
      // Use a tube geometry but make it thinner to look like a chain
      const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.015, 8, false);
      lineRef.current.geometry.dispose();
      lineRef.current.geometry = tubeGeo;
    }

    // Update badge position & rotation
    if (badgeGroupRef.current && points.length >= 2) {
      const lastPoint = points[SEGMENT_COUNT - 1];
      const prevPoint = points[SEGMENT_COUNT - 2];

      // Adjust position slightly to hang naturally
      badgeGroupRef.current.position.set(lastPoint.x, lastPoint.y - 1.0, lastPoint.z);

      // Calculate rotation from rope direction
      const angle = Math.atan2(
        lastPoint.x - prevPoint.x,
        lastPoint.y - prevPoint.y
      );
      badgeGroupRef.current.rotation.z = -angle * 0.5;
      
      // Add slight twist based on movement
      badgeGroupRef.current.rotation.y = (lastPoint.x - prevPoint.x) * 2;
    }
  });

  return (
    <group>
      {/* Necklace Chain */}
      <mesh ref={lineRef}>
        <tubeGeometry args={[new THREE.CatmullRomCurve3([new THREE.Vector3(0, 2.8, 0), new THREE.Vector3(0, 0, 0)]), 128, 0.012, 4, false]} />
        <meshStandardMaterial 
          color="#fbbf24" // Gold color for necklace
          metalness={0.9} 
          roughness={0.1} 
          wireframe={true} // Add wireframe to simulate chain links slightly
        />
      </mesh>

      {/* Top Anchor (hidden or styled as a clasp) */}
      <mesh position={[0, 2.8, 0]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#fbbf24" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Badge Card Group */}
      <group
        ref={badgeGroupRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* Card background */}
        <RoundedBox args={[1.8, 2.6, 0.05]} radius={0.12} smoothness={4}>
          <meshPhysicalMaterial
            color="#ffffff"
            roughness={0.12}
            metalness={0.1}
            clearcoat={0.6}
            clearcoatRoughness={0.1}
            transparent
            opacity={0.95}
          />
        </RoundedBox>

        {/* Pendant Clasp */}
        <mesh position={[0, 1.35, 0.0]}>
          <torusGeometry args={[0.08, 0.02, 16, 32]} />
          <meshStandardMaterial color="#fbbf24" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* HTML content overlay */}
        <Html
          transform
          occlude
          position={[0, -0.05, 0.04]}
          style={{
            width: '180px',
            height: '260px',
            pointerEvents: isDragging ? 'none' : 'auto',
          }}
          distanceFactor={1.8}
        >
          <div
            style={{
              width: '180px',
              height: '260px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '8px',
              fontFamily: "'Inter', sans-serif",
              userSelect: 'none',
              cursor: 'grab',
            }}
            onPointerDown={(e) => e.stopPropagation()}
          >
            {/* Profile Photo */}
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f472b6, #c084fc)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                marginTop: '10px',
                border: '3px solid white',
                boxShadow: '0 4px 12px rgba(244,114,182,0.3)',
              }}
            >
              👩‍💻
            </div>

            {/* Name */}
            <h3
              style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#1e293b',
                margin: '8px 0 2px',
                textAlign: 'center',
              }}
            >
              Nabila Putri
            </h3>

            {/* Title */}
            <p
              style={{
                fontSize: '9px',
                color: '#ec4899',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                margin: '0 0 6px',
              }}
            >
              Software Developer
            </p>

            {/* Divider */}
            <div
              style={{
                width: '60%',
                height: '1px',
                background: 'linear-gradient(to right, transparent, #f9a8d4, transparent)',
                margin: '0 0 6px',
              }}
            />

            {/* Tech Stack */}
            <div
              style={{
                display: 'flex',
                gap: '4px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginBottom: '8px',
              }}
            >
              {['Laravel', 'PHP', 'React', 'Flutter', 'MySQL'].map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: '6px',
                    padding: '1px 4px',
                    borderRadius: '6px',
                    background: 'linear-gradient(135deg, #fdf2f8, #fce7f3)',
                    color: '#be185d',
                    fontWeight: '600',
                    border: '1px solid #fbcfe8',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* QR Code Design Element */}
            <div
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '6px',
                background: '#1e293b',
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gridTemplateRows: 'repeat(5, 1fr)',
                gap: '1px',
                padding: '3px',
              }}
            >
              {Array.from({ length: 25 }, (_, i) => (
                <div
                  key={i}
                  style={{
                    background: [0,1,4,5,9,12,15,19,20,21,24].includes(i)
                      ? '#ffffff'
                      : 'transparent',
                    borderRadius: '1px',
                  }}
                />
              ))}
            </div>
          </div>
        </Html>
      </group>
    </group>
  );
};

export default LanyardBadge;

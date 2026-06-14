import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const TiltCard = ({ children, className = '', intensity = 15, glare = true, ...props }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;

    setTransform({ rotateX, rotateY });
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX: transform.rotateX,
        rotateY: transform.rotateY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
      {glare && isHovered && (
        <div
          className="absolute inset-0 pointer-events-none z-20 rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;

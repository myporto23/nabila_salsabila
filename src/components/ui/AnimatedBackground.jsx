import { useEffect, useRef } from 'react';

const AnimatedBackground = ({ variant = 'default', className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (variant !== 'particles') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2,
      hue: Math.random() * 60 + 320,
    }));

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 75%, ${p.opacity})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 75%, ${p.opacity * 0.15})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [variant]);

  if (variant === 'particles') {
    return (
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      />
    );
  }

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 animate-gradient" />

      {/* Floating blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-3/4 -right-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-rose-200/25 rounded-full blur-3xl animate-blob animation-delay-4000" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-lavender/20 rounded-full blur-3xl animate-blob animation-delay-6000" />
    </div>
  );
};

export default AnimatedBackground;

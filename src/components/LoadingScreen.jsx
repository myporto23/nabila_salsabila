import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onComplete?.(), 600);
          }, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900/90 to-slate-900"
        >
          {/* Background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-pink-400/40"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                }}
                animate={{
                  y: [null, Math.random() * -200 - 100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 bg-clip-text text-transparent">
              Nabila
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center text-pink-200/60 mt-2 text-sm tracking-[0.3em] uppercase"
            >
              Software Developer
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <div className="mt-12 w-48 md:w-64">
            <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center text-pink-300/40 text-xs mt-3 tabular-nums"
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

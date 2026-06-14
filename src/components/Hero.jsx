import { motion } from 'framer-motion';
import HeroScene from './three/HeroScene';
import Lanyard from './three/Lanyard';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-100" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(251,207,232,0.4),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(196,181,253,0.3),_transparent_50%)]" />

      {/* Animated blobs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-rose-200/25 rounded-full blur-3xl animate-blob animation-delay-4000" />

      {/* 3D Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HeroScene />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-pink-100/80 text-pink-600 backdrop-blur-sm border border-pink-200/50 mb-6">
                ✨ Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4"
            >
              <span className="text-slate-800">Hi, I'm </span>
              <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg sm:text-xl text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {personalInfo.shortBio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-3.5 rounded-2xl text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/25 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500" />
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  View My Work
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3.5 rounded-2xl text-sm font-semibold text-slate-700 bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>

          {/* Right side - Lanyard 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:w-1/2 w-full h-[450px] sm:h-[500px] lg:h-[600px] relative"
          >
            <Lanyard
              position={[0, 0, 12]}
              gravity={[0, -40, 0]}
              frontImage={`${import.meta.env.BASE_URL}profile-nabila.jpg`}
              lanyardImage={`${import.meta.env.BASE_URL}lanyard-pink.png`}
              lanyardWidth={1.2}
              generateBadge={true}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-400 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-pink-300/50 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-pink-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

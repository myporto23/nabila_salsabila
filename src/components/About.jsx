import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { personalInfo, stats } from '../data/portfolioData';
import { SiReact } from 'react-icons/si';
import { FaRocket } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-pink-50/30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Get to Know Me" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left - 3D Workspace Illustration */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Code editor mockup */}
              <div className="absolute inset-4 rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-pink-500/10 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs text-white/40">portfolio.jsx</span>
                </div>
                {/* Code content */}
                <div className="p-4 font-mono text-xs leading-relaxed">
                  <p><span className="text-purple-400">const</span> <span className="text-pink-300">developer</span> <span className="text-white/60">=</span> <span className="text-white/60">{'{'}</span></p>
                  <p className="pl-4"><span className="text-pink-300">name</span><span className="text-white/60">:</span> <span className="text-emerald-300">"Nabila"</span><span className="text-white/60">,</span></p>
                  <p className="pl-4"><span className="text-pink-300">passion</span><span className="text-white/60">:</span> <span className="text-emerald-300">"Building dreams"</span><span className="text-white/60">,</span></p>
                  <p className="pl-4"><span className="text-pink-300">skills</span><span className="text-white/60">:</span> <span className="text-amber-300">[</span><span className="text-emerald-300">"Laravel"</span><span className="text-white/60">,</span></p>
                  <p className="pl-12"><span className="text-emerald-300">"React"</span><span className="text-white/60">,</span></p>
                  <p className="pl-12"><span className="text-emerald-300">"Flutter"</span><span className="text-amber-300">]</span><span className="text-white/60">,</span></p>
                  <p className="pl-4"><span className="text-pink-300">motto</span><span className="text-white/60">:</span> <span className="text-emerald-300">"Code with love 💖"</span></p>
                  <p><span className="text-white/60">{'}'}</span><span className="text-white/60">;</span></p>
                  <p className="mt-2"><span className="text-purple-400">export default</span> <span className="text-pink-300">developer</span><span className="text-white/60">;</span></p>
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-2 -right-2 w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg shadow-pink-500/30 flex items-center justify-center text-3xl text-white"
              >
                <SiReact />
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-2 -left-2 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 shadow-lg shadow-purple-500/30 flex items-center justify-center text-2xl text-white"
              >
                <FaRocket />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              A passionate developer who loves
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                {' '}creating beautiful things
              </span>
            </h3>

            <p className="text-slate-600 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or designing user interfaces that bring joy to people. I believe that great software is not just functional — it's an experience.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <GlassCard className="p-4 text-center group" hover>
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

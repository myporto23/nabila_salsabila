import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './ui/SectionHeading';
import { skills } from '../data/portfolioData';

const SkillBar = ({ name, level, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-slate-700">{name}</span>
        <span className="text-sm font-semibold text-pink-500">{level}%</span>
      </div>
      <div className="h-2 bg-pink-100/50 rounded-full overflow-hidden backdrop-blur-sm">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay * 0.1, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 blur-sm opacity-50" />
        </motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('backend');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = Object.entries(skills).map(([key, value]) => ({
    key,
    ...value,
  }));

  const activeSkills = skills[activeCategory]?.items || [];

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/30 via-white to-purple-50/30" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-pink-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My Skills" subtitle="What I Do" />

        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'text-white shadow-lg shadow-pink-500/20'
                    : 'text-slate-600 bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/70'
                }`}
              >
                {activeCategory === cat.key && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{cat.icon}</span>
                  <span className="hidden sm:inline">{cat.title}</span>
                </span>
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 gap-x-12 gap-y-6"
            >
              {activeSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-4 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/30 hover:bg-white/60 hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300 group">
                    <SkillBar
                      name={skill.name}
                      level={skill.level}
                      delay={index}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Decorative skill cloud */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {Object.values(skills)
              .flatMap((cat) => cat.items)
              .map((skill, i) => (
                <motion.span
                  key={skill.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-pink-50 to-purple-50 text-pink-600 border border-pink-100/50 backdrop-blur-sm cursor-default hover:shadow-md hover:shadow-pink-500/10 transition-shadow"
                >
                  {skill.name}
                </motion.span>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

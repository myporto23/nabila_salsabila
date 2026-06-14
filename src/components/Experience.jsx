import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './ui/SectionHeading';
import { experience } from '../data/portfolioData';

const ExperienceCard = ({ exp, index, isLeft }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex items-center gap-6 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      {/* Card */}
      <div className="flex-1">
        <div className="group relative p-6 rounded-2xl bg-white/50 backdrop-blur-xl border border-white/30 hover:bg-white/70 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-500">
          {/* Glow effect */}
          <div className="absolute -inset-px bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            {/* Period badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 mb-3">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {exp.period}
            </div>

            <h3 className="text-xl font-bold text-slate-800 group-hover:text-pink-600 transition-colors">
              {exp.role}
            </h3>
            <p className="text-sm font-medium text-pink-500 mt-1">{exp.company}</p>
            <p className="text-xs text-slate-400 mt-0.5">{exp.location}</p>

            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              {exp.description}
            </p>

            {/* Highlights */}
            <ul className="mt-4 space-y-2">
              {exp.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-2 text-sm text-slate-500"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex-shrink-0" />
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/30 via-white to-purple-50/50" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience" subtitle="My Journey" />

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-px">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full w-full bg-gradient-to-b from-pink-300 via-rose-300 to-purple-300 origin-top"
            />
          </div>

          {/* Experience cards */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative pl-20 lg:pl-0">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.3, type: 'spring', stiffness: 300 }}
                  className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 border-4 border-white shadow-lg shadow-pink-500/20 z-10"
                />

                {/* Pulse ring */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] } : {}}
                  transition={{ delay: index * 0.3, duration: 2, repeat: Infinity }}
                  className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-pink-400/30"
                />

                <ExperienceCard
                  exp={exp}
                  index={index}
                  isLeft={index % 2 === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

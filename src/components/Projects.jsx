import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';
import { projects } from '../data/portfolioData';
import { FiSmartphone, FiLayout, FiMonitor } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <TiltCard
        className="rounded-2xl overflow-hidden group cursor-pointer"
        intensity={8}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500">
          {/* Project Image */}
          <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl text-pink-300 opacity-50">
                {project.category === 'mobile' ? <FiSmartphone /> : project.category === 'frontend' ? <FiLayout /> : <FiMonitor />}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-400/20" />

            {/* Overlay on hover */}
            <motion.div
              initial={false}
              animate={{ opacity: isHovered ? 1 : 0 }}
              className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent flex items-end p-4"
            >
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/20 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </span>
                </a>
                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-pink-500/80 to-purple-500/80 backdrop-blur-sm border border-white/20 hover:from-pink-500 hover:to-purple-500 transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </span>
                  </a>
                )}
              </div>
            </motion.div>

            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/30">
                Featured
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="p-5">
            <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-pink-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-pink-50/80 text-pink-600 border border-pink-100/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full-Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'mobile', label: 'Mobile' },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 via-white to-pink-50/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My Projects" subtitle="What I've Built" />

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`relative px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                filter === f.key
                  ? 'text-white shadow-lg shadow-pink-500/20'
                  : 'text-slate-600 bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/70'
              }`}
            >
              {filter === f.key && (
                <motion.div
                  layoutId="activeProjectFilter"
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{f.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

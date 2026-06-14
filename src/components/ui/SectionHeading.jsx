import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, light = false, className = '' }) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 mb-4"
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-pink-400" />
        <span className="text-sm font-medium tracking-widest uppercase text-pink-400">
          {subtitle}
        </span>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-pink-400" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${
          light
            ? 'text-white'
            : 'bg-gradient-to-r from-slate-800 via-pink-600 to-purple-600 bg-clip-text text-transparent'
        }`}
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-pink-400 to-purple-500"
      />
    </div>
  );
};

export default SectionHeading;

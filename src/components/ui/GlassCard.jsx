import { motion } from 'framer-motion';

const GlassCard = ({
  children,
  className = '',
  blur = 'xl',
  opacity = 10,
  border = true,
  hover = true,
  glow = false,
  ...props
}) => {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
    '2xl': 'backdrop-blur-2xl',
  };

  return (
    <motion.div
      className={`
        relative rounded-2xl
        bg-white/[.${String(opacity).padStart(2, '0')}]
        ${blurClasses[blur] || 'backdrop-blur-xl'}
        ${border ? 'border border-white/20' : ''}
        ${hover ? 'transition-all duration-500 hover:bg-white/[.15] hover:shadow-lg hover:shadow-pink-500/10' : ''}
        ${glow ? 'shadow-lg shadow-pink-500/20' : ''}
        ${className}
      `}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {glow && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassCard;

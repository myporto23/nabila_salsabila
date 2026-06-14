import { motion } from 'framer-motion';
import { personalInfo, navLinks } from '../data/portfolioData';

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900 to-purple-900/80" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-pink-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent mb-3">
              Nabila<span className="text-pink-400">.</span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              {personalInfo.shortBio}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-sm text-slate-400 hover:text-pink-300 transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wider uppercase">Connect</h4>
            <div className="flex gap-3">
              {Object.entries(personalInfo.social).map(([platform, url]) => (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-pink-300 hover:bg-pink-500/10 hover:border-pink-500/20 transition-all duration-300"
                >
                  <span className="text-xs font-medium capitalize">{platform[0].toUpperCase()}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1">
            Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-pink-400"
            >
              ♥
            </motion.span>{' '}
            and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

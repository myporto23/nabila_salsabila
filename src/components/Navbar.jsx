import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/portfolioData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? 'py-2'
            : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 ${
              isScrolled
                ? 'bg-white/70 backdrop-blur-2xl shadow-lg shadow-pink-500/5 border border-white/30'
                : 'bg-white/30 backdrop-blur-xl border border-white/10'
            }`}
          >
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nabila<span className="text-pink-400">.</span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-pink-600'
                      : 'text-slate-600 hover:text-pink-500'
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-pink-100/60 rounded-xl"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-0.5 bg-slate-700 rounded-full origin-center"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  className="block w-6 h-0.5 bg-slate-700 rounded-full"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-0.5 bg-slate-700 rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-4 right-4 z-[99] bg-white/80 backdrop-blur-2xl rounded-2xl border border-white/30 shadow-xl shadow-pink-500/10 p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? 'bg-pink-100/60 text-pink-600'
                      : 'text-slate-600 hover:bg-pink-50/50 hover:text-pink-500'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

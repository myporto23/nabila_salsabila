import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './ui/SectionHeading';
import TiltCard from './ui/TiltCard';
import { certificates } from '../data/portfolioData';

const CertificateCard = ({ cert, index, onClick }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div
        className="relative h-56 cursor-pointer group"
        style={{ perspective: '1000px' }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        onClick={() => onClick(cert)}
      >
        <motion.div
          className="absolute inset-0"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-xl border border-white/30 p-6 flex flex-col items-center justify-center text-center"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Certificate icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-slate-800 mb-1 line-clamp-2">{cert.title}</h3>
            <p className="text-xs text-pink-500 font-medium">{cert.issuer}</p>
            <p className="text-xs text-slate-400 mt-1">{cert.date}</p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 p-6 flex flex-col items-center justify-center text-center text-white"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <p className="text-sm font-semibold mb-1">{cert.title}</p>
            <p className="text-xs text-pink-100 mb-3">Issued by {cert.issuer}</p>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm">
              Click to View
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-pink-50/30" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-pink-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Certificates" subtitle="My Achievements" />

        {/* Certificate Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              index={index}
              onClick={setSelectedCert}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-white/90 backdrop-blur-2xl rounded-3xl p-8 max-w-md w-full border border-white/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center mb-4 shadow-lg shadow-pink-500/30">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{selectedCert.title}</h3>
                <p className="text-pink-500 font-medium mb-1">{selectedCert.issuer}</p>
                <p className="text-sm text-slate-400 mb-6">{selectedCert.date}</p>

                <div className="flex gap-3 justify-center">
                  {selectedCert.credential !== '#' && (
                    <a
                      href={selectedCert.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-lg hover:shadow-pink-500/20 transition-all"
                    >
                      View Credential
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './ui/SectionHeading';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: personalInfo.location,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Status',
      value: personalInfo.availability,
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: personalInfo.social.github,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: personalInfo.social.linkedin,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: personalInfo.social.instagram,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: personalInfo.social.twitter,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/30 via-white to-purple-50/50" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get in Touch" subtitle="Contact Me" />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Let's work
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"> together</span>
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Have a project in mind or just want to say hello? I'd love to hear from you. 
              Feel free to reach out and I'll get back to you as soon as possible.
            </p>

            {/* Contact cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/70 hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">{info.label}</p>
                        <p className="text-sm font-semibold text-slate-700">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/30">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center text-pink-500">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">{info.label}</p>
                        <p className="text-sm font-semibold text-slate-700">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 300 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-11 h-11 rounded-xl bg-white/60 backdrop-blur-sm border border-white/30 flex items-center justify-center text-slate-500 hover:text-pink-500 hover:bg-pink-50 hover:border-pink-200/50 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-white/50 backdrop-blur-2xl border border-white/30 shadow-xl shadow-pink-500/5"
            >
              <div className="space-y-5">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="peer w-full px-4 py-3.5 rounded-xl bg-white/60 border border-white/40 text-slate-700 text-sm placeholder-transparent focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all"
                    placeholder="Your Name"
                  />
                  <label
                    htmlFor="contact-name"
                    className="absolute left-4 -top-2.5 text-xs font-medium text-pink-500 bg-white/80 px-1 rounded peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-pink-500 peer-focus:bg-white/80 transition-all duration-200"
                  >
                    Your Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="contact-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="peer w-full px-4 py-3.5 rounded-xl bg-white/60 border border-white/40 text-slate-700 text-sm placeholder-transparent focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all"
                    placeholder="Your Email"
                  />
                  <label
                    htmlFor="contact-email"
                    className="absolute left-4 -top-2.5 text-xs font-medium text-pink-500 bg-white/80 px-1 rounded peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-pink-500 peer-focus:bg-white/80 transition-all duration-200"
                  >
                    Your Email
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="peer w-full px-4 py-3.5 rounded-xl bg-white/60 border border-white/40 text-slate-700 text-sm placeholder-transparent focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all resize-none"
                    placeholder="Your Message"
                  />
                  <label
                    htmlFor="contact-message"
                    className="absolute left-4 -top-2.5 text-xs font-medium text-pink-500 bg-white/80 px-1 rounded peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-pink-500 peer-focus:bg-white/80 transition-all duration-200"
                  >
                    Your Message
                  </label>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-lg shadow-pink-500/20 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300 disabled:opacity-70 relative overflow-hidden"
                >
                  {isSending ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : isSent ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

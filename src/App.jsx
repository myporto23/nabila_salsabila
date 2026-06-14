import { useState, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnimatedBackground from './components/ui/AnimatedBackground';

// Lazy load sections for performance
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Certificates = lazy(() => import('./components/Certificates'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen bg-white overflow-x-hidden">
          <AnimatedBackground variant="particles" />
          <Navbar />

          <main>
            <Hero />
            <Suspense fallback={
              <div className="flex items-center justify-center py-20">
                <div className="w-8 h-8 border-2 border-pink-300 border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Certificates />
              <Contact />
              <Footer />
            </Suspense>
          </main>
        </div>
      )}
    </>
  );
}

export default App;

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const {
      animation = 'fadeUp',
      duration = 1,
      delay = 0,
      stagger = 0.1,
      start = 'top 85%',
      end = 'bottom 20%',
      children = false,
    } = options;

    const animations = {
      fadeUp: { y: 60, opacity: 0 },
      fadeDown: { y: -60, opacity: 0 },
      fadeLeft: { x: -60, opacity: 0 },
      fadeRight: { x: 60, opacity: 0 },
      fadeIn: { opacity: 0 },
      scaleUp: { scale: 0.8, opacity: 0 },
      rotateIn: { rotation: 10, opacity: 0, y: 30 },
    };

    const fromVars = animations[animation] || animations.fadeUp;
    const targets = children ? element.children : element;

    gsap.from(targets, {
      ...fromVars,
      duration,
      delay,
      stagger: children ? stagger : 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start,
        end,
        toggleActions: 'play none none none',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) trigger.kill();
      });
    };
  }, []);

  return ref;
};

export default useScrollAnimation;

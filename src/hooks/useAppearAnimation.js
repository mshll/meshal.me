import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export const useAppearAnimation = (
  timeline,
  index,
  delay = 0.15,
  animationConfig = {}
) => {
  const elRef = useRef();

  useGSAP(() => {
    if (timeline) {
      timeline.to(
        elRef.current,
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          ...animationConfig, // Override defaults with custom animation props if passed
        },
        index * delay
      );
    }
  }, [timeline, index]);

  return elRef;
};
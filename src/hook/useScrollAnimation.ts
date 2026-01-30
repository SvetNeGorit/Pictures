import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import type { IntersectionOptions } from 'react-intersection-observer';

export const useScrollAnimation = (options?: IntersectionOptions) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
    ...options,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return { ref, isVisible };
};
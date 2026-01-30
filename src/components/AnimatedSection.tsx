import type { ReactNode } from 'react';
import { useScrollAnimation } from '../hook/useScrollAnimation';
import './AnimatedSection.css';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  animationType?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'zoomIn';
}

const AnimatedSection = ({ 
  children, 
  delay = 0,
  animationType = 'fadeUp' 
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`animated-section ${animationType} ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
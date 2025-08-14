import React, { ReactNode, useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FadeBlurWrapperProps {
  children: ReactNode;
  blurAmount?: number;
  duration?: number;
  
}

const FadeBlurAnimation: React.FC<FadeBlurWrapperProps> = ({
  children,
  duration = 0.8,
  
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current; 

    if (!element) return; 

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 } 
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element); 
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className={`backdrop-blur-2xl`}
      initial={{ opacity: 0, backdropFilter: `blur(0px)` }}
      animate={isVisible ? { opacity: 1 } : {}}
      exit={{ opacity: 0, backdropFilter: `blur(0px)` }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

export default FadeBlurAnimation;

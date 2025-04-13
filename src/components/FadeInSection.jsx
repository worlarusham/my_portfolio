import React, { useEffect, useRef, useState } from 'react';

const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    }, {
      threshold: 0.1, // Trigger earlier for mobile
      rootMargin: '50px' // Add margin to trigger before element is fully in view
    });
    
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transform transition-all duration-500 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity' // Optimize performance
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;

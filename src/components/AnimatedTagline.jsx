import React, { useEffect, useState } from 'react';

const AnimatedTagline = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const taglines = [
    'frontend developer.',
    'music producer.',
    'creative developer.',
  ];

  useEffect(() => {
    // Delay the start of animation
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
    }, 2500); // Start after name animation (1000ms delay + ~1500ms for name animation)

    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    if (!isStarted) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % taglines.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [isStarted]);

  return (
    <p className={`text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-light transition-opacity duration-500 ${
      isVisible && isStarted ? 'opacity-100' : 'opacity-0'
    }`}>
      {taglines[current]}
    </p>
  );
};

export default AnimatedTagline;

import React, { useState, useEffect } from 'react';

const DigitalYear = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const finalYear = "2025";
  const chars = "0123456789";
  const [displayYear, setDisplayYear] = useState(finalYear);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimating) {
          startAnimation();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(document.getElementById('year-container'));
    return () => observer.disconnect();
  }, []);

  const startAnimation = () => {
    setIsAnimating(true);
    setDisplayYear("");
    let iterations = 0;

    const interval = setInterval(() => {
      setDisplayYear(finalYear
        .split("")
        .map((digit, index) => {
          if (index < iterations / 5) {
            return finalYear[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("")
      );

      iterations += 1;

      if (iterations >= finalYear.length * 5) {
        clearInterval(interval);
        setDisplayYear(finalYear);
        setIsAnimating(false);
      }
    }, 80);
  };

  return (
    <span id="year-container" className="inline-block w-[4ch] text-center">
      {displayYear}
    </span>
  );
};

export default DigitalYear;

import React, { memo, useEffect } from 'react';
import './Loader.css'; // Import the CSS for the ellipsis animation

const Loader = memo(({ onLoadingComplete }) => {
  useEffect(() => {
    // Detect user's device theme and update the body class
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateBodyClass = () => {
      document.body.classList.toggle('dark', mediaQuery.matches);
    };

    updateBodyClass(); // Set initial theme
    mediaQuery.addEventListener('change', updateBodyClass);

    return () => mediaQuery.removeEventListener('change', updateBodyClass);
  }, []);

  useEffect(() => {
    const timer = setTimeout(onLoadingComplete, 1500); // Simulate loading for 1.5 seconds
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-loader">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
});

export default Loader;

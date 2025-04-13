import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import catImg from '../assets/images/cat.png';

const NotFound = () => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const starsX = useTransform(mouseX, [-500, 500], [20, -20]);
  const starsY = useTransform(mouseY, [-500, 500], [20, -20]);

  const planetsX = useTransform(mouseX, [-500, 500], [8, -8]);
  const planetsY = useTransform(mouseY, [-500, 500], [8, -8]);

  const x = useMotionValue(100);
  const y = useMotionValue(100);
  const velocityX = useRef(0.6);
  const velocityY = useRef(0.6);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const padding = 60;
        setContainerSize({
          width: containerRef.current.offsetWidth - padding,
          height: containerRef.current.offsetHeight - padding,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let isAnimating = true;

    const updatePosition = () => {
      if (!isAnimating) return;

      const newX = x.get() + velocityX.current;
      const newY = y.get() + velocityY.current;

      const minX = 30;
      const minY = 30;
      const maxX = containerSize.width - 30;
      const maxY = containerSize.height - 30;

      if (newX <= minX || newX >= maxX) velocityX.current *= -1;
      if (newY <= minY || newY >= maxY) velocityY.current *= -1;

      x.set(Math.max(minX, Math.min(maxX, newX)));
      y.set(Math.max(minY, Math.min(maxY, newY)));

      requestAnimationFrame(updatePosition);
    };

    requestAnimationFrame(updatePosition);
    const timer = setTimeout(() => setShowMessage(true), 500);

    return () => {
      isAnimating = false;
      clearTimeout(timer);
    };
  }, [containerSize, x, y]);

  return (
    <div className="h-screen w-screen bg-[#0F172A] overflow-hidden relative" ref={containerRef}>
      <motion.div className="absolute inset-0" style={{ x: starsX, y: starsY }}>
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      <motion.div className="absolute inset-0" style={{ x: planetsX, y: planetsY }}>
        <div className="absolute top-[20%] left-[15%] text-8xl opacity-50">🪐</div>
        <div className="absolute bottom-[30%] right-[20%] text-6xl opacity-30">🌍</div>
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="mb-8">
          {"404".split("").map((num, i) => (
            <motion.span
              key={i}
              className="inline-block text-8xl md:text-9xl font-light text-white/90"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 1.5,
                delay: i * 0.15,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {num}
            </motion.span>
          ))}
        </div>

        <motion.img
          src={catImg}
          alt="Lost Cat"
          className="w-24 h-24 md:w-32 md:h-32 select-none"
          style={{
            position: 'relative',
            marginTop: '-2rem', // Adjust spacing to center between "404" and "lost in space"
            marginBottom: '-2rem',
          }}
          animate={{
            y: ['-10px', '10px', '-10px'], // Floating effect
            rotate: [0, 5, -5, 0], // Swing back and forth
          }}
          transition={{
            duration: 3, // Smooth and slower motion
            repeat: Infinity,
            ease: 'easeInOut', // Smooth easing for rotation
          }}
          draggable={false}
        />

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showMessage ? 1 : 0, y: showMessage ? 0 : 20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-2xl md:text-3xl text-white/90 mb-2">lost in space</h2>
          <p className="text-white/70 mb-8">the page you're looking for drifted into a black hole.</p>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/90 hover:text-white transition-all duration-300"
          >
            return to home base 🚀
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;

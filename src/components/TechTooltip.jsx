import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const TechTooltip = ({ name, description, color }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div 
      className="relative inline-block group cursor-pointer"
      initial="initial"
      animate="initial"
      whileHover="hover"
      tabIndex={0}
    >
      <motion.span
        className={`${color} text-base md:text-lg`}
        variants={{
          hover: { y: -2 }
        }}
        transition={{ duration: 0.2 }}
      >
        {name}
      </motion.span>

      <motion.div
        className={`pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-1 whitespace-nowrap px-2 py-0 rounded-md ${isMobile ? 'hidden' : ''}`}
        variants={{
          initial: { opacity: 0, y: -4 },
          hover: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-sm text-gray-600 dark:text-gray-400">
          — {description}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default TechTooltip;

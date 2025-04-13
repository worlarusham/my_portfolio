import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedTerminal = ({ loading }) => {
  const terminalRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    if (!loading) {
      const options = {
        strings: [
          'crafting minimal &amp; intuitive digital experiences with clean code and thoughtful design.'
        ],
        typeSpeed: window.innerWidth < 768 ? 30 : 40,
        startDelay: window.innerWidth < 768 ? 400 : 600,
        backSpeed: 0,
        cursorChar: '█',
        loop: false,
        contentType: 'html',
        showCursor: true,
        onComplete: (self) => {
          // Force cursor visibility to hidden after completion
          if (self.cursor) {
            self.cursor.style.display = 'none';
            self.cursor.style.visibility = 'hidden';
            self.cursor.style.opacity = '0';
            self.cursor.style.transition = 'opacity 500ms ease';
          }
        }
      };

      typedRef.current = new Typed(terminalRef.current, options);

      return () => {
        typedRef.current.destroy();
      };
    }
  }, [loading]);

  return (
    <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg font-light">
      <span ref={terminalRef} className="break-words" />
    </p>
  );
};

export default TypedTerminal;

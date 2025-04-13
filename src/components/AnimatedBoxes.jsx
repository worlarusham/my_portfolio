import React, { useState, useEffect } from 'react';
import pinkGIF from '../assets/images/heam.gif';
import blueGIF from '../assets/images/worlar.gif';  // Add back the import

const AnimatedBoxes = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Add resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Remove unused coordinates
  const coordinates = isMobile ? [] : [];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {isMobile ? (
        // Mobile SVG paths
        <>
          <div className="block opacity-0">  {/* Added opacity-0 here */}
            {/* Mobile SVG paths */}
            <svg className="absolute z-[9]" width="172" height="220" style={{ top: '-11px', left: '-8px' }}>
              <path 
                d="M0,0 H168 V167 H0 V0 Z M0,0 V167"
                fill="none" 
                stroke="#a2d2ff"
                strokeWidth="2"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray="600"
                className="animate-path-trace"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Right box */}
            <svg className="absolute z-[9]" width="172" height="220" style={{ top: '-11px', left: '160px' }}>
              <path 
                d="M0,0 H168 V167 H0 V0 Z M0,0 V167"
                fill="none" 
                stroke="#ffafcc"
                strokeWidth="2"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray="600"
                className="animate-path-trace"
                vectorEffect="non-scaling-stroke"
                style={{ animationDelay: '1s' }}
              />
            </svg>

            {/* Bottom wide box */}
            <svg className="absolute z-[9]" width="340" height="250" style={{ top: '156px', left: '-8px' }}>
              <path 
                d="M0,0 H336 V234 H0 V0 M0,234 L374,234"
                fill="none" 
                stroke="#cdb4db"
                strokeWidth="2"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray="1200"
                className="animate-path-trace"
                vectorEffect="non-scaling-stroke"
                style={{ animationDelay: '2s' }}
              />
            </svg>

            {/* Bottom third box */}
            <svg className="absolute z-[9]" width="340" height="100" style={{ top: '390px', left: '-8px' }}>
              <path 
                d="M0,0 H336 V89 H0 V0 M0,89 L374,89"
                fill="none" 
                stroke="#a2d2ff"
                strokeWidth="2"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray="1200"
                className="animate-path-trace"
                vectorEffect="non-scaling-stroke"
                style={{ animationDelay: '3s' }}
              />
            </svg>

            {/* Mobile coordinate markers */}
            {coordinates.map((coord, index) => (
              <div
                key={index}
                className="absolute w-3 h-3 bg-red-500 rounded-full z-30"
                style={{
                  left: `${coord.x}px`,
                  top: `${coord.y}px`,
                  opacity: coord.hidden ? 0 : 1
                }}
              >
                <span className="absolute left-4 -top-2 text-[11px] text-red-500 whitespace-nowrap bg-white/80 dark:bg-black/80 px-1 rounded">
                  {`${coord.label} (${coord.x}, ${coord.y})`}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile Cursors */}
          <>
            {/* Blue cursor - Mobile */}
            <div className="absolute w-6 h-6 animate-box-move-1-mobile z-[20]" 
                 style={{ 
                   top: '-8px', 
                   left: '-12px',
                   marginLeft: '0px',
                   marginTop: '-4px'
                 }}>
              <img src={pinkGIF} alt="cursor" className="w-full h-full object-contain" />
            </div>

            {/* Pink cursor - Mobile */}
            <div className="absolute w-6 h-6 animate-box-move-2-mobile z-[20]" 
                 style={{ 
                   top: '-8px', 
                   left: '-12px',
                   marginLeft: '0px',
                   marginTop: '-4px'
                 }}>
              <img src={blueGIF} alt="cursor" className="w-full h-full object-contain" />
            </div>
          </>
        </>
      ) : (
        // Desktop SVG paths
        <>
          <div className="block opacity-0">  {/* Added opacity-0 here */}
            {/* Desktop SVG paths */}
            <svg className="absolute z-[9]" width="400" height="170" style={{ top: '-12px', left: '-12px' }}>
              <rect 
                x="0" 
                y="0" 
                width="396" 
                height="163" 
                fill="none" 
                stroke="#a2d2ff"
                strokeWidth="2"
                strokeDasharray="1200"
                className="animate-path-trace"
              />
            </svg>

            <svg className="absolute z-[10]" width="400" height="170" style={{ top: '151px', left: '-12px' }}>
              <rect 
                x="0" 
                y="0" 
                width="396" 
                height="163" 
                fill="none" 
                stroke="#ffafcc"
                strokeWidth="2"
                strokeDasharray="1200"
                className="animate-path-trace"
                style={{ animationDelay: '1s' }}
              />
            </svg>

            <svg className="absolute z-[11]" width="400" height="240" style={{ top: '-12px', left: '384px' }}>
              <rect 
                x="0" 
                y="0" 
                width="396" 
                height="233" 
                fill="none" 
                stroke="#cdb4db"
                strokeWidth="2"
                strokeDasharray="1200"
                className="animate-path-trace"
                style={{ animationDelay: '2s' }}
              />
            </svg>

            <svg className="absolute z-[12]" width="400" height="124" style={{ top: '220px', left: '384px' }}>
              <rect 
                x="0" 
                y="0" 
                width="396" 
                height="94" 
                fill="none" 
                stroke="#a2d2ff"
                strokeWidth="2"
                strokeDasharray="1200"
                className="animate-path-trace"
                style={{ animationDelay: '3s' }}
              />
            </svg>

            {/* Desktop coordinate markers */}
            {coordinates.map((coord, index) => (
              <div
                key={index}
                className="absolute w-2 h-2 bg-red-500 rounded-full z-30"
                style={{
                  left: `${coord.x}px`,
                  top: `${coord.y}px`,
                  opacity: coord.hidden ? 0 : 1
                }}
              >
                <span className="absolute left-4 top-0 text-xs text-red-500 whitespace-nowrap">
                  {`${coord.label} (${coord.x}, ${coord.y})`}
                </span>
              </div>
            ))}
          </div>
          <div className="block"> {/* Removed opacity-0 from cursor container */}
            {/* Desktop Cursors */}
            <div className="absolute w-6 h-6 animate-box-move-1 z-[20]" 
                 style={{ 
                   top: '-12px', 
                   left: '-12px',
                   marginLeft: '0px',
                   marginTop: '0px'
                 }}>
              <img src={pinkGIF} alt="cursor" className="w-full h-full object-contain opacity-100" />
            </div>

            <div className="absolute w-6 h-6 animate-box-move-2 z-[21]" 
                 style={{ 
                   top: '-2px', 
                   left: '-2px',
                   marginLeft: '-10px',
                   marginTop: '-10px'
                 }}>
              <img src={blueGIF} alt="cursor" className="w-full h-full object-contain opacity-100" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AnimatedBoxes;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        primary: '#a2d2ff',
        purple: '#4F46E5', // More vibrant purple
        pinkLight: '#ffc8dd',
        pink: '#ffafcc',
        blueLight: '#bde0fe',
        blue: '#2563EB',   // Adjusted for better contrast
        softBg: '#BFECFF', // Light mode background
        textDark: '#1E293B', // Dark text for light mode
        textLight: '#F8FAFC', // Light text for dark mode
        darkBlue: '#639CD9',    // First slide dark mode
        darkPurple: '#8F79D6',  // Second slide dark mode
        darkPink: '#D97AA5',    // Third slide dark mode
        textPrimary: '#4A7C96', // New main text color
        softText: '#a2d2ff',

        // Dark mode colors (using CMYK relationship)
        darkBlueText: '#9CCEFF',  // Text (lighter version of #639CD9)
        darkPurpleText: '#B79DFF', // Text (lighter version of #8F79D6)
        darkPinkText: '#FFB4D1',  // Text (lighter version of #D97AA5)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        // Basic animations
        colorPulse: {
          '0%, 100%': { color: '#a2d2ff' },
          '50%': { color: '#ffc8dd' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'modal-in': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        // Remove unused keyframes
        'box-path-1': {
          '0%': { transform: 'translate(30px, -12px)' },        
          '4.38%': { transform: 'translate(384px, -12px)' },    
          '10.26%': { transform: 'translate(384px, 151px)' },   
          '16.15%': { transform: 'translate(-12px, 151px)' },   
          '22.03%': { transform: 'translate(-12px, 314px)' },   
          '27.91%': { transform: 'translate(384px, 314px)' },   
          '33.79%': { transform: 'translate(384px, 220px)' },   
          '39.68%': { transform: 'translate(780px, 220px)' },   
          '45.56%': { transform: 'translate(780px, 314px)' },   
          '51.44%': { transform: 'translate(384px, 314px)' },      
          '57.32%': { transform: 'translate(384px, 151px)' },   
          '63.21%': { transform: 'translate(384px, -12px)' },   
          '69.09%': { transform: 'translate(780px, -12px)' },   
          '74.97%': { transform: 'translate(780px, 220px)' },   
          '80.85%': { transform: 'translate(384px, 220px)' },   
          '86.74%': { transform: 'translate(384px, 151px)' },   
          '92.62%': { transform: 'translate(-12px, 151px)' },  
          '96.5%': { transform: 'translate(-12px, -12px)' },    // Back to Start
          '100%': { transform: 'translate(30px, -12px)' }       
        },

        'box-path-2': {
          '0%': { transform: 'translate(-12px, -12px)' },       
          '5.88%': { transform: 'translate(384px, -12px)' },    
          '11.76%': { transform: 'translate(384px, 151px)' },   
          '17.65%': { transform: 'translate(-12px, 151px)' },   
          '23.53%': { transform: 'translate(-12px, 314px)' },   
          '29.41%': { transform: 'translate(384px, 314px)' },   
          '35.29%': { transform: 'translate(384px, 220px)' },   
          '41.18%': { transform: 'translate(780px, 220px)' },   
          '47.06%': { transform: 'translate(780px, 314px)' },   
          '52.94%': { transform: 'translate(384px, 314px)' },      
          '58.82%': { transform: 'translate(384px, 151px)' },   
          '64.71%': { transform: 'translate(384px, -12px)' },   
          '70.59%': { transform: 'translate(780px, -12px)' },   
          '76.47%': { transform: 'translate(780px, 220px)' },   
          '82.35%': { transform: 'translate(384px, 220px)' },   
          '88.24%': { transform: 'translate(384px, 151px)' },   
          '94.12%': { transform: 'translate(-12px, 151px)' },   
          '100%': { transform: 'translate(-12px, -12px)' }      
        },

                'box-path-1-mobile': {
        '0%': { transform: 'translate(20px, -11px)' },      // B
        '3.5%': { transform: 'translate(160px, -11px)' },   // C
        '8.5%': { transform: 'translate(160px, 156px)' },   // E
        '13.5%': { transform: 'translate(-8px, 156px)' },   // F
        '18.5%': { transform: 'translate(-8px, 390px)' },   // G
        '23.5%': { transform: 'translate(328px, 390px)' },  // H
        '28.5%': { transform: 'translate(328px, 156px)' },  // I
        '33.5%': { transform: 'translate(160px, 156px)' },  // E
        '38.5%': { transform: 'translate(160px, -11px)' },  // C
        '43.5%': { transform: 'translate(328px, -11px)' },  // D
        '48.5%': { transform: 'translate(328px, 156px)' },  // I
        '53.5%': { transform: 'translate(328px, 390px)' },  // H
        '58.5%': { transform: 'translate(-8px, 390px)' },   // G
        '63.5%': { transform: 'translate(-8px, 479px)' },   // K
        '68.5%': { transform: 'translate(328px, 479px)' },  // J
        '73.5%': { transform: 'translate(328px, 390px)' },  // H
        '78.5%': { transform: 'translate(328px, 156px)' },  // I
        '83.5%': { transform: 'translate(160px, 156px)' },  // E
        '88.5%': { transform: 'translate(-8px, 156px)' },   // F
        '93.5%': { transform: 'translate(-8px, -11px)' },   // A
        '100%': { transform: 'translate(20px, -11px)' }     // B
        },

        'box-path-2-mobile': {
          '0%': { transform: 'translate(30px, -12px)' },        
          '25%': { transform: 'translate(94px, -12px)' },     // Reduced right side width
          '50%': { transform: 'translate(94px, 49px)' },      // Adjusted height for mobile
          '75%': { transform: 'translate(-12px, 49px)' },    
          '100%': { transform: 'translate(30px, -12px)' }     
        },

        'box-path-2-mobile': {
          '0%': { transform: 'translate(-8px, -11px)' },     // A start
          '5%': { transform: 'translate(160px, -11px)' },    // C
          '10%': { transform: 'translate(160px, 156px)' },   // E
          '15%': { transform: 'translate(-8px, 156px)' },    // F
          '20%': { transform: 'translate(-8px, 390px)' },    // G
          '25%': { transform: 'translate(328px, 390px)' },   // H
          '30%': { transform: 'translate(328px, 156px)' },   // I
          '35%': { transform: 'translate(160px, 156px)' },   // E
          '40%': { transform: 'translate(160px, -11px)' },   // C
          '45%': { transform: 'translate(328px, -11px)' },   // D
          '50%': { transform: 'translate(328px, 156px)' },   // I
          '55%': { transform: 'translate(328px, 390px)' },   // H
          '60%': { transform: 'translate(-8px, 390px)' },    // G
          '65%': { transform: 'translate(-8px, 479px)' },    // K
          '70%': { transform: 'translate(328px, 479px)' },   // J
          '75%': { transform: 'translate(328px, 390px)' },   // H
          '80%': { transform: 'translate(328px, 156px)' },   // I
          '85%': { transform: 'translate(160px, 156px)' },   // E
          '90%': { transform: 'translate(-8px, 156px)' },    // F
          '100%': { transform: 'translate(-8px, -11px)' }    // A end
        }
      },
      animation: {
        'color-pulse': 'colorPulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.2s ease-out forwards',
        'modal-in': 'modal-in 0.3s ease-out forwards',
        // Remove unused animations
        'box-move-1': 'box-path-1 30s linear infinite',     // Match duration with pink cursor
        'box-move-2': 'box-path-2 30s linear infinite',     // Make both animations same duration
        'box-move-1-mobile': 'box-path-1-mobile 30s linear infinite',
        'box-move-2-mobile': 'box-path-2-mobile 30s linear infinite'  // Changed from 60s to 30s
      }
    }
  },
  darkMode: 'media',
  plugins: []
};

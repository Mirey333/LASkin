/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Luxuriöse LA Skin Farbpalette
        primary: {
          50: '#fdf7f0',
          100: '#faebd7',
          200: '#f5d5ae',
          300: '#efba7d',
          400: '#e8994a',
          500: '#e17d28',
          600: '#d2661e',
          700: '#ae4f1b',
          800: '#8b401d',
          900: '#71351a',
        },
        luxury: {
          50: '#f8f6f3',
          100: '#f1ece6',
          200: '#e2d8ce',
          300: '#d0bfad',
          400: '#ba9f8a',
          500: '#a88571',
          600: '#9b7462',
          700: '#806053',
          800: '#6a5047',
          900: '#57443c',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        rose: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        }
      },
      fontFamily: {
        'luxury': ['Playfair Display', 'serif'],
        'modern': ['Inter', 'sans-serif'],
        'elegant': ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(236, 72, 153, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(236, 72, 153, 0.8)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #fdf7f0 0%, #f1ece6 100%)',
        'gold-gradient': 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
        'rose-gradient': 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        'luxury': '0 25px 50px -12px rgba(168, 133, 113, 0.25)',
        'gold': '0 25px 50px -12px rgba(251, 191, 36, 0.25)',
      }
    },
  },
  plugins: [],
} 
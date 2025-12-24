/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        pistle: {
          navy: '#1A1B3A', // Deep Navy
          gold: '#D4AF37', // Gold/Brass
          white: '#FFFFFF',
        },
        // Keeping legacy safely maps for now or replacing usage
        primary: {
          900: '#1A1B3A', // Mapping old primary-900 to new Brand Navy
          800: '#23244a',
          700: '#2c2d5c',
        },
        accent: {
          500: '#D4AF37', // Mapping old accent to new Brand Gold
          400: '#e5c158',
          600: '#b08d26',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #1A1B3A 0deg, #2a2c5a 180deg, #1A1B3A 360deg)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}

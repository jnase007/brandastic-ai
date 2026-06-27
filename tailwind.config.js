/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Official Brandastic brand palette
        navy: {
          DEFAULT: '#191F24', // Brandastic Black
          light: '#2A3138',
          deep: '#0F1316',
        },
        teal: {
          DEFAULT: '#0644ED', // Brandastic Deep Blue (primary accent)
          dark: '#0436C2',
          soft: '#40B4E5',    // Brandastic Light Blue
        },
        brand: {
          deep: '#0644ED',
          light: '#40B4E5',
          violet: '#CC22FF',
          black: '#191F24',
        },
        cream: '#F5F3EF',     // Coastal Fog
        sand: '#EDEAE3',
        ink: '#191F24',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg,#40B4E5 0%,#0644ED 60%,#CC22FF 130%)',
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        luxe: '0 1px 2px rgba(10,37,64,0.04), 0 12px 32px -12px rgba(10,37,64,0.12)',
        'luxe-lg': '0 1px 2px rgba(10,37,64,0.04), 0 30px 60px -20px rgba(10,37,64,0.22)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
      },
    },
  },
  plugins: [],
}

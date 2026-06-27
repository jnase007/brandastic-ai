/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2540',
          light: '#13335A',
          deep: '#071A2E',
        },
        teal: {
          DEFAULT: '#0EA5E9',
          dark: '#0284C7',
          soft: '#7DD3FC',
        },
        cream: '#FBFAF8',
        sand: '#F3F1EC',
        ink: '#0F172A',
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

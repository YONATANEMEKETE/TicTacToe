/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        n1: '#070f2b',
        n2: '#5fc52e',
        n3: '#e60b09',
        n4: '#091526',
      },
      boxShadow: {
        bg: '0px 0px 268px 23px rgba(45,255,196,0.17)',
        border: '0px 0px 10px #5fc52e',
      },

      fontFamily: {
        all: 'var(--font-all)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

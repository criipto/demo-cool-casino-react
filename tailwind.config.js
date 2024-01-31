/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary600: '#604FED', // Primary bright purple
      primary25: '#F9F9FF', // Light purple
      lightBlue900: '#262E52',
      lightBlue800: '#424974',
      lightBlue300: '#BABCD7',
      lightBlue25: '#F7F7FF',
      white: '#FFFFFF',
    },
    extend: {
      backgroundImage: {
        hero: "url('../public/casino-bg.png')",
      },
    },
  },
  plugins: [],
};

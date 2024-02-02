/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary800: '#382AAD',
      primary600: '#604FED', // Primary bright purple
      primary25: '#F9F9FF', // Light purple
      lightBlue900: '#262E52',
      lightBlue800: '#424974',
      lightBlue300: '#BABCD7',
      lightBlue25: '#F7F7FF',
      white: '#FFFFFF',
      error: '#FEE4E2',
    },
    extend: {
      backgroundImage: {
        hero: "url('../public/casino-bg.png')",
      },
    },
  },
  plugins: [],
});

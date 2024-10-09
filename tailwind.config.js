/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animated_text: {
          '0%': { 'background-position': '0px 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0px 50%' },
        },
      },
      animation: {
        animated_text: 'animated_text 10s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-gradient-animated': {
          background: 'linear-gradient(80deg, #1D4ED8, #1D4ED8, #9bd5b7, #9bd5b7)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
          'background-size': '300% !important',
          '-webkit-text-fill-color': 'transparent',
          animation: 'animated_text 10s ease-in-out infinite',
          '-moz-animation': 'animated_text 10s ease-in-out infinite',
          '-webkit-animation': 'animated_text 10s ease-in-out infinite',
        },
      });
    },
  ],
}


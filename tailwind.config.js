/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      spacing: {
        '945' : '9.45rem',
      },
      fontFamily:{
        tacs: 'The Amoret Collection Script'
      },
      letterSpacing: {
        custom: '0.64px'
      },
    },
  },
  plugins: [],
}

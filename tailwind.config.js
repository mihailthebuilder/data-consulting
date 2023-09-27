/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainBlue: '#334D88'
      }
    },
    fontSize: {
      base: '1.25rem',
      lg: '2rem',
      xl: "3rem"
    },
  },
  plugins: [],
}
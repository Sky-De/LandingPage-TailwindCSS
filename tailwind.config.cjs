/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '16' : '16rem',
      },
      zIndex: {
        '55': '55'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

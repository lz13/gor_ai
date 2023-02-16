/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        'black': '#0d0c0b',
        'zinc-white': '#fafafa'
      }
    },
  },
  plugins: [],
}

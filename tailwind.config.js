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
    fontFamily: {
      lum: ['Luminari'],
      bit: ['Bitwise'],
      apple: ['apple-chancery'],
      gen: ['Geneva']

    },
    extend: {
      colors: {
        'black': '#0d0c0b',
        'grey': '#1b1c1c',
        'zinc-white': '#fafafa'
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

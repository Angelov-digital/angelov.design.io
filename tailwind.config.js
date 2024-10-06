/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        aquire: ['aquire', 'sans-serif'], 
       
      },
      colors: {
        'blue': '#232534', 
        'lavender': '#F0E9F9', 
        'light': '#F8F3FF', 
        'shade': '#2325348C', 
        'dark' : '#17171e',
        'light-trans' : '#f8f3ffef',
        'dark-trans' : '#110b25d8',
        'dark-blue-trans': '#060408c2',
        'dark-blue': '#0c0c13',

      },
    },
  },
  plugins: [],
}


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
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Audiowide'],
        kanit: ['Kanit'],
        hanken: ['Hanken Grotesk']
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#cabfab',
          secondary: '#DFD8C8',
          accent: '#41444B',
          neutral: '#52575D',
          'base-100': '#494949',
          info: '#91CCF3',
          success: '#19665E',
          warning: '#947305',
          error: '#F76E7E'
        }
      }
    ]
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
}

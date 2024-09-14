/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        'bg-dark': '#282a36'
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}


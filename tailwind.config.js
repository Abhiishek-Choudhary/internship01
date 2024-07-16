/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tablet': {'max': '639px'},
      'laptop': {'min': '1000px'},
    },
    extend: {},
  },
  plugins: [],
}
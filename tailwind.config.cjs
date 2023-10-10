/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body-color': '#222736',
        'containers': '#a6b0cf',
        'headerandfooter': '#262b3c',
        'primary-text': '#9ab0cf',
        'secondary-text': '#f6f6f6',
      }
    },
  },
  plugins: [],
}

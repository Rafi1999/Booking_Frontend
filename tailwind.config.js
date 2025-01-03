/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#d4a373', // Golden-brown for luxury
        secondary: '#2c3e50', // Dark navy
        accent: '#ecf0f1', // Light gray
        background: '#fefaf6', // Off-white
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Add Google fonts
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};


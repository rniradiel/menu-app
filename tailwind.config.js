/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'blue': '#00017a',
      'gold': '#fcb305',
      'lightGold' : '#fed701',
      'white': '#fdfefd',
      'black': '#0d1010',
      'brown': '#281e16',
      'error' : '#690000',
      'success' : '#206b2f',
      transparent : 'transparent',
    },
    extend: {
      backgroundImage: {
        'heroImage': "url('/home.webp')",
      }
    }
  },
  plugins: [],
};

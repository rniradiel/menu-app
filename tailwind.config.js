/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'red': '#6f1a07',
      'orange': '#a8763e',
      'orange-hover' : '#f5b744',
      'white': '#fdfefd',
      'black': '#0d1010',
      'brown': '#281e16',
      'error' : '#690000',
      'success' : '#206b2f',
      transparent : 'transparent',
    },
  },
  plugins: [],
};

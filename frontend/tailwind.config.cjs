/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'round': ['"Varela Round"', 'sans-serif']
      },
    },
    
  },
  plugins: [],
}
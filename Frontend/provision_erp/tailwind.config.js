/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "principal-color":"#585EF2",
        "cards-color":"#ECECF1",
      },
    },
  },
  plugins: [],
}


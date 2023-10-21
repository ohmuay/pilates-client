/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        maindark: "#1D3124",
        mainlight: "#F6F4E8",
        maingreen: "#c8d5b9",
        maingray: "#71717A",
        mainnude: "#ede6d5",
        maintext: "#1D3124",
        secondtext: "#a47148",
        secondtext2: "#7f4f24",
        thirdtext: "#9e9e9e"
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Cormorant': ['"Cormorant Garamond"', 'serif']
      }
    },
  },
  plugins: [],
}


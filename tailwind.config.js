/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maindark: "#455947",
        mainlight: "#F6F4E8",
        maingreen: "#c9d9c3",
        maingray: "#71717A",
        mainnude: "#ede6d5",
        mainvanilla: "#d4bda1",
        maintext: "#1D3124",
        secondtext: "#c78853",
        secondtext2: "#864622",
        thirdtext: "#383330",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Cormorant: ['"Cormorant Garamond"', "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: { themes: ["cupcake", "dark", "cmyk"] },
};

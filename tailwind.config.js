/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1115px",
    },
    colors: {
      darkViolet: "hsl(256, 26%, 20%)",
      grayishBlue: "hsl(216, 30%, 68%)",
      veryDarkViolet: "hsl(270, 9%, 17%)",
      darkGrayishViolet: "hsl(273, 4%, 51%)",
      veryLightGray: "hsl(0, 0%, 98%)",
    },
    fontFamily: {
      karla: ["'Karla', 'sans-serif'"],
      sans: ["'DM Serif Display', 'sans-serif'"],
    },
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        RubikWetPaint: ["Rubik Wet Paint", "sans-serif"],
        BowlbyOne: ["Bowlby One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
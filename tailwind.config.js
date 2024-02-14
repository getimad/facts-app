/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pr: ["Protest Riot"],
        inter: ["Inter"],
      },
      colors: {
        black: "#323232",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B192C",
        accent: "#D4AF37",
        secondary: "#C5A059",
        ivory: "#FDFBF7",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Lato'", "sans-serif"],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "darken-desktop": "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url('/img/desktop/wedding-front.jpg')",
        "darken-mobile": "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url('/img/mobile/wedding-front.webp')",
      },
      fontFamily: {
        letsjazz: "letsjazz"
      }
    },
  },
  plugins: [],
}

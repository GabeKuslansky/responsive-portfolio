/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "index-desktop": "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/img/desktop/wedding-front.webp')",
        "index-mobile": "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/img/mobile/wedding-front.webp')",
        "bio-desktop": "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/img/desktop/baby-recital.webp')",
        "bio-mobile": "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/img/mobile/baby-recital.webp')",
      },
      fontFamily: {
        letsjazz: "letsjazz"
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}" // safe if you don’t use /app
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#003A70",    // Deep ocean blue
          blue: "#0A75A8",    // Primary mid-blue
          electric: "#00D4FF",// Electric blue accent
          char: "#2B2B2B",    // Charcoal
          white: "#FFFFFF"
        }
      },
      fontFamily: {
        display: ["Montserrat", "ui-sans-serif", "system-ui"], // hero / big headlines
        heading: ["Poppins", "ui-sans-serif", "system-ui"],    // section headings
        sans: ["Roboto", "ui-sans-serif", "system-ui"]         // body text
      },
      boxShadow: {
        brand: "0 10px 20px -8px rgba(0,212,255,0.35)" // glow in electric blue
      }
    }
  },
  plugins: []
};

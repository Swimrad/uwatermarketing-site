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
          blue: "#003A70",
          teal: "#00D4FF",
          green: "#00C853",
          char: "#2B2B2B",
          white: "#FFFFFF"
        }
      },
      fontFamily: {
        display: ["Montserrat", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "ui-sans-serif", "system-ui"],
        sans: ["Roboto", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#003A70",
          teal: "#00D4FF",
          green: "#00C853",
          char: "#2B2B2B",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["Montserrat", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "ui-sans-serif", "system-ui"],
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.08)" },
    },
  },
  plugins: [],
};

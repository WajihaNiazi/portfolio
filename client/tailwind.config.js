/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
      },
      colors: {
        indigo: {
          900: "#1c1b4d", // Deep Indigo for the Navbar
        },
        yellow: {
          300: "#ffeb99", // Accent for hover
          400: "#ffe066", // Button hover
        },
      },
    },
  },
  plugins: [],
};

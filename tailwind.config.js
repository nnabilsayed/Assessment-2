/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        xxs: "10px", // Extra Extra Small
      },
      height: {
        28: "28px",
        656: "565px",
        506: "506px",
      },
      width: {
        105: "105px",
        438: "438px",
        760: "760px",
        800: "800px",
        860: "860px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

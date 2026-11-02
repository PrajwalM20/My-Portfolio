/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        navy: "#0B1D50",
        orange: "#FF4D0A",
        paper: "#FFF9F4",
        ink: "#0B1D50",
        muted: "#777B87",
        line: "#E4DFD9",
        sand: "#FF4D0A",
      },

      boxShadow: {
        soft: "0 12px 35px rgba(11,29,80,0.08)",
      },

      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
    },
  },

  plugins: [],
};
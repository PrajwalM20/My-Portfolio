/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f7f7f4",
        ink: "#171817",
        muted: "#737771",
        line: "#dedfd9",
        sand: "#c5a06b",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        mono: ["DM Mono", "monospace"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(25, 28, 24, .08)",
      },
    },
  },
  plugins: [],
};
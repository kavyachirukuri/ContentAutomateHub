/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "synchro-dark": "#0c0f14",
        "synchro-dark-soft": "#141922",
        gold: "#d4af37",
        "gold-light": "#e5c76b",
        "gold-dark": "#b8962e",
      },
      fontFamily: {
        sans: ["var(--font-sans-app)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

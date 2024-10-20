/** @type {import('tailwindcss').Config} */
// tailwind.config.js
import { fontFamily } from "tailwindcss/defaultTheme";
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        n: {
          1: "#FFFFFF",
          2: "#000000",
          3: "#f0e373",
          4: "#1c39ba",
          5: "#f0d135",
          6: "#f7edba",
          7: "#000000",
          8: "#000000",
          9: '#172554',
        },
      },
      fontFamily: {
        code: "var(--font-code)",
        sora: "var(--font-sora)",
        comic: "var(--font-comic)",
      },
      backgroundImage: {
        'wb-gradient': 'linear-gradient(to right, rgba(255, 255, 255, 0) 70%, #f7edba 30%)',
      },
    },
  },
  plugins: [],
};


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ffc30e",
        },
        secondary: {
          50: "#1f1f1f",
          100: "#fff",
          150: "#f0f0f0",
          160: "#e8e8e8",
          180: "#c9c9c9",
          200: "#000000b9",
          250: "#707070",
          300: "#0f0f0f",
          500: "#000",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

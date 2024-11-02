/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#3B82F6", // Blue 500
        secondary: "#34D399", // Teal 400
        accent: "#FBBF24", // Yellow 400
        background: "#F9FAFB", // Gray 50
        text: "#1F2937", // Gray 800
      },
      spacing: {
        big: "40rem",
      },
    },
  },
  plugins: [],
};

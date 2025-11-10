/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontFamily: {
    playfair: ["Playfair Display", "serif"],
  },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "#f97316", // or your brand orange
        primary: "rgb(9 59 91)", // or hex: '#093B5B'
      },
    },
  },
  plugins: [],
};

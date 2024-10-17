/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(0,140,255,0.6)",
      },
    },
  },
  daisyui: {
    themes: ["lemonade", "night", "sunset"],
  },
  plugins: [require("daisyui")],
};

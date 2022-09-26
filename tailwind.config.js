/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  themes: [
    {
      emaJohnTheme: {
        primary: "#1C2B35",
        secondary: "#2A414F",
        accent: "#ff9900",
        neutral: "#3d4451", 
        "base-100": "#ffffff",
      },
    },
    "dark",
    "cupcake",
  ],
  plugins: [require("daisyui")],

}

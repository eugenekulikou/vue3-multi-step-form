/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateAreas: {
        "form-desktop": ["nav form form", "nav form form", "nav footer footer"],
      },
      gridTemplateRows: {
        mobile: "auto 1fr auto",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};

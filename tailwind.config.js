/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Primary
      marineBlue: "hsl(213, 96%, 18%)",
      purplishBlue: "hsl(243, 100%, 62%)",
      pastelBlue: "hsl(228, 100%, 84%)",
      lightBlue: "hsl(206, 94%, 87%)",
      strawberryRed: "hsl(354, 84%, 57%)",
      // Neutral
      coolGray: "hsl(231, 11%, 63%)",
      lightGray: "hsl(229, 24%, 87%)",
      magnolia: "hsl(217, 100%, 97%)",
      alabaster: "hsl(231, 100%, 99%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(179, 100%, 0%)",
    },
    extend: {
      screens: {
        xs: "375px",
        xl: "1440px",
      },
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

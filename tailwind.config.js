/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yassa: {
          red: "#E53E3E", // Rouge du logo YassaNCo
          cream: "#FEF7ED", // Beige crème
          brown: "#8B4513", // Marron chocolat du logo
          darkBrown: "#654321", // Marron foncé
          lightCream: "#FFFBEB", // Crème très clair
          orange: "#FF6B35", // Orange vif du logo
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "system-ui", "sans-serif"],
        display: ["Montserrat", "system-ui", "sans-serif"],
        body: ["Open Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}

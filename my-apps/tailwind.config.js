// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "var(--color-primary)",
//         secondary: "var(--color-secondary)",
//       },
//     },
//   },
//   plugins: [],
// }

module.exports = {
    content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        border: "var(--color-border)",
        muted: "var(--color-muted)",
        cardBg: "var(--card-bg)",
        cardBorder: "var(--card-border)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
    },
  },
};
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
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

        bggray: "var(--color-gray-200)",
        bgray: "var(--color-gray-100)",

        gray: {
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          400: "var(--color-gray-400)",
          600: "var(--color-gray-600)",
          800: "var(--color-gray-800)",
          900: "var(--color-gray-900)",
        },

        borderPrimary: "var(--border-primary)",
        borderSecondary: "var(--border-secondary)",
      },

      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        15: "var(--text-15)",
        lg: "var(--text-lg)",
        18: "var(--text-18)",
        xl: "var(--text-xl)",
        20: "var(--text-20)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        35: "var(--text-35)",
        40: "var(--text-40)",
        45: "var(--text-45)",
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        "4xl": "var(--radius-4xl)",
      },
green: {
      
      700: "var(--color-green-400)",
    },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
};
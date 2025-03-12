/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#000000",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#d4af37",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#000000",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#000000",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#1a1a1a",
          foreground: "#a3a3a3",
        },
        accent: {
          DEFAULT: "#d4af37",
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "#000000",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#000000",
          foreground: "#ffffff",
        },
        gold: {
          DEFAULT: "#d4af37",
          light: "#f5e7a3",
          dark: "#a67c00",
        },
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "var(--font-noto-kufi)", "serif"],
        sans: ["var(--font-montserrat)", "var(--font-noto-kufi)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}


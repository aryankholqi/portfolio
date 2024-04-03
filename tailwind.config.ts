import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "350px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        interBold: ["InterBold"],
        interSemiBold: ["InterSemiBold"],
        interRegular: ["InterRegular"],
        interMedium: ["InterMedium"],
      },
      colors: {
        lightGray: {
          DEFAULT: "#FFFFFF",
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
        darkGray: {
          DEFAULT: "#030712",
          50: "#111827",
          100: "#1f2937",
          200: "#374151",
          300: "#4b5563",
          400: "#6b7280",
          500: "#9ca3af",
          600: "#d1d5db",
          700: "#e5e7eb",
          800: "#f3f4f6",
          900: "#FFFFFF",
        },
        emerald: {
          DEFAULT: "#10b981",
        },
      },
      container: {
        center: true,
        padding: {
          DEAFAULT: "2rem",
          xs: "1rem",
          sm: "2rem",
          md: "2rem",
          lg: "3rem",
          xl: "3.5rem",
          "2xl": "3rem",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;

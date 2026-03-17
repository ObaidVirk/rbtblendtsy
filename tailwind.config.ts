import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3f0ff",
          100: "#e9e3ff",
          200: "#d4caff",
          300: "#b3a4ff",
          400: "#8b72ff",
          500: "#6344f5",
          600: "#5027eb",
          700: "#4319d0",
          800: "#3817a8",
          900: "#2f1585",
          950: "#1c0a5a",
        },
        finPurple: {
          DEFAULT: "#6644d0",
          dark: "#4319d0",
          light: "#9b7aff",
        },
        finBlue: {
          DEFAULT: "#1a3a6b",
          light: "#2d5fa6",
        },
        finGray: {
          50: "#f8f9fc",
          100: "#f1f3f9",
          200: "#e2e6f0",
          300: "#c8cfe0",
          400: "#9aa3bc",
          500: "#6b7799",
          600: "#4d5a7a",
          700: "#374261",
          800: "#242d48",
          900: "#141c33",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #1c0a5a 0%, #4319d0 50%, #6644d0 100%)",
        "section-gradient": "linear-gradient(180deg, #f8f9fc 0%, #ffffff 100%)",
        "card-gradient": "linear-gradient(135deg, #6644d0 0%, #4319d0 100%)",
      },
      boxShadow: {
        card: "0 4px 24px rgba(99,68,245,0.10)",
        nav: "0 2px 20px rgba(0,0,0,0.08)",
        hero: "0 32px 80px rgba(28,10,90,0.30)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

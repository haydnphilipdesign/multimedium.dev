import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px"
      }
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2457d6",
          foreground: "#eef3ff"
        },
        ink: {
          DEFAULT: "#0f172a",
          muted: "#324155",
          subtle: "#8ea0b6",
          contrast: "#f7f9fc"
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#edf2f7",
          dark: "#0b1629"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui"],
        display: ["var(--font-jakarta)", "system-ui"]
      },
      borderRadius: {
        lg: "0.75rem"
      },
      boxShadow: {
        soft: "0 10px 40px -20px rgba(15, 23, 42, 0.4)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both"
      }
    }
  },
  plugins: [typography]
};

export default config;

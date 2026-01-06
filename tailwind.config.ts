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
          DEFAULT: "rgb(var(--brand) / <alpha-value>)",
          foreground: "rgb(var(--brand-foreground) / <alpha-value>)",
          2: "rgb(var(--brand-2) / <alpha-value>)",
          3: "rgb(var(--brand-3) / <alpha-value>)"
        },
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          muted: "rgb(var(--ink-muted) / <alpha-value>)",
          subtle: "rgb(var(--ink-subtle) / <alpha-value>)",
          contrast: "rgb(var(--ink-contrast) / <alpha-value>)"
        },
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          muted: "rgb(var(--surface-muted) / <alpha-value>)",
          dark: "rgb(var(--surface-dark) / <alpha-value>)"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui"],
        display: ["var(--font-space)", "var(--font-inter)", "system-ui"],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "\"Liberation Mono\"",
          "\"Courier New\"",
          "monospace"
        ]
      },
      borderRadius: {
        lg: "0.75rem"
      },
      boxShadow: {
        soft: "0 30px 90px -55px rgba(0, 0, 0, 0.8)",
        glow: "0 0 0 1px rgba(255, 255, 255, 0.08), 0 30px 90px -55px rgba(0, 0, 0, 0.9)"
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

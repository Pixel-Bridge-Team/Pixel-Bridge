import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060D1A",
          900: "#0A1628",
          800: "#0D1F3C",
          700: "#112240",
          600: "#162B50",
        },
        primary: {
          700: "#1449B0",
          600: "#1A56C4",
          500: "#1D6FF2",
          400: "#3B82F6",
          300: "#60A5FA",
        },
        accent: {
          500: "#06B6D4",
          400: "#22D3EE",
          300: "#67E8F9",
        },
        gray: {
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
          500: "#64748B",
          400: "#94A3B8",
          300: "#CBD5E1",
          200: "#E2E8F0",
          100: "#F1F5F9",
          50:  "#F8FAFC",
        },
        white: "#FFFFFF",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #1D6FF2 0%, #06B6D4 100%)",
        "gradient-hero":    "linear-gradient(180deg, #0A1628 0%, #112240 50%, #0D1F3C 100%)",
        "gradient-section": "linear-gradient(135deg, #1449B0 0%, #06B6D4 100%)",
        "gradient-card":    "linear-gradient(135deg, #1D6FF2 0%, #22D3EE 100%)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        xs:    ["0.75rem",  { lineHeight: "1rem" }],
        sm:    ["0.875rem", { lineHeight: "1.25rem" }],
        base:  ["1rem",     { lineHeight: "1.625rem" }],
        lg:    ["1.125rem", { lineHeight: "1.75rem" }],
        xl:    ["1.25rem",  { lineHeight: "1.875rem" }],
        "2xl": ["1.5rem",   { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem",  { lineHeight: "2.5rem" }],
        "5xl": ["3rem",     { lineHeight: "1.15" }],
        "6xl": ["3.75rem",  { lineHeight: "1.1" }],
      },
      borderRadius: {
        none:    "0",
        sm:      "0.25rem",
        DEFAULT: "0.375rem",
        md:      "0.5rem",
        lg:      "0.75rem",
        xl:      "1rem",
        "2xl":   "1.25rem",
        "3xl":   "1.5rem",
        full:    "9999px",
      },
      spacing: {
        "18":      "4.5rem",
        "22":      "5.5rem",
        "30":      "7.5rem",
        "34":      "8.5rem",
        "section": "5rem",
      },
      boxShadow: {
        card:          "0 4px 24px rgba(10, 22, 40, 0.08)",
        "card-hover":  "0 8px 40px rgba(10, 22, 40, 0.15)",
        "btn-primary": "0 4px 20px rgba(29, 111, 242, 0.4)",
        "input-focus": "0 0 0 3px rgba(29, 111, 242, 0.25)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
        fast:    "150ms",
        slow:    "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
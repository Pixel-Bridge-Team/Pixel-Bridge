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
        primary: {
          50: "#EFF8FF",
          100: "#D1E9FF",
          200: "#B2DDFF",
          300: "#84C9FF",
          400: "#53B1FD",
          500: "#018BD8",
          600: "#0072BC",
          700: "#005A96",
          800: "#004A7A",
          900: "#002D6D",
        },
        hoverBlue: "#0066FF",
        accent: {
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#030712",
        },
        darkNavy: {
          1: "#0A0F2C",
          2: "#001954",
          3: "#00010E",
        },
        purple: {
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
        },
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",
      },
      fontFamily: {
        sans: ["Inter", "Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #018BD8 0%, #0066FF 100%)",
        "gradient-hero": "linear-gradient(135deg, #42A5F5 0%, #018BD8 100%)",
        "gradient-creative":
          "linear-gradient(135deg, #42A5F5 0%, #8B5CF6 100%)",
        "gradient-tech": "linear-gradient(90deg, #018BD8 0%, #06B6D4 100%)",
      },
    },
  },
  plugins: [],
};

export default config;

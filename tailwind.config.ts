import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0e17",
        foreground: "#e8e8e8",
        card: "#111827",
        "card-hover": "#1a2236",
        neon: {
          green: "#00ff88",
          "green-dim": "#00cc6a",
          "green-glow": "rgba(0, 255, 136, 0.3)",
          blue: "#00d4ff",
          "blue-dim": "#0099cc",
          red: "#ff4444",
          "red-glow": "rgba(255, 68, 68, 0.3)",
          gold: "#ffd700",
          silver: "#c0c0c0",
          bronze: "#cd7f32",
        },
        glass: {
          DEFAULT: "rgba(17, 24, 39, 0.7)",
          light: "rgba(17, 24, 39, 0.4)",
          border: "rgba(255, 255, 255, 0.08)",
        },
        accent: {
          DEFAULT: "#00ff88",
          hover: "#00cc6a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse at top, rgba(0, 255, 136, 0.15) 0%, transparent 50%)",
        "card-gradient": "linear-gradient(180deg, rgba(17,24,39,0.9) 0%, rgba(10,14,23,0.95) 100%)",
      },
      boxShadow: {
        neon: "0 0 20px rgba(0, 255, 136, 0.3)",
        "neon-sm": "0 0 10px rgba(0, 255, 136, 0.2)",
        "neon-lg": "0 0 40px rgba(0, 255, 136, 0.4)",
        "card-glow": "0 8px 32px rgba(0, 0, 0, 0.4)",
        "red-neon": "0 0 20px rgba(255, 68, 68, 0.3)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "fade-in": "fadeIn 0.3s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(0, 255, 136, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(0, 255, 136, 0.4), 0 0 40px rgba(0, 255, 136, 0.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
}

export default config

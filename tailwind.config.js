/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0a0e17",
        neon: "#00ff88",
        "neon-dim": "#00cc6a",
        "neon-red": "#ff4444",
        gold: "#ffd700",
      },
    },
  },
  plugins: [],
}

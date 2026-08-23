/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#060907",
        surface: "#0b110d",
        "surface-card": "#101812",
        "surface-elevated": "#152219",
        brand: {
          lime: "#F0FB43",
          light: "#7ED043",
          medium: "#4FB734",
          dark: "#328F35",
          deep: "#176B24",
          charcoal: "#0b0f0c"
        }
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
        sans: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"]
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-subtle": "bounceSubtle 2s infinite ease-in-out",
        "glow-pulse": "glowPulse 3s infinite ease-in-out"
      },
      keyframes: {
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        },
        glowPulse: {
          "0%, 100%": { opacity: 0.7, filter: "drop-shadow(0 0 15px rgba(126, 208, 67, 0.4))" },
          "50%": { opacity: 1, filter: "drop-shadow(0 0 30px rgba(240, 251, 67, 0.7))" }
        }
      }
    },
  },
  plugins: [],
}

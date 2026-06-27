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
        // Mining RACE brand tokens
        brand: {
          teal:    "#00C896",
          tealDim: "rgba(0,200,150,0.08)",
          tealBorder: "rgba(0,200,150,0.25)",
        },
        mr: {
          black:   "#08080A",
          dark:    "#0F0F13",
          surface: "#141418",
          card:    "#1A1A20",
          cardHover: "#1F1F28",
          border:  "rgba(255,255,255,0.07)",
          borderStrong: "rgba(255,255,255,0.13)",
          white:   "#F0F4F8",
          gray:    "#94A3B8",
          muted:   "#475569",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,200,150,0.12), transparent)",
        "card-glow": "radial-gradient(ellipse at top, rgba(0,200,150,0.06), transparent 60%)",
      },
      animation: {
        "fade-up":    "fadeUp 0.5s ease forwards",
        "fade-in":    "fadeIn 0.4s ease forwards",
        "pulse-teal": "pulseTeal 2s ease-in-out infinite",
        "count-up":   "countUp 1.5s ease-out forwards",
      },
      keyframes: {
        fadeUp:    { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn:    { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        pulseTeal: { "0%,100%": { boxShadow: "0 0 0 0 rgba(0,200,150,0.3)" }, "50%": { boxShadow: "0 0 0 8px rgba(0,200,150,0)" } },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
      maxWidth: {
        "8xl": "1400px",
      },
    },
  },
  plugins: [],
};

export default config;

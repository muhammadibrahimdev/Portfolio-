import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base surfaces — deep charcoal with a green undertone, not neutral black
        background: "#0A0E0C",
        surface: {
          DEFAULT: "#10140F",
          raised: "#141A14",
          hover: "#181F18",
        },
        border: {
          DEFAULT: "#1E251E",
          strong: "#2A342A",
        },
        // Text
        foreground: "#E8ECE8",
        muted: "#8B968C",
        subtle: "#5C665D",
        // Accents
        emerald: {
          DEFAULT: "#34D399",
          dim: "#1F7A5C",
          glow: "#34D39926",
        },
        azure: {
          DEFAULT: "#38BDF8",
          dim: "#1E6E93",
          glow: "#38BDF826",
        },
      },
      fontFamily: {
        display: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.25rem, 6vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.5rem, 4.5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2rem, 3.2vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 2.2vw, 1.875rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        panel: "0 0 0 1px #1E251E, 0 8px 30px -12px rgba(0,0,0,0.6)",
        "glow-emerald": "0 0 0 1px #1F7A5C55, 0 0 24px -4px #34D39940",
      },
      keyframes: {
        "ping-slow": {
          "0%": { transform: "scale(1)", opacity: "0.9" },
          "75%, 100%": { transform: "scale(2.2)", opacity: "0" },
        },
        "grid-fade": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "ping-slow": "ping-slow 2.4s cubic-bezier(0,0,0.2,1) infinite",
        "grid-fade": "grid-fade 1.2s ease-out forwards",
        blink: "blink 1.1s steps(1) infinite",
        marquee: "marquee 28s linear infinite",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

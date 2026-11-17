import type { Config } from "tailwindcss";

// Colours, spacing, radii and type scale copied from the Stitch
// "minimal" design (design/*_minimal/code.html).
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e15c3",
        "primary-container": "#3b3bd9",
        "on-primary": "#ffffff",
        "primary-fixed-dim": "#c0c1ff",
        secondary: "#006e2d",
        "secondary-container": "#7cf994",
        "secondary-fixed-dim": "#62df7d",
        tertiary: "#2624b0",
        "tertiary-container": "#4042c8",
        error: "#ba1a1a",
        "error-container": "#ffdad6",
        surface: "#faf9ff",
        "surface-bright": "#faf9ff",
        "surface-variant": "#dee2f3",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f1f3ff",
        "surface-container": "#e9edfe",
        "surface-container-high": "#e4e8f8",
        "on-surface": "#161b27",
        "on-surface-variant": "#464555",
        outline: "#767587",
        "outline-variant": "#c6c4d8",
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },
      spacing: {
        margin: "1.5rem",
        "space-xs": "0.5rem",
        "space-sm": "0.75rem",
        "space-md": "1.25rem",
        "space-lg": "2rem",
        "space-xl": "3.5rem",
      },
      // Small, slow bounce for the results "scroll" hint.
      keyframes: {
        "gentle-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        "gentle-bounce": "gentle-bounce 1.8s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      fontSize: {
        display: ["2.25rem", { lineHeight: "2.75rem", letterSpacing: "-0.025em", fontWeight: "800" }],
        headline: ["1.625rem", { lineHeight: "2.125rem", letterSpacing: "-0.015em", fontWeight: "700" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75rem" }],
        "body-md": ["1rem", { lineHeight: "1.625rem" }],
        "label-lg": ["1rem", { lineHeight: "1.5rem", letterSpacing: "0.01em", fontWeight: "600" }],
        "label-md": ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.02em", fontWeight: "500" }],
        "label-sm": ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.05em", fontWeight: "600" }],
      },
    },
  },
  plugins: [],
};

export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00E5FF",
          dark: "#00B8D4",
          soft: "#083344",
          purple: "#A855F7",
        },
        navy: {
          950: "#050814",
          900: "#0A1020",
          800: "#121A2E",
          700: "#1A2540",
          600: "#243356",
          500: "#3B8EFF",
          200: "#7DD3FC",
          100: "#BAE6FD",
          50: "#E0F2FE",
        },
        teal: {
          950: "#050814",
          900: "#0A1020",
          800: "#121A2E",
          700: "#1A2540",
          600: "#00E5FF",
          500: "#22D3EE",
          100: "#CFFAFE",
        },
        ink: {
          DEFAULT: "#E8EEF8",
          soft: "#B6C2D6",
          mute: "#8490A8",
        },
        paper: {
          DEFAULT: "#050814",
          card: "#0F1628",
          warm: "#0A1020",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 36px -16px rgba(0, 229, 255, 0.35)",
        lift: "0 20px 48px -24px rgba(168, 85, 247, 0.35)",
        glow: "0 0 24px rgba(0, 229, 255, 0.35), 0 0 48px rgba(168, 85, 247, 0.2)",
        tablet: "0 28px 60px -28px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(0, 229, 255, 0.12)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #00E5FF 0%, #7C3AED 55%, #A855F7 100%)",
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,229,255,0.18), transparent 55%), radial-gradient(ellipse 60% 40% at 90% 20%, rgba(168,85,247,0.16), transparent 50%)",
      },
    },
  },
  plugins: [],
};

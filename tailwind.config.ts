import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#04060E",
          900: "#070B18",
          850: "#0A0F22",
          800: "#0D1430",
          700: "#15203F",
          600: "#1D2A50",
        },
        electric: {
          DEFAULT: "#2F6BFF",
          50: "#EEF3FF",
          100: "#D9E4FF",
          300: "#8FB0FF",
          400: "#5B8DFF",
          500: "#2F6BFF",
          600: "#1F54E6",
          700: "#1A45BD",
        },
        azure: "#38D0FF",
      },
      fontFamily: {
        sans: ["Satoshi", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        display: ['"Clash Display"', "Satoshi", "ui-sans-serif", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glow: "0 10px 50px -12px rgba(47,107,255,0.55)",
        "glow-sm": "0 6px 24px -8px rgba(47,107,255,0.5)",
        "glow-lg": "0 24px 90px -20px rgba(47,107,255,0.6)",
        card: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 30px 60px -30px rgba(0,0,0,0.7)",
        "card-light": "0 1px 0 0 rgba(255,255,255,0.9) inset, 0 24px 50px -28px rgba(15,30,70,0.25)",
        float: "0 30px 80px -24px rgba(4,8,24,0.8)",
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(60% 60% at 50% 0%, rgba(47,107,255,0.18), transparent 70%)",
        "electric-gradient": "linear-gradient(135deg, #2F6BFF 0%, #38D0FF 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-22px) translateX(8px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "70%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        shimmer: "shimmer 2.5s infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.22,1,0.36,1) infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;

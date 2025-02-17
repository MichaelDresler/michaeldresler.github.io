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
        surface: "rgba(var(--surface), <alpha-value>)",
        foreground: "rgba(var(--foreground), <alpha-value>)",
        inverse: "rgba(var(--inverse), <alpha-value>)",
      },
      textColor:{
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        
      },
      fontSize: {
        xs: [
          "0.75rem",
          { lineHeight: "100%", letterSpacing: "" },
        ] /* 12px */,
        s: [
          "0.875rem",
          { lineHeight: "100%", letterSpacing: "" },
        ] /* 14px */,
        base: [
          "1rem",
          { lineHeight: "150%", letterSpacing: "" },
        ] /* 16px */,
        lg: [
          "1.25rem",
          { lineHeight: "150%", letterSpacing: "" },
        ] /* 20px */,
        xl: [
          "1.5625rem",
          { lineHeight: "125%", letterSpacing: "" },
        ] /* 25px */,
        "2xl": [
          "2rem",
          { lineHeight: "125%", letterSpacing: "" },
        ] /* 32px */,
        "3xl": [
          "2.5rem",
          { lineHeight: "125%", letterSpacing: "" },
        ] /* 40px */,
        "4xl": [
          "3.25rem",
          { lineHeight: "112.5%", letterSpacing: "" },
        ] /* 52px */,
        "5xl": [
          "4rem",
          { lineHeight: "112.5%", letterSpacing: "" },
        ] /* 64px */,
        "6xl": [
          "4.5rem",
          { lineHeight: "112.5%", letterSpacing: "" },
        ] /* 72px */,
        "7xl": [
          "6rem",
          { lineHeight: "112.5%", letterSpacing: "" },
        ] /* 96px */,
      },
    },
  },
  plugins: [],
};
export default config;
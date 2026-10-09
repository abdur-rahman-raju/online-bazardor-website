/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: "#0b8a3e", dark: "#08702f", soft: "#e6f4ea" } },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        bazardor: {
          primary: "#0b8a3e",
          "primary-content": "#ffffff",
          secondary: "#0b8a3e",
          accent: "#0b8a3e",
          neutral: "#1f2937",
          "base-100": "#ffffff",
          "base-200": "#eef4ee",
          "base-300": "#dfe8df",
          "base-content": "#1a1a1a",
          info: "#2563eb",
          success: "#0b8a3e",
          warning: "#f59e0b",
          error: "#dc2626",
        },
      },
    ],
  },
};

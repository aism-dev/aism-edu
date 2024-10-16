import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme: "#183d74",
        themelight: "#1563d8",
        themeDark: "#132e57",
      },
      cursor: {
        'education': 'url(https://aism-edu.sirv.com/icons/download%20(20).png), auto',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-1px)' },
          '40%, 80%': { transform: 'translateX(1px)' },
        },
      },
      animation: {
        'stutter-shake': 'shake 0.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;

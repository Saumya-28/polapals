import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#2c435e', 
        'light-border-blue':'#cce9ff',
        'custom-gray':'#edeceb',
        'light-gray':'#f4f4f4',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)'
          },
          '100%': { transform: 'translateX(-20%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

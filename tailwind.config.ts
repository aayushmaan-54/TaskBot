import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)'],
        handwriting: ['var(--font-handwriting)'],
      },
      colors: {
        primary: {
          light: '#FFFFFF',
          dark: '#1E2122',
        },
        muted: {
          light: '#B7BCBF',
          dark: '#7A8185',
        },
        text: {
          light: '#1E2122',
          dark: '#FFFFFF'
        },
        background: {
          light: '#E1BB6F',
          dark: '#25282A',
        },
        border: {
          light: '#DCDCDC',
          dark: '#4B5255',
        },
        neutral: {
          light: '#E9E9E9',
          dark: '#444C4E',
        },
        secondary: {
          light: '#EE889A',
          dark: '#EE889A',
          hover: {
            light: '#DE7184',
            dark: '#DE7184',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

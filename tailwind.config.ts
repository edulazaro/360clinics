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
        primary: {
          50: '#fef6f2',
          100: '#fde9df',
          200: '#fbd0bf',
          300: '#f7ad93',
          400: '#f28164',
          500: '#eb5d3f',
          600: '#d84226',
          700: '#b4321f',
          800: '#942c20',
          900: '#7a291d',
        },
        warm: {
          50: '#fdf8f6',
          100: '#f8ede8',
          200: '#f0dcd2',
          300: '#e5c5b3',
          400: '#d7a58c',
          500: '#ca896f',
          600: '#ba6f58',
          700: '#9c5a49',
          800: '#804c3f',
          900: '#6a4136',
        }
      },
    },
  },
  plugins: [],
};
export default config;

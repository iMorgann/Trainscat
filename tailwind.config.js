/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b35',
        secondary: '#2e4057',
        accent: '#4ecdc4',
        light: '#f7fff7',
        dark: '#1a1a1a',
      },
    },
  },
  plugins: [],
}
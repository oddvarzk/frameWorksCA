/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paleSand: '#F4EFEA',
        charcoal: '#333333',
        mutedTerracotta: '#CC7A57',
        deepBlue: '#4A6FA5',
        oliveGreen: '#7A8450',
      },
    },
  },
  plugins: [],
}
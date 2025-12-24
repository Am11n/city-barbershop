/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode manually if needed, or just use dark-first
  theme: {
    extend: {
      colors: {
        primary: '#0f0f0f', // Deep black/gray
        secondary: '#1a1a1a', // Surface color
        accent: '#c59d5f', // Gold/Bronze for barbershop feel
        'accent-hover': '#b08b50',
        text: '#f3f4f6', // Main text
        'text-muted': '#9ca3af', // Secondary text
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

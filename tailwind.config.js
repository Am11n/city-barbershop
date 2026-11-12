/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: '#0b0b0c',        // page background
        coal: '#141416',       // raised surface
        steel: '#1d1d21',      // cards
        line: 'rgba(255,255,255,0.08)',
        bone: '#f4efe6',       // primary text (warm white)
        mute: '#9a958c',       // secondary text
        pole: '#e0262f',       // barber-pole red (from logo)
        'pole-dark': '#b81d25',
        navy: '#1f3a8a',       // barber-pole blue (from logo)
        // legacy aliases kept so nothing breaks
        primary: '#0b0b0c',
        secondary: '#141416',
        accent: '#e0262f',
        'accent-hover': '#b81d25',
        text: '#f4efe6',
        'text-muted': '#9a958c',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Anton', 'Impact', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        pole: { from: { backgroundPosition: '0 0' }, to: { backgroundPosition: '0 56px' } },
        rise: { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'none' } },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        pole: 'pole 1.4s linear infinite',
        rise: 'rise .9s cubic-bezier(.2,.7,.2,1) both',
      },
    },
  },
  plugins: [],
}

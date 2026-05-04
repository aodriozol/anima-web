/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#2F2F2F",
        soft: "#F5F3EE",
        sage: "#8FA39A",
        muted: "#6B6B6B",
      },
    },
  },
  plugins: [],
};
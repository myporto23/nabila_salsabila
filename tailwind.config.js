/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: '#c4b5fd',
        blush: '#fdf2f8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        blob: 'blob 10s ease-in-out infinite',
        gradient: 'gradient 15s ease infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      backdropBlur: {
        '3xl': '64px',
      },
    },
  },
  plugins: [],
};

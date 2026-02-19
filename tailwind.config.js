/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // include all React components
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'translate(-50%, -50%) scale(1)' },
          '100%': { transform: 'translate(-50%, -50%) scale(1.05)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease forwards',
        zoomIn: 'zoomIn 8s ease forwards',
      },
      colors: {
        primary: 'var(--color-primary)',
        gray: {
          300: 'var(--color-gray)',
          400: '#9ca3af',
        },
        white: 'var(--color-white)',
      },
    },
  },
  plugins: [],
}

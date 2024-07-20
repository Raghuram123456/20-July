/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 0 128px 0 rgba(0, 0, 0, 0.1), 0 32px 64px -48px rgba(0, 0, 0, 0.5)',
      },
      transform: {
        'rotate-90': 'rotate(90deg)',
      },
    },
  },
  plugins: [],
}
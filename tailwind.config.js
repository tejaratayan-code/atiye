/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,css}",
    // Add future pages here, e.g. "./pages/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Vazirmatn', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.25rem',
      }
    },
  },
  plugins: [],
}
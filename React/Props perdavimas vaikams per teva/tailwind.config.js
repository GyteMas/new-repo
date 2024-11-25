/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      animation: {
      'spin-slow': 'spin 0.2s linear infinite',
    }},
  },
  plugins: [forms],
}

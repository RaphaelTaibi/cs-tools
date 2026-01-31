/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  safelist: [
    // Spinner colors to ensure they're always generated
    'border-blue-600',
    'border-red-600',
    'border-green-600',
    'border-purple-600',
    'border-gray-600',
    'border-yellow-600',
    'border-indigo-600',
    'border-pink-600',
    // Animation classes
    'animate-spin',
    // Border widths
    'border-2',
    'border-4',
    // Common sizes
    'w-4', 'h-4', 'w-8', 'h-8', 'w-12', 'h-12',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


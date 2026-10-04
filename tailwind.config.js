/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          purple: {
            DEFAULT: '#2a1154',
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',
            600: '#7e22ce',
            700: '#581c87',
            800: '#3b0764',
            900: '#2a1154',
            950: '#1b0838',
          },
          gold: {
            DEFAULT: '#f59e0b',
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
          },
          blue: {
            DEFAULT: '#0284c7',
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
          },
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(42, 17, 84, 0.06), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
        'soft-md': '0 8px 24px -4px rgba(42, 17, 84, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 16px 36px -6px rgba(42, 17, 84, 0.12), 0 8px 20px -4px rgba(0, 0, 0, 0.06)',
        'glow-purple': '0 0 25px -5px rgba(42, 17, 84, 0.35)',
        'glow-gold': '0 0 25px -5px rgba(245, 158, 11, 0.4)',
      },
    },
  },
  plugins: [],
}

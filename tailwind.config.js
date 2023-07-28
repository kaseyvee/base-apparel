/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#423A3A',
      'pink': '#EE8B8B',
      'mauve': '#CE9898',
      'red': '#F96464'
    },
    fontSize: {
      sm: ['0.8125rem', '1.75rem'],
      base: ['0.875rem', '1.375rem'],
      lg: ['1rem', '1.75rem'],
      xl: ['2.5rem', '2.625rem'],
      '2xl': ['4rem', '4.4375rem']
    },
    fontFamily: {
      'josefin': ['Josefin Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bg-pattern-desktop.svg')",
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out forwards'
      }
    }
  },
  plugins: [],
}


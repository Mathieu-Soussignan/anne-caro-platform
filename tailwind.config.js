/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F4ECE4',
          200: '#E8DCD1',
          300: '#D6C4B3',
        },
        espresso: {
          900: '#1E1A18',
          800: '#2C2623',
          700: '#3D3531',
          600: '#524843',
        },
        terracotta: {
          500: '#C58B5C',
          600: '#B27649',
        },
        sandgold: {
          400: '#E0B589',
          500: '#D4A373',
          600: '#C18D5A',
        }
      },
      fontFamily: {
        serif: ['var(--font-heading)', 'Playfair Display', 'serif'],
        sans: ['var(--font-body)', 'Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

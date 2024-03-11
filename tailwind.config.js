/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {

      'sm': '320px',
      'xsm': '600px',
      // => @media (min-width: 640px) { ... }
      'xmd': '920px',
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      'slg':'1100',
      // => @media (min-width: 1024px) { ... }
      'xlg': '1200px',
      'xl': '1280px',
      'xll':'1300px',
      // => @media (min-width: 1280px) { ... }
      'xlll':'1400px',
      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: { 'sans': ['Josefin Sans', 'sans-serif'], 'peligro-stencil': ['Peligro Stencil'], }
    },

  },
  plugins: [
  ],
}

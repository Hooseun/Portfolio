/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': {'min': '320px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1279px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1280px', 'max': '1439px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1440px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': {'min': '480px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '967px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '968px', 'max': '1439px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1440px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
    },
    extend: {},
  },
  plugins: [],
}


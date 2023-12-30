/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        // '2xl': {'min': '1535px'},
        // 'xl': {'min': '1279px'},
        // 'lg': {'min': '1023px'},
        // 'md': {'min': '767px'},
        // 'sm': {'max': '766px'},
        '🔼2xl': {'min': '1535px'},
        '🔼xl': {'min': '1279px'},
        '🔼lg': {'min': '1023px'},
        '🔼md': {'min': '767px'},

        'd-2xl': {'max': '1535px'},
        'd-xl': {'max': '1279px'},
        'd-lg': {'max': '1023px'},
        'd-md': {'max': '767px'},
        'd-sm': {'max': '500px'},
      },
      colors: {
        "contact-bg": "#0018837d ",
        "tp-gray": "#3e3e3e7d ",
        "tp-white": "#e0e0e07d ",
      },
      fontFamily: {
        
      }
    },
  },
  plugins: [],
}
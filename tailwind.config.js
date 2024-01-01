/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-1": 'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)',
      },
      screens: {
        // '2xl': {'min': '1535px'},
        // 'xl': {'min': '1279px'},
        // 'lg': {'min': '1023px'},
        // 'md': {'min': '767px'},
        // 'sm': {'max': '766px'},
        'u-2xl': {'min': '1536px'},
        'u-xl': {'min': '1280px'},
        'u-lg': {'min': '1024px'},
        'u-md': {'min': '768px'},
        'u-sm': {'min': '501px'},

        'd-2xl': {'max': '1535px'},
        'd-xl': {'max': '1279px'},
        'd-lg': {'max': '1023px'},
        'd-md': {'max': '767px'},
        'd-sm': {'max': '500px'},
      },
      colors: {
        "l-nav-bg": "#acacaca0",
        "d-nav-bg": "#242424a0",
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
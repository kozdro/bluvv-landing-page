/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#D17AB3',
      secondary: '#E6ABBF',
      peach: '#F9CEB9',
      lavender: {
        old: '#796572',
        gray: '#BDB6D7',
        deep: '#8F5BBD',
      },
      blue: {
        blizzard: '#9FD7EA',
      },
      gray: {
        DEFAULT: '#A6A6A6',
        100: '#F3F4F6'
      },
      black: '#000000',
      white: '#FFFFFF',
      red: '#CC071E',
      green: '#399B60',
    },
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
      secondary: ['Lato', 'sans-serif'],
    },
    screens: {
    'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1680px',
      '1240': '1240px',
    },
    extend: {
      sizing: {
        grid: {
          container: '90rem',
        },
      },
    },
  },
  plugins: [],
}

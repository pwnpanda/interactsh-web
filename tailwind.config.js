/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      flex: {
        auto: '2 1 auto',
      },
      keyframes: {
        width: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        width: 'width 2s ease-out infinite',
      },
    },
    transitionDuration: {
      fast: '300ms',
      DEFAULT: '500ms',
      slow: '700ms',
    },
    fontFamily: {
      primary: ['Nunito Sans', 'sans-serif'],
    },
    boxShadow: {
      DEFAULT: '0 -2px 10px rgba(0, 0, 0, 1)',
      none: 'none',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      bold: '600',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFF',
      black: '#121212',
      accent: 'rgba(149,90,231,100)',
      gray: {
        light: '#979797',
        DEFAULT: 'rgba(216, 216, 216, 0.17)',
        dark: '#202020',
      },
      success: {
        light: 'rgba(61,255,206,.19)',
        DEFAULT: '#3DFFCE',
      },
      danger: {
        light: 'rgba(207,87,87,.17)',
        DEFAULT: '#FF7777',
      },
      info: {
        DEFAULT: '#5A52FF',
      },
    },
  },
  plugins: [],
};

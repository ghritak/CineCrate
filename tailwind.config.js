/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xxs: '400px',
      xs: '500px',
      sm: '640px',
      md: '768px',
      n: '900px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    fontSize: {
      xxs: '0.4rem',
      xs: '0.6rem',
      sm: '0.8rem',
      md: '1rem',
      lg: '1.2rem',
      xl: '1.4rem',
      '2xl': '1.6rem',
      '3xl': '1.9rem',
      '4xl': '2.5rem',
      '5xl': '3.0rem',
    },
    extend: {},
  },
  plugins: [],
};

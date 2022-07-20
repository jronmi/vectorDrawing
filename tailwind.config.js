/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index'], // remove dead/unused css files
  mode: 'jit', // just in time compilation
  content: ["./client/**/*.{html,js,jsx}"],
  plugins: [],
  theme: {
    screens: {
      sm: '4px',
      md: '8px',
      lg: '16px',
      xl: '24px'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {

      },
      borderRadius: {

      },
      colors: {
        primary: '#396dff',
        secondary: '#ccdaff',
        canvas: "#f5f5f5"      
      },
    }
  }
}

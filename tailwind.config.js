/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Alegreya_Sans: 'Alegreya Sans',
        portfolio: ['Inter', 'Segoe UI', 'Arial', 'sans-serif']
      },
      colors: {
        // primary: '#0E1630',
        primary: '#212737',

        secondary: '#EB4A4A',
        portfolio: {
          card: '#283044',
          surface: '#303A50',
          border: '#424C65',
          ink: '#F6F7FC',
          muted: '#A6B0C6'
        }
      }
    }
  }
}

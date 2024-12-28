/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 3s ease-in-out infinite',
        wiggle: 'wiggle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' },
        },
      },
      fontFamily: {
        GoogleI: ['Poppins'],
      },
      colors: {
        customNavy: '#2A3663',
        customBrown: '#B59F78',
        customSage: '#D8DBBD',
        customBiege: '#FAF6E3',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // Add the scrollbar plugin
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-gradient': 'linear-gradient(90deg, #ff0000, #00ff00)',
      },
      colors:{
        'deep-purple' : '#060120',
        'oxford-blue' : '#011936',
        'mint-cream':'#F4FFFD',
        'charcoal':'#465362',
        'naples-yellow':'#F9DC5C',
        'crayola-red': '#ED254E'

      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
    },
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'brown-dark': '#623B22',
      'brown': '#A67B5B',
      'brown-light': '#D8B48F',
      'nude': '#EAD2AC',
      'cream': '#FFE4C4',
    },
    fontFamily: {
      sans: ['"Birthstone Bounce"', 'sans-serif'],
      serif: ['Poly', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      backgroundImage: {
        'home-bg': 'url("/public/assets/sample1.png")',
      }
    }
  },
  plugins: [],
}


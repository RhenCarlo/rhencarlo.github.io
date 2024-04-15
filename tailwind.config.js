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
      'gray': '7A7A7A',
      'brown-dark': '#623B22',
      'brown': '#A67B5B',
      'brown-light': '#D8B48F',
      'nude': '#EAD2AC',
      'cream': '#FFE4C4',
    },
    fontFamily: {
      sans: ['Anastasia','"Birthstone Bounce"', 'sans-serif'],
      serif: ['Poly', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      backgroundImage: {
        'home-bg': 'url("https://lh3.googleusercontent.com/pw/AP1GczM16rOxa3SYoXCXBQeiODIVV5Mm7inoFuXq7VFL24rFm1QOOBhzVNLk82qhTwr-_RmbAZ_cNbEHgUbHzLlDLSLNx7BaHATApX8zef_w24J68FQEKH8=w2400")',
        'home-bg-sm': 'url("https://lh3.googleusercontent.com/pw/AP1GczMR949zr2Bqqg1g75jwWYI_PZEOfAVa083ELdzw5Ab4GKTgeJfhIodYPWeZs4-oKACVoy78h-7pQPIaIi3V8gpiKQs6uNS5H6I7Zkr97E2QfuW53h4=w2400")',
        'board': 'url(assets/background.jpg)'
      }
    }
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      maxWidth: {
        container: '1280px'
      },
      colors: {
        primary: '#EFB317',
        secondary: '#FFCD29'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/homepage-hero.jpg')",
        'footer-texture': "url('/img/footer-texture.png')"
      }
    }
  },
  plugins: []
}

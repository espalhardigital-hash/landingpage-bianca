/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030508',
          900: '#05080f',
          800: '#0a0f1a',
          700: '#0d1426',
          600: '#141e3a',
          500: '#1e2d4a'
        },
        glow: {
          lavender: '#C8B6FF',
          'lavender-dim': 'rgba(200,182,255,0.15)',
          mint: '#7DF9C4',
          'mint-dim': 'rgba(125,249,196,0.15)'
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B'
        },
        brand: {
          teal: '#08415c',        // Azul petróleo principal
          'teal-dark': '#052a3d',  // Azul petróleo oscuro para el texto
          'teal-light': '#edf4f7', // Fondo suave para las tarjetas
          coral: '#c84b31',        // Naranja / coral para los botones
          'coral-hover': '#b03d25',
          'light-bg': '#f4f8fa'    // Fondo general de la página clara
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif']
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem'
      },
      transitionDuration: {
        fast: '150ms',
        base: '300ms',
        slow: '500ms',
        'very-slow': '800ms'
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    },
  },
  plugins: [],
}

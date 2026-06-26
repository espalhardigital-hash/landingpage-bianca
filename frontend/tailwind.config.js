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
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif']
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

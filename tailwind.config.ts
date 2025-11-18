import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sheisai: {
          crimson: '#DD292F',
          coral: '#FF5050',
          softCoral: '#FF8585',
          mint: '#45FFCA',
          deepBlue: '#1B365D',
          warmBeige: '#EDDBD5',
          coolGrey: '#808080',
          black: '#000000',
          white: '#FFFFFF',
        },
        brand: {
          black: '#000000',
          red: {
            DEFAULT: '#DD292F',
            light: '#FF5050',
            lighter: '#FF8585',
          },
          neutral: {
            soft: '#EDDBD5',
            gray: '#d9d9d9',
            white: '#ffffff',
          },
          accent: {
            teal: '#45FFCA',
            blue: '#1B365D',
          },
        },
        primary: {
          50: '#ffebeb',
          100: '#ffd6d6',
          200: '#ffadad',
          300: '#FF8585',
          400: '#FF5050',
          500: '#DD292F',
          600: '#b62228',
          700: '#8f1b21',
          800: '#68141a',
          900: '#410d13',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

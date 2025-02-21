/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#334155',
            a: {
              color: '#7C3AED',
              '&:hover': {
                color: '#6D28D9',
              },
            },
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideDown: 'slideDown 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-in',
        spinSlow: 'spin 3s linear infinite',
        bounceIn: 'bounceIn 1s ease-out',
        pulse: 'pulse 2s ease-in-out infinite',
        shake: 'shake 0.6s ease-in-out',
        zoomIn: 'zoomIn 0.5s ease-in-out',
        slideLeft: 'slideLeft 0.5s ease-out',
        fadeInScale: 'fadeInScale 0.5s ease-out',
        flip: 'flip 0.8s ease-in-out',
        wiggle: 'wiggle 1s ease-in-out infinite',
        flash: 'flash 1s ease-in-out infinite',
        rubberBand: 'rubberBand 1s ease-out',
        heartBeat: 'heartBeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: 0 },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '50%': { transform: 'translateX(4px)' },
          '75%': { transform: 'translateX(-4px)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeInScale: {
          '0%': { opacity: 0, transform: 'scale(0.5)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
        },
        flash: {
          '0%, 50%, 100%': { opacity: 1 },
          '25%, 75%': { opacity: 0 },
        },
        rubberBand: {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.25)' },
          '50%': { transform: 'scale(0.75)' },
          '75%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' },
        },
        heartBeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '57%': { transform: 'scale(1)' },
          '71%': { transform: 'scale(1.3)' },
          '85%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
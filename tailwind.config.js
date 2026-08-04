/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'secunova-dark': '#101928',
        'secunova-blue': '#2563EB',
        'secunova-light': '#037ecc',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      minHeight: {
        'screen-75': '75vh',
        'screen-50': '50vh',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },
    },
    typography: {
      DEFAULT: {
        css: {
          maxWidth: 'none',
          color: '#374151',
          h1: {
            color: '#111827',
            fontWeight: '700',
          },
          h2: {
            color: '#1f2937',
            fontWeight: '700',
          },
          h3: {
            color: '#1f2937',
            fontWeight: '600',
          },
          a: {
            color: '#2563eb',
            '&:hover': {
              color: '#1e40af',
            },
          },
          pre: {
            backgroundColor: '#1f2937',
            color: '#e5e7eb',
            borderRadius: '0.375rem',
          },
          code: {
            color: '#1f2937',
            backgroundColor: '#f3f4f6',
            paddingLeft: '0.25rem',
            paddingRight: '0.25rem',
            paddingTop: '0.125rem',
            paddingBottom: '0.125rem',
            borderRadius: '0.25rem',
          },
          'code::before': {
            content: '""',
          },
          'code::after': {
            content: '""',
          },
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
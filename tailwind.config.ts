import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        textDefault: '#131117',
        textPrimary: '#5913F3',
        textSecondary: '#8F6AF0',
        textSubdued: '#6D6A73',
        textDisabled: '#46434D',
        textLightPurple: '#D6BCFA',
        basePrimary: '#5913F3',
        baseSecondary: '#9668F8',
        basePrimaryFaded: '#E9DFFF',
        iconSubdued: '#6D6A73',
        borderDefault: '#1412171F',
        borderSubdued: '#14121714',
        borderLightDefault: '#FFFFFF17',
        surfaceDefault: '#13111704',
        surfaceSubdued: '#13111708',
        backgroundDefault: '#131117',
        backgroundLighter: '#1F1D24',
        backgroundLightest: '#26242B',
        backgroundOverlay: '#FFFFFF08',
        backgroundLight: '#1E1C21',
        backgroundSurfaceDefault: '#FFFFFF0A',
        gradientPurpleBg: '#5913F31A',
        white: '#fff',
        alert: '#ff5555',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        proxima: ['proxima-nova', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        '440': '440px',
        '475': '475px',
      },
      maxHeight: {
        halfScreen: '50vh',
        halfFull: '50%',
        '250': '250px',
        '200': '200px',
      },
      boxShadow: {
        'inset-dark': 'inset 0 0 100px 110px #131117',
        'inset-purple': 'inset 0 0 100px 110px #131117',
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)',
        },
      });
    },
  ],
};
export default config;

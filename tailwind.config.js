module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  './public/**/*.astro',
  'node_modules/preline/dist/*.js',],
  theme: {
    extend: {
      colors: {
        orange: '#FF782D',
        gray: '#555555',
        lightgray: '#EAEAEA',
        footer: '#F5F5F5',
      },
      fontWeight: {
          med: '550',
      },
      animation:{
        fadeLeft: 'fadeOut 1s ease-in-out',
        slideUp: 'slideIn 1s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { color: 'transparent', transform: 'translateX(-100%)' },
          '100%': { color: theme('black'), transform: 'translateX(0)' },
        },
        slideIn: {
          '0%': { color: 'transparent', transform: 'translateY(100%)' },
          '100%': { color: theme('black'), transform: 'translateY(0)' },
        },
      }),
    },
  },
  plugins: [      
    require('preline/plugin'),
],
};

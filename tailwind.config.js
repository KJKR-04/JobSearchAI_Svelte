module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(0px)' }
        },
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 1s ease-in-out infinite',
        appear: 'appear 1s ease',
        fadeInScroll: 'fadeIn linear forwards',

      },
    },
  },
  plugins: [],
};
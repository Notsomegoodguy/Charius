
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ensure this path correctly points to your HTML/JS files
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {
      keyframes: {
        'infinite-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'infinite-scale': 'infinite-scale 3s ease-in-out infinite',
      },
    },
  },
 plugins: [
    require('tailwindcss-clipper')({
        // Optional: you can add a dedicated plugin for better support
    }),
  ],
};
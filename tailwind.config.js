
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ensure this path correctly points to your HTML/JS files
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {
      // THIS is where we will add the custom clip-path next
      fontFamily: {
        sans:['"Poppins"', 'Sans-serif'],
      }
    },
  },
 plugins: [
    require('tailwindcss-clipper')({
        // Optional: you can add a dedicated plugin for better support
    }),
  ],
};
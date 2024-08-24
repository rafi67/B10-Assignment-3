/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'discuss': "url('../assets/bg.jpg')",
        }
      },
    },
    plugins: [],
  }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("flowbite/plugin"),
    require('@tailwindcss/line-clamp'),
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter',
        display: ["var(--font-sf)", "system-ui", "sans-serif"],
        default: ["var(--font-inter)", "system-ui", "sans-serif"],        
      },
      backgroundImage: {
        'bg-img-1': "url('../img/bg-img-1.png')",
        'bg-img-2': "url('../img/bg-img-2.png')",
      }
    },
  }
  ,
  plugins: [require('@tailwindcss/line-clamp')],
}
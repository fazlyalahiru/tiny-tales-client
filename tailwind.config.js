/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        logo: ['Nunito'], 
        fancy: ['Pangolin'], 
        bubble: ['Bubblegum Sans']
      }
    },
  },
  plugins: [require("daisyui")],
}


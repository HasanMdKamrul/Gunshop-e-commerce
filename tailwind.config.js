/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#eded4e",
        
"secondary": "#f9b3bc",
        
"accent": "#f9c0ef",
        
"neutral": "#271627",
        
"base-100": "#3C3B3F",
        
"info": "#56CDEB",
        
"success": "#1C978B",
        
"warning": "#CF9A07",
        
"error": "#F60E3C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

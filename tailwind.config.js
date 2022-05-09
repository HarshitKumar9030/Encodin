module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Poppins, sans-serif'],
        'main': [''],
      },
      colors: {
        'regal-blue': '#081B4B',
        'regal-blue-light': '#0E2C6D',
        'regal-blue-dark': '#0A1B4B',
        'light-gray': '#c0c2d3',
        'light-text-gray': '#4d5b7c',
        'cyan-text': 'rgb(18, 83, 250)',
        'gray-hover-bg': 'rgb(227, 232, 244)',
        'gray-light': 'rgb(214, 220, 234)'
      },
    },
   
  },
  plugins: [],
}
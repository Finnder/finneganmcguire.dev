module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
      screens: {
          'sm': {'min':'0px', 'max': '490px'},
          'md': {'min':'491px', 'max': '1023px'},
      'lg': {'min':'1024px', 'max': '1279px'},
      'xl': {'min':'1280px', 'max': '1535px'},
    },
      extend: {
        colors: {
            primary: '#202225',
            secondary: '#5865f2'
        }
      },
  },
  plugins: [],
}

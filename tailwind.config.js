const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#8FC045',
        footerBg: '#262F39',
        footerContact: '#657384',
        title: '262F39',
        howItWorksBg: '#f4f9ec'
      },
      fontFamily: {
        arial: 'arial',
      }
    },
  },
  plugins: [],
});
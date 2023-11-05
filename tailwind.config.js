const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.jsx',
    './components/**/*.jsx',
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
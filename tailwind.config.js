/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    screens: {
      'sm': {'max': '760px'},
      'lg': {'max': '1536px', 'min':'761px'}
    },
    extend: {
      colors: {
        primary: "#00041C",
        secondary: "#37A2D0",
        tertiary: "#151030",
        rare:'#BCC6BE',
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      borderColor: ["responsive",'hover', 'focus'],
      borderWidth: ["responsive",'hover', 'focus'],
      textDecoration: ['responsive', 'hover', 'focus'],
    },
  },
  variants:{
      width: ["responsive", "hover", "focus"]
    },
  plugins: [],
}

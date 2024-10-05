/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    screens: {
			'sm': {'max': '767px'},
			'md': {'min': '768px','max': '1023px'},
			'lg': {'min':'1024px'}
		},
    extend: {
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)'
          }
        }
      },
      animation: {
        'border-spin': "border-spin 7s linear infinite"
      },
      colors: {
        primary: "#050d21",
        secondary: "#ecb34a",
        rare: "#07132e"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  variants:{
      width: ["responsive", "hover", "focus"]
    },
  plugins: [],
}

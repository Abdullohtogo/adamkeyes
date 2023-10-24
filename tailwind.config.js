module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green : {
          DEFAULT: "#4EE1A0",
          100: "#389268"
        },
        white: {
          DEFAULT: '#fff'
        },
        dark: {
          DEFAULT: "#151515",
          100: "#242424"
        },
        gray: {
          DEFAULT: "#d9d9d9"
        }
      }
    },
    screens:{
      xs:'360px',
      sm:'540px',
      md:'710px',
      lg:'940px',
      xl:'1100px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

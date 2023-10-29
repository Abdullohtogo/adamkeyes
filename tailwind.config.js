const plugin = require('tailwindcss/plugin')

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
          DEFAULT: "#ffffff"
        }
      }
    },
    screens:{
      xs:'320px',
      sm:'540px',
      md:'710px',
      lg:'940px',
      xl:'1100px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addVariant, theme }) => {
      const groups = theme('groups') || []

      groups.forEach((group) => {
        addVariant(`group-${group}-hover`, () => {
          return `:merge(.group-${group}):hover &`
        })
      })
    })
  ],
};

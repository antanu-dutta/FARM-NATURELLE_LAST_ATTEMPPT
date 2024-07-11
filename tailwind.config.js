/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        playFair: ["Playfair Display", "san-serif"],
        satisfy: ["Satisfy", "cursive"]
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      colors: {
        primary: "#006944",
        "faded-black": "#333333",
        pear: "#cbd82d",
        beige: "#f2f7e3",
        "greenish-beige": "#bcd871",
        para: "#d6d6d6",
        brown: "#855245",
        orange: "#df6857",
        title: "#687469"
      },
      fontSize: {
        normal: "15px",
        low: "13px",
        big: "40px"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      }
    },
  },
  plugins: [],
}


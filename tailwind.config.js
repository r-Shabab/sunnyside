/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navBlue: "#3ebfff",
        navHoverBlue: "#6fcfff",
        softRed: "hsl(7, 99%, 70%)",
        softYellow: "hsl(51, 100%, 49%)",
        darkCyan: {
          desaturated: "hsl(167, 40%, 24%)",
          moderate: "hsl(168, 34%, 41%)",
          footer: "#90d4c5",
          footerText: "#2d7665",
        },
        darkBlue: {
          default: "hsl(198, 62%, 26%)",
          desaturated: "hsl(212, 27%, 19%)",
          grayish: "hsl(213, 9%, 39%)",
        },
        grayishBlue: "hsl(210, 4%, 67%)",
        veryDarkGrayishBlue: "hsl(213, 9%, 39%)",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      fontSize: {
        body: "18px",
      },
      fontFamily: {
        barlow: ["barlow"],
        fraunces: ["fraunces"],
      },
      fontWeight: {
        700: "700",
        900: "900",
      },
    },
  },
  plugins: [],
};

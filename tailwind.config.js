module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    fontSize: {
      'xs': '.75em',
      'sm': '.875em',
      'tiny': '.875em',
      'base': '1em',
      'lg': '1.125em',
      'xl': '1.25em',
      '2xl': '1.5em',
      '3xl': '1.875em',
      '4xl': '2.25em',
      '5xl': '3em',
      '6xl': '4em',
      '7xl': '5em',
    },
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Poppins", "sans-serif"]
    },
    extend: {
      zIndex: {
        "back" : "-1"
      },
      width: {
        "screen-60" : "60vw",
        "screen-65" : "65vw",
        "screen-70" : "70vw",
        "screen-75" : "75vw",
        "screen-80" : "80vw",
        "screen-85" : "85vw",
        "screen-90" : "90vw"
      },
      height: {
        "screen-30" : "30vh",
        "screen-50" : "50vh",
        "screen-60" : "60vh"
      },
      minHeight: {
        "quarter" : "25vh",
        "half" : "50vh"
      },
      colors: {
        "transparent-dark" : "#222222A1",
        "light-dark" : "#323232",
        "dark" : "#222222",
        "darker" : "#1F1F1F",
        "primary" : "#F26C4F",
        "primary-light" : "#F26C4F",
        "accent" : "#00FFBB"
      },
      inset: {
        "screen-width" : "100vw"
      }
    }
  },
  variants: {},
  plugins: [],
}

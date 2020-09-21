module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Poppins", "sans-serif"]
    },
    extend: {
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
        "light-dark" : "#292929",
        "dark" : "#222222",
        "darker" : "#1F1F1F",
        "primary" : "#F26C4F"
      },
      inset: {
        "screen-width" : "100vw"
      }
    }
  },
  variants: {},
  plugins: [],
}

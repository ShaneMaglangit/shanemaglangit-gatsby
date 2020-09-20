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
      height: {
        "screen-60" : "60vh"
      },
      minHeight: {
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

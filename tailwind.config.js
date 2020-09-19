module.exports = {
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Poppins", "sans-serif"]
    },
    extend: {
      height: {
        "half" : "75vh"
      },
      minHeight: {
        "half" : "50vh"
      },
      colors: {
        "light-dark" : "#292929",
        "dark" : "#222222",
        "darker" : "#1F1F1F",
        "primary" : "#F26C4F"
      }
    }
  },
  variants: {},
  plugins: [],
}

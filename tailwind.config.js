module.exports = {
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Poppins", "sans-serif"]
    },
    extend: {
      minHeight: {
        "half" : "50vh"
      },
      colors: {
        "dark" : "#222222",
        "darker" : "#1F1F1F"
      }
    }
  },
  variants: {},
  plugins: [],
}

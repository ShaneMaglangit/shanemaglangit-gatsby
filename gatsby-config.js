const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "Shane Maglangit | Software Developer",
    author: "Shane Maglangit",
    description: "A software developer based on the Philippines.",
  },
  plugins: [
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-portal",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Shane Maglangit | Software Developer",
        short_name: "Shane Maglangit",
        start_url: "/",
        background_color: theme.colors.white,
        theme_color: theme.colors.teal[500],
        icon: "static/icon.svg",
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  ],
}

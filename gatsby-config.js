const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "Shane Maglangit | Software Developer",
    author: "Shane Maglangit",
    description: "I am Shane Francis Maglangit, a software developer that is based on the Philippines.",
  },
  plugins: [
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-portal",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    `gatsby-plugin-stylus`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-less`,
    `gatsby-plugin-postcss`,
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./content/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/images/",
      },
    },{
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-174153749-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false
      }
    },
  ],
}

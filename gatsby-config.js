require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl = process.env.URL || `https://glacier.nz`

module.exports = {
  siteMetadata: {
    siteUrl: `https://glacier.nz`
  },
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-image", "gatsby-plugin-react-helmet","gatsby-plugin-sitemap","gatsby-plugin-advanced-sitemap", 
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-facebook-pixel`,
    options: {
      pixelId: "265514184734616",
    },
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-8DKZL1G63Q", // Google Analytics / GA
        "GTM-58BSLR5",

      ],
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
        origin: "https://www.googletagmanager.com",
      },
    },
  },
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-58BSLR5",
      // Include GTM in development.
      //
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      //
      // Defaults to null
      defaultDataLayer: { platform: "gatsby" },
    },
  },
]

};
const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Cookie Daughters`,
    description: `Custom Cookies Made to Order`,
    author: `kyle@kyle-richey.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-minify`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/public/**/*.html": [
            "cache-control: public",
            "cache-control: max-age=0",
            "cache-control: must-revalidate"
          ],
          "/public/page-data/*": [
            "cache-control: public",
            "cache-control: max-age=0",
            "cache-control: must-revalidate"
          ],
          "/public/static/*": [
            "cache-control: public",
            "cache-control: max-age=31536000",
            "cache-control: immutable"
          ],
          "/public/*.js": [
            "cache-control: public",
            "cache-control: max-age=31536000",
            "cache-control: immutable"
          ],
          "/public/*.css": [
            "cache-control: public",
            "cache-control: max-age=31536000",
            "cache-control: immutable"
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cookie-daughters`,
        short_name: `Home Page`,
        start_url: `/`,
        background_color: `#A5DAC8`,
        theme_color: `#A5DAC8`,
        display: `minimal-ui`,
        icon: `src/images/cookie-icon.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        verbose: true,
        apiVersion: '2020-07'
      },
    },
    {
      resolve: `gatsby-source-flickr`,
      options: {
        api_key: process.env.FLICKR_API_KEY,
        user_id: process.env.FLICKR_USER_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134421805-1",
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open Sans Condensed\:300`,
          `Open Sans Condensed\:700`,
          `BenchNine`,
          `BenchNine\:700`
        ],
        display: 'swap'
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

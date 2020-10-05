module.exports = {
  siteMetadata: {
    title: `Greg Kluska`,
    description: `Greg Kluska Portfolio`,
    author: `@GregKluska`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Greg Kluska Portfolio`,
        short_name: `Greg Kluska`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '~src': 'src',
          '~components': 'src/components',
          '~styles': 'src/styles',
          '~util': 'src/util',
        },
        extensions: ['js'],
      },
    },
    `gatsby-plugin-scroll-reveal`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

module.exports = {
  siteMetadata: {
    title: `Acme`,
    description: ` Khoá học duy nhất về Bug Hunting với những kiến thức chuyên môn một cách trực quan, dễ hiểu.`,
    author: `Acme Inc.`,
  },
  plugins: [
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Acme`,
        short_name: `acme`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/cbjs-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

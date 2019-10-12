module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`
  ],
}

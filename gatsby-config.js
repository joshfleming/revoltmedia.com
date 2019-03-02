module.exports = {
  siteMetadata: {
    title: `Revolt Media`
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `y3vpeex0g3xs`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-remark`
  ],
}

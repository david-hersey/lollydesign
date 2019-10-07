require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  pathPrefix: '/lollydesign',
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `david-hersey`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => page => `/${page.uid}`,
      },
    },
  ],
}

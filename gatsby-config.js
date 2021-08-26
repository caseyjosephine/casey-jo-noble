module.exports = {
  siteMetadata: {
    siteUrl: "https://caseyjonoble.com",
    title: "Casey Jo Noble | Wine Professional | Part-time Jedi",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp", 
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
],
};

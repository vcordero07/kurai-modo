/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `kurai-modo`,
    description: `Kurai Modo`,
    author: `@vcordero07`,
    twitterUsername: '@vcordero07',
    image: 'mainBcg.png',
    siteUrl: 'https://kurai-modo.vercel.app',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark-mode',
        classNameLight: 'light-mode',
        storageKey: 'darkMode',
        minify: true,
      },
    },
  ],
}

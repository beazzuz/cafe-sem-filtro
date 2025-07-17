/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
   
      title: "Café Sem Filtro", 
      description: "Uma experiência artesanal com café.",
      author: "@beazzuz",
      siteUrl: "https://cafe-sem-filtro.onrender.com",
    
  },
  plugins: [
     `gatsby-plugin-typescript`,
     `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
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
      
            name: "Café Sem Filtro",
            short_name: "Cafe",
            start_url: "/",
            background_color: "#ffffff",
            theme_color: "#462c17",
            display: "standalone",
            icon: "src/images/logo_icon.png", 
          
      },
    
      resolve: `gatsby-plugin-robots-txt`,
        options: {
          policy: [{ userAgent: '*', allow: '/' }],
          sitemap: 'https://www.seusite.com/sitemap.xml',
        },
      
      
      
    },
  ],
}

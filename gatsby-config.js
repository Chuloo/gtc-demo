require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: `Ten Brushes Gallery`,
        description: `An art gallery demoing the use of Gatsby-Transformer-Cloudinary`,
        author: `William Imoh`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `cloudinary-images`,
                path: `${__dirname}/src/cloudinary-images`,
            }
        },
        {
            resolve: 'gatsby-transformer-cloudinary',
            options: {
                cloudName: process.env.CLOUDINARY_CLOUD_NAME,
                apiKey: process.env.CLOUDINARY_API_KEY,
                apiSecret: process.env.CLOUDINARY_API_SECRET,
                uploadFolder: 'gtc-art-gallery',
            },
        },
        {
            resolve: `gatsby-plugin-chakra-ui`,
            options: {
                isUsingColorMode: true,
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-offline`,
    ],
}

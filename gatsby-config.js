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
                name: `Ten Brushes Gallery`,
                short_name: `Ten Brushes`,
                start_url: `/`,
                background_color: `#082254`,
                theme_color: `#082254`,
                display: `fullscreen`,
                icon: `src/images/tbg-image.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-offline`,
    ],
}

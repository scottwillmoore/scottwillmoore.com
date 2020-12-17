module.exports = {
    siteMetadata: {},
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `articles`,
                path: `${__dirname}/src/posts`,
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require(`sass`),
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [],
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ],
};

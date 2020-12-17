const sass = require("sass");

module.exports = {
    siteMetadata: {
        title: "",
        description: "",
        author: "",
    },
    plugins: [
        /*
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "articles",
                path: `${__dirname}/src/articles/`,
            },
        },
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
                path: `${__dirname}/src/articles/`,
            },
        },
        */
        {
            resolve: "gatsby-plugin-sass",
            options: {
                implementation: sass,
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-react-helmet",
    ],
};

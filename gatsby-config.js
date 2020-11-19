const sass = require("sass");

module.exports = {
    siteMetadata: {
        title: "",
        description: "",
        author: "",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-sass",
            options: {
                implementation: sass,
            },
        },
    ],
};

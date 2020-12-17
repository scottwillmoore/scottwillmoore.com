const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
    const result = await graphql(`
        query {
            allMdx {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `);

    result.data.allMdx.edges.forEach(({ node }, index) => {
        actions.createPage({
            path: `/${node.slug}`,
            component: path.resolve("./src/templates/Post.jsx"),
            context: { id: node.id },
        });
    });
};

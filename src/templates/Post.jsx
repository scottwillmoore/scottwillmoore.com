import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/Layout";

import styles from "./Post.module.scss";

export default function Post({ data }) {
    const { title, date, tags } = data.mdx.exports.metadata;
    return (
        <Layout>
            <h1 class={styles.title}>{title}</h1>
            <div class={styles.tagList}>
                {tags.map(tag => (
                    <a class={styles.tag} href="#">
                        {tag}
                    </a>
                ))}
            </div>
            <p class={styles.date}>{date}</p>

            <div class={styles.content}>
                <MDXProvider>
                    <MDXRenderer>{data.mdx.body}</MDXRenderer>
                </MDXProvider>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query Post($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            exports {
                metadata {
                    title
                    date(formatString: "MMMM D, YYYY")
                    tags
                }
            }
        }
    }
`;

import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/Layout";

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 900;
    margin: 0 0 2rem 0;
`;

const Tag = styled.a`
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 700;
    text-decoration: none;
    color: #ffffff;
    background-color: #4d4d4d;
`;

const Date = styled.p`
    font-size: 0.75rem;
    font-weight: 700;
    color: #4d4d4d;
`;

export const pageQuery = graphql`
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

export default function Article({ data }) {
    const { title, date, tags } = data.mdx.exports.metadata;
    return (
        <Layout>
            <Title>{title}</Title>
            <div>
                {tags.map(tag => (
                    <Tag href="#">{tag}</Tag>
                ))}
            </div>
            <Date>{date}</Date>

            <div>
                <MDXProvider>
                    <MDXRenderer>{data.mdx.body}</MDXRenderer>
                </MDXProvider>
            </div>
        </Layout>
    );
}

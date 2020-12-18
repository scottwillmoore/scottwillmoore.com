import React from "react";
import styled from "styled-components";

const LinkList = styled.ul`
    margin: 1rem 0;
    padding: 0;
`;

const Link = styled.li`
    display: inline-block;
    margin-right: 2rem;
    font-size: 1.125rem;
    font-weight: 700;
    list-style: none;
    text-decoration: none;
    color: #666666;
`;

export default function Navigation() {
    const links = [`Articles`, `Projects`, `About`];
    return (
        <LinkList>
            {links.map(link => (
                <Link href="#">{link}</Link>
            ))}
        </LinkList>
    );
}

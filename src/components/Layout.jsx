import React from "react";
import styled from "styled-components";

import Metadata from "./Metadata";
import Inter from "../fonts/Inter";
import Stylesheet from "./Stylesheet";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 48rem;
    height: 100%;
    margin: 0 auto;
`;

const Content = styled.div`
    flex: 1;
    height: 100%;
`;

export default function Layout({ children }) {
    return (
        <>
            <Metadata />

            <Inter />
            <Stylesheet />

            <Container>
                <Header />
                <Content>{children}</Content>
                <Footer />
            </Container>
        </>
    );
}

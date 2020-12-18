import React from "react";
import styled from "styled-components";

import Metadata from "./Metadata";
import Stylesheet from "./Stylesheet";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 48rem;
    margin: 0 auto;
`;

export default function Layout({ children }) {
    return (
        <>
            <Metadata />
            <Stylesheet />

            <Container>
                <Header />
                {children}
                <Footer />
            </Container>
        </>
    );
}

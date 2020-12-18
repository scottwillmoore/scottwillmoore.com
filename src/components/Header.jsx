import React from "react";
import styled from "styled-components";

import Logo, { LogoSize, LogoMode } from "./Logo";
import Navigation from "./Navigation";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    margin: 2rem 0;
`;

export default function Header() {
    return (
        <Container>
            <Logo size={LogoSize.Large} mode={LogoMode.Interactive} />
            <Navigation />
        </Container>
    );
}

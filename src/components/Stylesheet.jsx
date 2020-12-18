import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*:before,
*:after,
* {
    box-sizing: border-box;
}

html {
    font-family: "Inter", sans-serif;
}

@supports (font-variation-settings: normal) {
    html {
        font-family: "Inter var", sans-serif;
    }
}

body {
    margin: 0;
}

html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
}
`;

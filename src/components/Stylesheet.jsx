import { createGlobalStyle } from "styled-components";

import InterVariableWoff2 from "../fonts/Inter-Variable.woff2";

// TODO: Migrate all font-faces...

export default createGlobalStyle`
@font-face {
    font-family: "Inter var";
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
    font-named-instance: "Regular";
    src: url(${InterVariableWoff2}) format("woff2");
}

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
`;

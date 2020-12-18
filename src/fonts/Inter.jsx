import { createGlobalStyle } from "styled-components";

import InterRegular from "./InterRegular.woff";
import InterRegularItalic from "./InterRegular.woff";
import InterRegular2 from "./InterRegular.woff2";
import InterRegularItalic2 from "./InterRegular.woff2";

import InterBold from "./InterBold.woff";
import InterBoldItalic from "./InterBoldItalic.woff";
import InterBold2 from "./InterBold.woff2";
import InterBoldItalic2 from "./InterBoldItalic.woff2";

import InterVariable2 from "../fonts/InterVariable.woff2";
import InterVariableItalic2 from "../fonts/InterVariableItalic.woff2";

export default createGlobalStyle`
@font-face {
  font-family: "Inter";
  font-style:  normal;
  font-weight: 400;
  font-display: swap;
  src: url(${InterRegular2}) format("woff2"),
       url(${InterRegular}) format("woff");
}
@font-face {
  font-family: "Inter";
  font-style:  italic;
  font-weight: 400;
  font-display: swap;
  src: url(${InterRegularItalic2}) format("woff2"),
       url(${InterRegularItalic}) format("woff");
}

@font-face {
  font-family: "Inter";
  font-style:  normal;
  font-weight: 700;
  font-display: swap;
  src: url(${InterBold2}) format("woff2"), url(${InterBold}) format("woff");
}
@font-face {
  font-family: "Inter";
  font-style:  italic;
  font-weight: 700;
  font-display: swap;
  src: url(${InterBoldItalic2}) format("woff2"), url(${InterBoldItalic}) format("woff");
}

@font-face {
    font-family: "Inter var";
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    font-named-instance: "Regular";
    src: url(${InterVariable2}) format("woff2");
}
@font-face {
    font-family: "Inter var";
    font-style: italic;
    font-weight: 100 900;
    font-display: swap;
    font-named-instance: "Regular";
    font-named-instance: "Italic";
    src: url(${InterVariableItalic2}) format("woff2");
}
`;

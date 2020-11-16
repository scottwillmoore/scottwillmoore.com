import React from "react";

import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";

export default ({ children }) => (
    <>
        <Meta></Meta>
        <Header></Header>
        {children}
        <Footer></Footer>
    </>
);

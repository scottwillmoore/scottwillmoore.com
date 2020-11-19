import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import "../styles/index.scss";
import "./Layout.scss";

export default ({ children }) => (
    <div className="layout">
        <Header></Header>
        {children}
        <Footer></Footer>
    </div>
);

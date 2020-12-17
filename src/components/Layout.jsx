import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import styles from "./Layout.module.scss";

import "../styles/index.scss";

export default ({ children }) => (
    <div class={styles.layout}>
        <Header></Header>
        {children}
        <Footer></Footer>
    </div>
);

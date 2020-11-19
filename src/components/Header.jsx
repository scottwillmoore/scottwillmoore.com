import React from "react";

import Logo from "./Logo";

import headerStyles from "./Header.module.scss";
import "./Header.scss";

export default () => (
    <div className={headerStyles.header}>
        <Logo />
    </div>
);

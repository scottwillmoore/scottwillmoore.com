import React, { useCallback, useEffect, useState } from "react";

import Logo, { LogoSize, LogoMode } from "./Logo";

import "./Header.scss";

const START_DELAY = 1 * 1000;
const HOLD_DELAY = 2 * 1000;

const forTimeout = delay => new Promise(resolve => setTimeout(resolve, delay));

export default function Header() {
    const logoSize = LogoSize.Huge;
    const [logoMode, setLogoMode] = useState(LogoMode.Contract);

    const doPresent = useCallback(async () => {
        await forTimeout(START_DELAY);
        setLogoMode(LogoMode.Expand);
        await forTimeout(HOLD_DELAY);
        setLogoMode(LogoMode.Interactive);
    }, []);

    useEffect(() => {
        doPresent();
    }, [doPresent]);

    return (
        <div className="header">
            <Logo size={logoSize} mode={logoMode} />
        </div>
    );
}

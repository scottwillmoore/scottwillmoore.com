import React, { useEffect, useState } from "react";

import Logo, { LogoSize, LogoMode } from "./Logo";

import "./Header.scss";

const EXPAND_DELAY = 1 * 1000;
const INTERACT_DELAY = 2 * 1000;

const timeout = delay => new Promise(resolve => setTimeout(resolve, delay));

export default function Header() {
    const [logoMode, setLogoMode] = useState(LogoMode.Simplify);

    useEffect(() => {
        const run = async () => {
            await timeout(EXPAND_DELAY);
            setLogoMode(LogoMode.Expand);
            await timeout(INTERACT_DELAY);
            setLogoMode(LogoMode.Interact);
        };
        run();
    }, []);

    return (
        <div className="header">
            <Logo size={LogoSize.Large} mode={logoMode} />
        </div>
    );
}

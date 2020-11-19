import React, { useCallback, useState } from "react";

import "./Logo.scss";

// Mode: Hover, Simplified, Expanded.

export default function Logo() {
    const [mode, setMode] = useState("simplified");

    const handleEnter = useCallback(() => {
        console.log("enter");
        setMode("expanded");
    }, []);

    const handleLeave = useCallback(() => {
        console.log("leave");
        setMode("simplified");
    }, []);

    return (
        <svg
            onMouseDown={handleEnter}
            onMouseLeave={handleLeave}
            className={`logo logo-${mode}`}
            viewBox="0 0 56 16"
        >
            <circle className="s1" cx="2" cy="14" r="2"></circle>
            <line className="s2" x1="2" y1="2" x2="7" y2="14"></line>
            <circle className="s3" cx="2" cy="2" r="2"></circle>
            <line className="w1" x1="7" y1="2" x2="12" y2="14"></line>
            <line className="w2" x1="12" y1="2" x2="17" y2="14"></line>
            <circle className="w3" cx="12" cy="2" r="2"></circle>
            <circle className="m1" cx="17" cy="14" r="2"></circle>
            <line className="m2" x1="12" y1="2" x2="17" y2="14"></line>
            <line className="m3" x1="17" y1="2" x2="22" y2="14"></line>
        </svg>
    );
}

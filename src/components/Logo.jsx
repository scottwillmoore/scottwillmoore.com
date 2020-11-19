import React, { useCallback, useState } from "react";
import { useEffect } from "react";

import "./Logo.scss";

const HOLD_DURATION = 1 * 1000;

const SIMPLIFY_DELAY = 1 * 1000;
const EXPAND_DELAY = 1 * 1000;

// TODO: Fix logo hitbox.
// TODO: Fix pointer events on touch devices.
// TODO: Wait for simplfy animation to finish before expand can be triggered.
// TODO: Add different logo sizes.
// TODO: Clean up logo styles with CSS modules.

export const LogoSize = {
    Small: 0,
    Large: 1,
};

export const LogoMode = {
    Interact: 0,
    Simplify: 1,
    Expand: 2,
};

export default function Logo({
    size = LogoSize.Large,
    mode = LogoMode.Interact,
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isPointerOver, setIsPointerOver] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    useEffect(() => {
        if (isPointerOver) {
            clearTimeout(timeoutId);
        } else {
            const id = setTimeout(() => setIsExpanded(false), HOLD_DURATION);
            setTimeoutId(id);
        }
    }, [isPointerOver]);

    const handlePointerEnter = useCallback(() => {
        setIsPointerOver(true);
        setIsExpanded(true);
    }, []);

    const handlePointerLeave = useCallback(() => {
        setIsPointerOver(false);
    }, []);

    let modeClass;
    if (mode == LogoMode.Interact) {
        modeClass = isExpanded ? "expanded" : "simplifed";
    } else if (mode == LogoMode.Simplify) {
        modeClass = "simplified";
    } else if (mode == LogoMode.Expand) {
        modeClass = "expanded";
    }

    return (
        <svg
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            className={`logo logo-${modeClass}`}
            viewBox="0 0 24 16"
        >
            <rect
                className="hitbox"
                width="24"
                height="16"
                fill="transparent"
            ></rect>

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

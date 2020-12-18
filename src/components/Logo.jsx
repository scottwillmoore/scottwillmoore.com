import React, { useCallback, useEffect, useRef, useState } from "react";

import { timeout } from "../utilities/promise";
import useMouseOver from "../utilities/useMouseOver";
import usePrefersReducedMotion from "../utilities/usePrefersReducedMotion";

import "./Logo.scss";

// TODO: Consider refactor to TypeScript.
// TODO: Make mouse over work with mobile devices.

const ANIMATION_DELAY = 0.8 * 1000;
const HOLD_DELAY = 2 * 1000;

export const LogoMode = {
    Interactive: "interactive",
    Contract: "contract",
    Expand: "expand",
};

export const LogoSize = {
    Tiny: "tiny",
    Small: "small",
    Large: "large",
    Huge: "huge",
};

const State = {
    Contracted: 0,
    Expand: 1,
    Expanded: 2,
    Contract: 3,
};

export default function Logo({ mode = LogoMode.Interactive, size = LogoSize.Large }) {
    const [state, setState] = useState(State.Contracted);
    const [timeoutId, setTimeoutId] = useState(null);

    const ref = useRef();
    const mouseOver = useMouseOver(ref);

    const prefersReducedMotion = usePrefersReducedMotion();

    const doContract = useCallback(async () => {
        setState(State.Contract);
        await timeout(ANIMATION_DELAY);
        setState(State.Contracted);
    }, []);

    const doExpand = useCallback(async () => {
        setState(State.Expand);
        await timeout(ANIMATION_DELAY);
        setState(State.Expanded);
    }, []);

    useEffect(() => {
        if (prefersReducedMotion || mode == LogoMode.Contract) {
            doContract();
        } else if (mode === LogoMode.Expand) {
            doExpand();
        } else {
            if (mouseOver) {
                clearTimeout(timeoutId);
                if (state === State.Contracted) {
                    doExpand();
                }
            } else {
                if (state === State.Expanded) {
                    const id = setTimeout(async () => {
                        doContract();
                    }, HOLD_DELAY);
                    setTimeoutId(id);
                }
            }
        }
    }, [mode, state, mouseOver, prefersReducedMotion, doContract, doExpand]);

    const classNames = ["logo", `logo__${size}`];
    if (state === State.Expand || state === State.Expanded) {
        classNames.push("logo__expanded");
    }

    return (
        <svg ref={ref} className={classNames.join(" ")} viewBox="0 0 24 16">
            <defs>
                <circle id="dot" cx="0" cy="0" r="2" fill="white" />
                <line
                    id="slant"
                    x1="0"
                    y1="0"
                    x2="5"
                    y2="12"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
                <mask id="mask">
                    <use href="#dot" className="s1" x="2" y="14" />
                    <use href="#slant" className="s2" x="2" y="2" />
                    <use href="#dot" y="2" className="s3" x="2" />
                    <use href="#slant" className="w1" x="7" y="2" />
                    <use href="#slant" className="w2" x="12" y="2" />
                    <use href="#dot" className="w3" x="12" y="2" />
                    <use href="#dot" className="m1" x="17" y="14" />
                    <use href="#slant" className="m2" x="12" y="2" />
                    <use href="#slant" className="m3" x="17" y="2" />
                </mask>
            </defs>
            <rect className="mask" width="24" height="16" mask="url(#mask)" />
        </svg>
    );
}

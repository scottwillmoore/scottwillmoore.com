import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: no-preference)";

const isServer = typeof window === "undefined";

function getInitialState() {
    return isServer ? true : !window.matchMedia(QUERY).matches;
}

export default function usePrefersReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialState);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(QUERY);
        const listener = event => {
            setPrefersReducedMotion(!event.matches);
        };
        mediaQueryList.addEventListener("change", listener);
        return () => {
            mediaQueryList.removeEventListener("change", listener);
        };
    }, []);

    return prefersReducedMotion;
}

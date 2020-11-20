import { useEffect, useState } from "react";

export default function useMouseOver(ref) {
    const [mouseOver, setMouseOver] = useState(false);

    useEffect(() => {
        const { current } = ref;

        const handleMouseEnter = () => setMouseOver(true);
        const handleMouseLeave = () => setMouseOver(false);

        if (current) {
            ref.current.addEventListener("mouseenter", handleMouseEnter);
            ref.current.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (current) {
                ref.current.removeEventListener("mouseenter", handleMouseEnter);
                ref.current.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, [ref]);

    return mouseOver;
}

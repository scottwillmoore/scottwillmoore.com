export function timeout(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export function animationFrame() {
    return new Promise(resolve => requestAnimationFrame(resolve));
}

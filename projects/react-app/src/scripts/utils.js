function isBrowser() {

    // running on Node.js?
    if (typeof process === "object" &&
        typeof require === "function") {
        return false
    }

    // running in service worker?
    if (typeof importScripts === "function") {
        return false
    }

    // running in browser?
    if (typeof window === "object") {
        return true
    }
}

const getRadians = (degrees) => (Math.PI / 180) * degrees

let utils = {
    og: window.setImmediate, // Wrap tail calls with this to guard against stack overflows
    isBrowser,
    getRadians: getRadians,
}

// let overflowGuard = process.nextTick
// let overflowGuard = setImmediate
// let overflowGuard = (tc) => { setTimeout(tc, 0) }
// let overflowGuard = (tc) => { console.log(tc) }

export { utils }

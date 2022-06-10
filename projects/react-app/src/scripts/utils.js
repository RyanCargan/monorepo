import {useRef, useState, useEffect} from 'react'

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

const useEffectOnce = ( effect )=> {

    const destroyFunc = useRef();
    const effectCalled = useRef(false);
    const renderAfterCalled = useRef(false);
    const [val, setVal] = useState(0);
  
    if (effectCalled.current) {
        renderAfterCalled.current = true;
    }
  
    useEffect( ()=> {
  
        // execute once
        if (!effectCalled.current) { 
          destroyFunc.current = effect();
          effectCalled.current = true;
        }
  
        // forces render 1 render afterwards
        setVal(val => val + 1);
  
        return ()=> {
          // dummy React cycle detected if component doesn't render
          if (!renderAfterCalled.current) { return; }
          if (destroyFunc.current) { destroyFunc.current(); }
        };
    }, []);
  };

let utils = {
    og: window.setImmediate, // Wrap tail calls with this to guard against stack overflows
    isBrowser,
    getRadians: getRadians,
    useEffectOnce: useEffectOnce,
}

// let overflowGuard = process.nextTick
// let overflowGuard = setImmediate
// let overflowGuard = (tc) => { setTimeout(tc, 0) }
// let overflowGuard = (tc) => { console.log(tc) }

export { utils }

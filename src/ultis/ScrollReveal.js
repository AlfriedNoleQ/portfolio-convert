import React from 'react'
import scrollReveal from "scrollreveal";
import { useEffect, useRef } from 'react';

const ScrollReveal = ({children}) => {
    // connect React Node
    const sectionRef = useRef(null)
    
    //
    useEffect(() => {
        if (sectionRef.current) {
            scrollReveal().reveal(sectionRef.current, {
                origin: 'top',
                distance: '60px',
                reset: true,
                delay: 500
            });
        }
    }, []);
    return (
        <div ref={sectionRef}>
            {children}
        </div>
    )
}

export default ScrollReveal

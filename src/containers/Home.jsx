import React from 'react'

import { useEffect, useRef } from "react";
import Contact from "./Contact";
import Hero from "./Hero";
import Skills from "./Skills";
import Work from "./Work";

import { gsap, Power3 } from "gsap";

export default function Home() {
    var content = useRef(null)

    useEffect(() => {
      gsap.from(content, {
        duration: 1,
        opacity: 0,
        delay: 3,
        ease: Power3.easeOut
      })
    }, [])

    return (
        <div>
            <Hero />
            <div
            ref={e => {content = e}}>
            <Work />
            <div className="container">
                <Contact />
                <Skills/>
            </div>
            </div>
        </div>
    )
}

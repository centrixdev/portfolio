/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useRef } from 'react'
import { gsap, Power3 } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function Hero() {
    var command = useRef(null)
    var commandText = useRef(null)
    var hero = useRef(null)
    var heading = useRef(null)
    var subheading = useRef(null)

    useEffect(() => {
        gsap.from(command, {
            duration: 1,
            opacity: 0,
            y: -25,
            ease: Power3.easeOut
        })
        gsap.from(commandText, {
            duration: 2,
            delay: 1,
            text: {
                value: ""
            },
            ease: Power3.easeOut
        })
        gsap.from(hero, {
            duration: 1,
            delay: 3,
            opacity: 0,
            ease: Power3.easeOut
        })
        gsap.from(heading, {
            duration: 3,
            delay: 2,
            text: {
                value: ""
            },
            ease: Power3.easeInOut
        })
        gsap.from(subheading, {
            duration: 1.5,
            delay: 3,
            y: -25,
            ease: Power3.easeOut
        })
        gsap.to(command, {
            duration: 0.65,
            opacity: 0,
            y: -25,
            delay: 3,
            ease: Power3.easeOut
        })
    }, [])

    return (
        <div>
            <p 
              className="command"
              ref={e => {command = e}}
              > 
                <span className="command-name">dominik</span>
                :
                <span className="command-folder">portfolio</span>
                $  
                <span 
                  className="command-text"
                  ref={e => {commandText = e}}
                  > hire-me.txt</span>
            </p>
            <div
              ref={e => {hero = e}}>
                <h1 
                  className="heading"
                  ref={e => {heading = e}}>dominik</h1>
                <p 
                  className="subheading"
                  ref={e => {subheading = e}}>karlsruhe, germany <span className="small">  // as you may have noticed, the site isn't finished yet!</span></p>
              </div>

        </div>
    )
}

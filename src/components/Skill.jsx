import { gsap, Power3 } from "gsap";
import React, { useEffect, useRef } from 'react'

export default function Skill(props) {

    var skill = useRef(null)

    useEffect(() => {
        gsap.to(skill, {
            duration: 2.5,
            delay: 3.5,
            width: `${props.percent}%`,
            ease: Power3.easeOut
        })
    }, [props.percent])
    console.log(props)
    return (
        <div>
        <p className="skill-title">{props.title}</p>
        <div className="skill">
            <div 
              ref={e => { skill = e}}></div>
        </div>
        </div>
    )
}

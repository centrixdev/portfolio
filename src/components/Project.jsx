import gsap, { Power3} from 'gsap'
import React, { useEffect, useRef } from 'react'


export default function Project(props) {
    var project = useRef(null)

    const delay = 2.5 + parseInt(props.id) / 10
    console.log(delay)

    useEffect(() => {
        gsap.from(project, {
            duration: 2,
            delay: delay,
            x: 500,
            y: 100,
            ease: Power3.easeOut
        })
    })
    return (
        <li 
         key={props.id} 
         className="project"
         ref={e => { project = e}}>
            <img src={props.image} alt={props.description} />
    </li>
    )
}

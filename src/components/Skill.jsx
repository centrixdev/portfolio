import React, { useEffect } from 'react'

export default function Skill(props) {

    useEffect(() => {
        document.getElementById(`skill-grade-${props.id}`).style.width = `${props.percent}%`
    }, [props.percent, props.id])
    console.log(props)
    return (
        <div>
        <p className="skill-title">{props.title}</p>
        <div className="skill">
            <div id={`skill-grade-${props.id}`}></div>
        </div>
        </div>
    )
}

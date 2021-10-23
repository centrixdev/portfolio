/* eslint-disable react/jsx-no-comment-textnodes */
import React, {useRef, useEffect}  from 'react'
import Skill from '../components/Skill'
import { skills } from '../data'
import { gsap } from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin)

    

export default function Skills() {

    var skillComment = useRef(null)

    useEffect(() => {
        gsap.from(skillComment, { 
            duration: 1.5,
            delay: 3,
            text: { value: "// "}  
            })
        gsap.from(skillComment, { 
            duration: .5,
            delay: 3,
            y: 10
            })

    }, [])
    return (
        <div className="skills">
            <p 
              className="comment"
              ref={e => {skillComment = e}}>// skills</p>
            {skills.map(skill => { 
                return (
                    <Skill key={skill.id} id={skill.id} title={skill.title} percent={skill.percent} />
                )
                })
            }
        </div>
    )
}

/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Skill from '../components/Skill'
import { skills } from '../data'

export default function Skills() {
    return (
        <div className="skills">
            <p className="comment">// skills</p>
            {skills.map(skill => { 
                return (
                    <Skill key={skill.id} id={skill.id} title={skill.title} percent={skill.percent} />
                )
                })
            }
        </div>
    )
}

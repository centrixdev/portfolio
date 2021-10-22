/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { projects } from '../data'
import ScrollContainer from 'react-indiana-drag-scroll'


export default function Work() {
    return (
        <div className="work">
            <p className="comment">// work <span className="arrow">{'->'}</span></p>
            <ScrollContainer className="projects-container">
                {projects.map(project => { 
                    return (
                    
                    <li key={project.id} className="project">
                        <img src={project.image} alt={project.description} />
                    </li>
                )
                })}
            </ScrollContainer>
        </div>
    )
}

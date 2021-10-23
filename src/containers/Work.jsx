/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useRef } from 'react'
import { projects } from '../data'
import ScrollContainer from 'react-indiana-drag-scroll'
import { gsap } from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import Project from '../components/Project';

gsap.registerPlugin(TextPlugin)


export default function Work() {
    var work = useRef(null)

    useEffect(() => {
        gsap.from(work, { 
            duration: 1.5,
            delay: 3,
            text: { value: "// "}  
            })
        gsap.from(work, { 
            duration: .5,
            delay: 3,
            y: 10
            })


    }, [])

    return (
        <div className="work">
            <p 
            className="comment"
            ref={e => {work = e}}>// work 
                <span 
                  className="arrow"
                  >{' ->'}</span>
            </p>

                <ScrollContainer 
                className="projects-container"
                >
                    {projects.map(project => { 
                        return (
                        <Project 
                        id={project.id} 
                        image={project.image} 
                        description={project.description}
                        />

                    )
                    })}
                </ScrollContainer>
        </div>
    )
}

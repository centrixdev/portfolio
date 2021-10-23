import Portfolio from './images/portfolio.webp'
import Stratbook from './images/stratbook.webp'

const projects = [
    {
    id: 0,
    title: 'Portfolio',
    image: Portfolio,
    description: 'My Personal Portfolio'
    },
    {
    id: 1,
    title: 'Stratbook.GG',
    image: Stratbook,
    description: 'WIP'
    },
]
const skills = [
    {
        id: 0,
        title: "React",
        percent: 98
    },
    {
        id: 1,
        title: "HTML",
        percent: 90
    },
    {
        id: 2,
        title: "CSS",
        percent: 87
    },
    {
        id: 3,
        title: "JavaScript",
        percent: 95
    },
    {
        id: 4,
        title: "Creativity",
        percent: 100
    },
]

export { projects, skills}
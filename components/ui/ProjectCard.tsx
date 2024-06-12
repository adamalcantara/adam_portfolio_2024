import React from 'react'
import { projects } from "../../data/index";

const ProjectCard = () => {
  return (
    <div className='bg-slate-950'>
        {projects.map((project) => (
            <div>{project.title}</div>
        ))}
    </div>
  )
}

export default ProjectCard
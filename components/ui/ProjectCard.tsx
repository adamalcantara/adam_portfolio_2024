import React from 'react'
// import { projects } from "../../data/index";

import finishchecker from "../../data/img/finishchecker.png";
import grunyons from "../../data/img/grunyons.png";
import theguitarologist from "../../data/img/theguitarologist.png"


const projects = [
  {
      id: 1,
      title: "Finish Checker",
      des: "A simple web application built with HTML, CSS, JavaScript, and Open Weather API.",
      img: finishchecker,
      link1: "https://github.com/adamalcantara/finishchecker",
      link2: "https://adamalcantara.github.io/finishchecker/",
  },
  {
      id: 2,
      title: "The Grunyons",
      des: "A simple application built in ReactJS. It features a Spotify implementation.",
      img: grunyons,
      link1: "https://github.com/adamalcantara/grunyons",
      link2: "https://thegrunyons.com/",
  },
  {
    id: 3,
    title: "The Guitarologist",
    des: "This ReactJS website utilizes a responsive masonry gallery with a lightbox by React Photo Album",
    img: theguitarologist,
    link1: "https://github.com/adamalcantara/grunyons",
    link2: "https://thegrunyons.com/",
}
]

const ProjectCard = () => {
  return (
    <div id='portfolio' className='bg-slate-950 flex justify-center flex-col items-center mt-10'>
      <p className='text-4xl font-bold'>My Portfolio</p>
      <div className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10 w-4/5 mt-10'>
        {projects.map((project) => (
            <div className='bg-slate-900 border border-white/[0.2] rounded-xl p-4 '>
              <h2 className='font-bold text-2xl'>{project.title}</h2>
              <p className='mb-4 mt-4'>{project.des}</p>
              <img src={project.img.src} alt="" className='w-full'></img>
              {/* div for buttons at bottom */}
              <div className='flex justify-between font-bold mt-3'>
                <a href={project.link1} target='_blank' className='hover:text-sky-600'>Github Repository</a>
                <a href={project.link2} target='_blank' className='hover:text-sky-600'>Deployed Project</a>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
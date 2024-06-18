import React from 'react'
// import { projects } from "../../data/index";

import finishchecker from "../../data/img/finishchecker.png";
import grunyons from "../../data/img/grunyons.png";
import theguitarologist from "../../data/img/theguitarologist.png"
import iphone from "../../data/img/iphone.png";


const projects = [
  {
    id: 1,
    title: "iPhone Website Clone",
    des: "A clone of the iPhone 15 Pro website built using ReactJS and GSAP animations.",
    img: iphone,
    link1: "https://github.com/adamalcantara/iphone_clone",
    link2: "https://iphone-clone-4d9a5.web.app/",
  },
  {
      id: 2,
      title: "Finish Checker",
      des: "A simple web application built with HTML, CSS, JavaScript, and Open Weather API.",
      img: finishchecker,
      link1: "https://github.com/adamalcantara/finishchecker",
      link2: "https://adamalcantara.github.io/finishchecker/",
  },
  {
      id: 3,
      title: "The Grunyons",
      des: "A simple application built in ReactJS. It features a Spotify implementation.",
      img: grunyons,
      link1: "https://github.com/adamalcantara/grunyons",
      link2: "https://thegrunyons.com/",
  },
  {
    id: 4,
    title: "The Guitarologist",
    des: "This ReactJS website has a responsive masonry gallery and lightbox",
    img: theguitarologist,
    link1: "https://github.com/adamalcantara/theguitarologist_react",
    link2: "https://www.theguitarologist.com/",
}
]

const ProjectCard = () => {
  return (
    <div id='portfolio' className='bg-slate-950 flex justify-center flex-col items-center mt-10'>
      <p className='text-4xl font-bold'>My Portfolio</p>
      {/* Container for the cards */}
      <div className='grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10 xl:gap-5 w-4/5 xl:w-11/12 2xl:w-11/12 mt-10'>
        {projects.map((project) => (
            // The cards
            <div key={project.id} className='bg-slate-900 border border-white/[0.2] rounded-xl p-4 w-full'>
              <h2 className='font-bold text-2xl'>{project.title}</h2>
              <p className='mb-4 mt-4 lg:text-md xl:text-xs '>{project.des}</p>
              <a href={project.link2} target='_blank'>                
                <img src={project.img.src} alt="" className='w-full hover:opacity-70 transition duration-200'></img>
              </a>
              {/* div for buttons at bottom */}
              <div className='flex justify-between font-bold mt-3'>
                <a href={project.link1} target='_blank' className='bg-slate-700 p-2 rounded-md hover:bg-slate-600'>GitHub</a>
                <a href={project.link2} target='_blank' className='bg-slate-700 p-2 rounded-md hover:bg-slate-600'>Deployed Project</a>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
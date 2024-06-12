import React from 'react'
// import { projects } from "../../data/index";

import woods from "../../data/img/woods.jpeg";
import grunyons from "../../data/img/grunyons.png"


const projects = [
  {
      id: 1,
      title: "Finish Checker",
      des: "A simple web application built with HTML, CSS, JavaScript, and Open Weather API.",
      img: woods,
      link1: "",
      link2: "https://www.thebeatles.com",
  },
  {
      id: 2,
      title: "The Grunyons",
      des: "A simple application built in ReactJS. It features a Spotify implementation.",
      img: grunyons,
      link1: "https://github.com/adamalcantara/grunyons",
      link2: "https://thegrunyons.com/",
  }
]

const ProjectCard = () => {
  console.log(woods);
  return (
    <div className='bg-slate-950 flex justify-center'>
      <div className='grid grid-cols-4 gap-10 w-4/5'>
        {projects.map((project) => (
            <div className='bg-slate-800 p-4 rounded-xl border border-white/[0/1]'>
              <h2 className='font-bold text-xl'>{project.title}</h2>
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
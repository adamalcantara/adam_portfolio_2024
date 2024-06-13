import React from 'react'
import { FaHtml5, FaCss3, FaReact, FaWordpress } from 'react-icons/fa'
import { RiTailwindCssFill } from "react-icons/ri";

const technologies = [
  {
    id: 1,
    name: "HTML5",
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3 />,
  },
  {
    id: 3,
    name: "ReactJS",
    icon: <FaReact />,
  },
  {
    id: 4,
    name: "TailwindCSS",
    icon: <RiTailwindCssFill />,
  },
  {
    id: 5,
    name: "Wordpress",
    icon: <FaWordpress />,
  },
]

const Skills = () => {
 
  return (
    <div className='flex justify-center p-7 bg-slate-950'>
      <div className='flex flex-col items-center w-4/5'>
        <p className='text-4xl font-bold'>My Technical Skills</p>
        {/* div for skills */}
        <div className='mt-10 grid sm:grid-cols-2 grid-cols-5 md:gap-x-25 lg:gap-x-20'>
          {/* map over the skills and create cards */}
          {technologies.map((technology) => (
            <div key={technology.id} className='flex flex-col justify-center items-center sm:mt-5 md:mt-0'>
              <p className='md:text-3xl text-5xl'>{technology.icon} </p>
              <p className='md:text-xl text-2xl mt-2'>{technology.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
import React from 'react'
import { FaReact } from "react-icons/fa";

const About = () => {
  return (
    <div className='flex justify-center bg-slate-950 p-7'>
        <div className='flex text-xl text-white w-4/5 p-4'>
            {/* Left div */}
            <div className='w-1/2 mr-20'>I&apos;m a front-end developer who is focused on creating dynamic user experiences and responsive websites. I&apos;m a graduate of Wilmington University with a Bachelor's of Science in Computer Science. I also attended University of Centeral Florida&apos;s full stack web development bootcamp.</div>
            {/* right div */}
            <div className='flex flex-col w-1/2'>
                Resume goes here
            </div>
        </div>
    </div>
  )
}

export default About
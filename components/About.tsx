import React from 'react'
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className='flex justify-center bg-slate-950 p-7'>
        <div className='flex md:flex-col md:items-center md:text-center text-xl text-white w-4/5 p-4'>
            {/* Left div */}
            <div className='w-1/2 md:w-full pr-20 md:pr-0'>I&#39;m a front-end developer who is focused on creating dynamic user experiences and responsive websites. I&#39;m a graduate of Wilmington University with a Bachelor&#39;s of Science in Computer Science. I also attended University of Centeral Florida&#39;s full stack web development bootcamp.</div>


            {/* right div */}
            <div className='flex justify-center items-center gap-10 md:border-l-0 md:border-t-2 md:mt-10 border-l-2 w-1/2 md:pt-10 lg:flex-col md:flex-row md:gap-5'>
              <a href="https://www.linkedin.com/in/adam-alcantara/" target='_blank' className='flex flex-col justify-center items-center md:w-full hover:text-slate-400'>
                <FaLinkedin className='text-4xl mb-2' />
                <p  className='font-bold text-2xl'>LinkedIn</p>
              </a>
              <a href="https://github.com/adamalcantara" target="_blank" className='flex flex-col justify-center items-center md:w-full hover:text-slate-400'>
                <FaGithub className='text-4xl mb-2' />
                <p className='font-bold text-2xl'>GitHub</p>
              </a>
              <a href='/alcantara_resume_dev_2024_noinfo.pdf' target='_blank' className='flex flex-col justify-center items-center md:w-full hover:text-slate-400'>
                <FaFileDownload className='text-4xl mb-2' />
                <p className='font-bold text-2xl'>Resume</p>
              </a>
            </div>
        </div>
    </div>
  )
}

export default About
import React from 'react'

const About = () => {
  return (
    <div className='flex justify-center bg-slate-950 p-7'>
        <div className='flex md:flex-col md:items-center md:text-center text-xl text-white w-4/5 p-4'>
            {/* Left div */}
            <div className='w-1/2 md:w-full pr-20 md:pr-0'>I&apos;m a front-end developer who is focused on creating dynamic user experiences and responsive websites. I&apos;m a graduate of Wilmington University with a Bachelor's of Science in Computer Science. I also attended University of Centeral Florida&apos;s full stack web development bootcamp.</div>
            {/* right div */}
            <div className='flex flex-col justify-center items-center w-1/2 md:w-full md:mt-10 border-l-2 md:border-l-0 md:border-t-2'>
                <p className='md:mt-10 font-bold text-2xl'>My Resume</p>
                <a href="" target='_blank' className='p-3 mt-3 bg-slate-800 hover:bg-slate-600 rounded-md border border-white/[0/1]'>Download</a>
            </div>
        </div>
    </div>
  )
}

export default About
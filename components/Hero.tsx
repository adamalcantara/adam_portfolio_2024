import React from 'react'

const Hero = () => {
  return (
    <div className="h-[50rem] w-full dark:bg-slate-950 dark:bg-grid-white/[0.04] bg-grid-black/[0.2] relative flex items-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className='flex flex-col z-20'>
        <p className="text-4xl sm:text-7xl font-bold relative  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Greetings, I'm Adam
        </p>
        <p className='text-white'>I'm a front end developer with a passion for UX</p>
      </div>
    </div>
  )
}

export default Hero
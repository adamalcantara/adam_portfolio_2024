import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Hero = () => {
  return (
    <div className="h-[50rem] w-full dark:bg-slate-950 dark:bg-grid-white/[0.04] bg-grid-black/[0.2] relative flex items-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-slate-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {/* Div for text */}
      <div className='flex flex-col z-20 text-white pl-20'>
        <TextGenerateEffect 
            className='text-7xl' 
            words="Greetings, I'm Adam" 
        />
        <p className='text-3xl'>I'm a front end developer</p>
      </div>
    </div>
  )
}

export default Hero
"use client"

import React from 'react'
import ContactForm from './ui/ContactForm'

const Contact = () => {
  return (
    <div id='contact' className='flex justify-center p-10'>
        <div className='w-1/2 sm:w-11/12 lg:w-9/12 p-10 bg-zinc-950 rounded-2xl border border-white/[0.2] '>
          <ContactForm />
        </div>
    </div>
  )
}

export default Contact
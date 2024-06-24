import React from 'react'
import Link from 'next/link'
import { Vortex } from './ui/vortex'

function HeroSection() {
  return (
       <div className='md:min-h-[900px] h-[600px] rounded-md flex flex-col justify-center items-center w-full  relative overflow-hidden py-6 md:py-0'>

        <Vortex
        backgroundColor="black"
        className=" flex flex-col justify-center items-center md:flex-row items-center w-full h-[600px] md:h-[900px]"
      >
       
          <div className= " flex flex-col justify-evenly md:flex-row items-center w-fit h-full  relative z-10 text-center p-2  md:p-8 m-4 md:m-20 bg-base backdrop-blur-sm gap-40" >
          <div className='w-[400px] h-full hidden md:block'>
          <img src="/img.png" alt="" className='w-full object-contain h-full ' />
        </div>
           
             <div className="mt-4">
             <h1
            className=" md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Web Developer</h1>
        
        <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            > I focus on creating intuitive, responsive, and user-friendly interfaces that enhance user experience across various devices and platforms. I am proficient in HTML, CSS, and JavaScript, and have hands-on experience with modern frameworks such as React.js.</p>
            </div>
        </div>
        </Vortex>
    </div>
  )
}

export default HeroSection
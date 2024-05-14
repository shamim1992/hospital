import React from 'react'
import './HeroSection.css'
import Mission from '../mission/Mission'

const HeroSection = () => {
  return (
    <>
    <div className='h-[80vh] bg-gray-400 hero-section'>
      <div className='h-[80vh] w-[100vw] md:w-[50vw] hero-text flex flex-col items-center justify-center px-8 md:px-40'>
        <h1 className='text-3xl text-white font-bold text-center'>Core Values</h1>
        <p className='text-white my-8'>FAED is a nonprofit organization committed to reasearch and development
          in the areas of clinical laboratory management, 
          pathology and laboratory medicine.</p>
          <button className='btn'>Learn More</button>
      </div>
      <div className='hero-bottom mb-20 '>
        <h1 className='sm:text-lg md:text-2xl'>Foundation for Advancement of Essential Diagnostics (FAED)</h1>
      </div>
    </div>
    <Mission/>
    </>
  )
}

export default HeroSection
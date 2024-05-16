import React from 'react'
import Image from 'next/image'
import achievementImg from '../../assets/achievements.jpeg'

const Achievements = () => {
  return (
    <div className='bg-[#F5F8FD] min-h-screen'>
    <h1 className='lg:text-2xl font-bold py-10 text-center'>Our Achievements</h1>
    <div className='flex flex-col lg:flex-row px-4 lg:px-32'>
        <div className='flex-1'>
            <Image src={achievementImg} alt="Achievements" className='h-80 lg:h-96 w-full lg:w-96 rounded-lg float-end' />
        </div>
        <div className='flex-1 flex flex-wrap gap-4 justify-center py-6 lg:py-14 lg:pr-20'>
            <div className='h-28 lg:h-36 w-28 lg:w-36 bg-white shadow-md rounded-lg'>
              <div className='h-14 w-14 rounded-full bg-blue-500  mx-auto'>

              </div>
              <p className='text-center text-sm'>Experienced Staff</p>
            </div>
            <div className='h-28 lg:h-36 w-28 lg:w-36 bg-white shadow-md rounded-lg'>
              <div className='h-14 w-14 rounded-full bg-blue-500  mx-auto'>
                
              </div>
              <p className='text-center text-sm'>Experienced Staff</p>
            </div>
            <div className='h-28 lg:h-36 w-28 lg:w-36 bg-white shadow-md rounded-lg'>
              <div className='h-14 w-14 rounded-full bg-blue-500  mx-auto'>
                
              </div>
              <p className='text-center text-sm'>Experienced Staff</p>
            </div>
            <div className='h-28 lg:h-36 w-28 lg:w-36 bg-white shadow-md rounded-lg'>
              <div className='h-14 w-14 rounded-full bg-blue-500  mx-auto'>
                
              </div>
              <p className='text-center text-sm'>Experienced Staff</p>
            </div>
            <div className='h-28 lg:h-36 w-28 lg:w-36 bg-white shadow-md rounded-lg'>
              <div className='h-14 w-14 rounded-full bg-blue-500  mx-auto'>
                
              </div>
              <p className='text-center text-sm'>Experienced Staff</p>
            </div>
            <div className='h-28 lg:h-36 w-28 lg:w-36 bg-white shadow-md rounded-lg'>
              <div className='h-14 w-14 rounded-full bg-blue-500  mx-auto'>
                
              </div>
              <p className='text-center text-sm'>Experienced Staff</p>
            </div>

 
        </div>
    </div>
</div>

  )
}

export default Achievements
import React from 'react'
import './Mission.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import doctor from "../../../public/doctor.png"
const Mission = () => {
    return (
        <div className='mt-10 min-h-screen'>
            <div className='mission-section px-4 lg:px-24 mt-28 '>
                <div className='mission-card-wrapper flex flex-col lg:flex-row justify-center flex-wrap gap-3 text-gray-200 lg:px-10'>
                    <div className='mission-card flex-1 p-4   rounded-lg'>
                        <div className=' text-white'><TbTargetArrow className='h-14 w-14' /></div>
                        <h1 className='md:text-lg font-bold py-4'>Mission</h1>
                        <p>Providing affordable and accessible diagnostic and healthcare services to the people in India</p>
                        <div className='flex justify-between items-center'>
                            <h1>Read More</h1>
                            <h1 className='h-8 w-8 cursor-pointer bg-white flex items-center text-black px-2 rounded-md'><FaArrowRightLong /></h1>
                        </div>
                    </div>
                    <div className='mission-card flex-1 p-4 rounded-lg '>
                        <div className=' text-white'><TbTargetArrow className='h-14 w-14' /></div>
                        <h1 className='md:text-lg font-bold py-4'>vision</h1>
                        <p>Providing affordable and accessible diagnostic and healthcare services to the people in India</p>
                        <div className='flex justify-between items-center'>
                            <h1>Read More</h1>
                            <h1 className='h-8 w-8 cursor-pointer bg-white flex items-center text-black px-2 rounded-md'><FaArrowRightLong /></h1>
                        </div>
                    </div>
                    <div className='mission-card flex-1 p-4 rounded-lg '>
                        <div className=' text-white'><TbTargetArrow className='h-14 w-14' /></div>
                        <h1 className='md:text-lg font-bold py-4'>Core Purpose</h1>
                        <p>Providing affordable and accessible diagnostic and healthcare services to the people in India</p>
                        <div className='flex justify-between items-center'>
                            <h1>Read More</h1>
                            <h1 className='h-8 w-8 cursor-pointer bg-white flex items-center text-black px-2 rounded-md'><FaArrowRightLong /></h1>
                        </div>
                    </div>
                    <div className='mission-card flex-1 p-4 rounded-lg '>
                        <div className=' text-white'><TbTargetArrow className='h-14 w-14' /></div>
                        <h1 className='md:text-lg font-bold py-4'>The Logo</h1>
                        <p>Providing affordable and accessible diagnostic and healthcare services to the people in India</p>
                        <div className='flex justify-between items-center'>
                            <h1>Read More</h1>
                            <h1 className='h-8 w-8 cursor-pointer bg-white flex items-center text-black px-2 rounded-md'><FaArrowRightLong /></h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Us */}
            <div className='flex justify-center my-5 items-center lg:px-24'>
                <div className='flex-1'>
                    <img src="https://apiphysio.chanrericr.com/uploads/1714639394092-doctor.png" className='shadow-lg' alt="Doctor" />
                </div>
                <div className='flex-1'>
                    <h1 className='md:text-2xl font-bold py-4'>About Us</h1>
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos debitis sunt tempore possimus velit quidem dolorum maiores. Voluptate, incidunt doloribus vitae vel illo blanditiis ratione. Architecto, culpa. Necessitatibus, sit beatae?</p>
                    <button className='btn bg-blue-400 '>More About</button>
                </div>

            </div>
        </div>

    )
}

export default Mission
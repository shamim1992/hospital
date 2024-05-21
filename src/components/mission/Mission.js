import React from 'react'
import './Mission.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import Image from 'next/image'
import missionphoto from "../../assets/mission.jpeg"
import doctorImg from "../../../public/doctor.png"
const Mission = () => {
    return (
        <div className='mt-10 min-h-screen'>
            <div>
                <div className="hidden lg:flex eclipse h-64 w-64 border-2 border-blue-500 rounded-full absolute top-[1000px] -left-36">
                    <div className="h-64 w-64 rounded-full absolute top-0 left-0">
                        <div className="h-48 w-48 bg-blue-500 rounded-full absolute top-8 left-8"></div>
                    </div>
                </div>

            </div>
            <div className='mission-section px-4 lg:px-32 mt-28 '>
                <div className='mission-card-wrapper flex flex-col lg:flex-row justify-center flex-wrap gap-3 text-gray-200 lg:px-10'>
                    <div className='mission-card flex-1 p-4   rounded-lg '>
                        <div className=' '><TbTargetArrow className='h-14 w-14' /></div>
                        <h1 className='md:text-lg font-bold py-4'>Mission</h1>
                        <p>Providing affordable and accessible diagnostic and healthcare services to the people in India</p>
                        <div className='flex justify-between items-center'>
                            <h1>Read More</h1>
                            <h1 className='h-8 w-8 cursor-pointer bg-white flex items-center text-black px-2 rounded-md'><FaArrowRightLong /></h1>
                        </div>
                    </div>
                    <div className='mission-card flex-1 p-4 rounded-lg '>
                        <div className=''><TbTargetArrow className='h-14 w-14' /></div>
                        <h1 className='md:text-lg font-bold py-4'>vision</h1>
                        <p>Providing affordable and accessible diagnostic and healthcare services to the people in India</p>
                        <div className='flex justify-between items-center'>
                            <h1>Read More</h1>
                            <h1 className='h-8 w-8 cursor-pointer bg-white flex items-center text-black px-2 rounded-md'><FaArrowRightLong /></h1>
                        </div>
                    </div>
                    <div className='mission-card flex-1 p-4 rounded-lg '>
                        <div className=' '><TbTargetArrow className='h-14 w-14' /></div>
                        <h1 className='md:text-lg font-bold py-4'>Core Purpose</h1>
                        <p>Providing affordable and accessible diagnostic and healthcare services to the people in India</p>
                        <div className='flex justify-between items-center'>
                            <h1>Read More</h1>
                            <h1 className='h-8 w-8 cursor-pointer bg-white flex items-center text-black px-2 rounded-md'><FaArrowRightLong /></h1>
                        </div>
                    </div>
                    <div className='mission-card flex-1 p-4 rounded-lg '>
                        <div className=' '><TbTargetArrow className='h-14 w-14' /></div>
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
            <div className='flex flex-col md:flex-row justify-center my-5 items-center md:px-32'>
                <div className='flex-1 py-6 '>
                    <Image src={doctorImg} className='shadow-lg float-end px-6 ' alt="Doctor" />
                </div>
                <div className='flex-1 p-6'>
                    <h1 className='text-lg md:text-2xl font-bold py-4'>About Us</h1>
                    <p className='py-4 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos debitis sunt tempore possimus velit quidem dolorum maiores. Voluptate, incidunt doloribus vitae vel illo blanditiis ratione. Architecto, culpa. Necessitatibus, sit beatae?</p>
                    <button className='btn bg-blue-400 text-white '>More About</button>
                </div>

            </div>
            <div>
                <div className="hidden lg:flex eclipse h-64 w-64 rounded-full absolute top-[1500px] right-0">
                    <div className="h-64 w-64 rounded-full absolute top-0 left-0">
                        <Image src={missionphoto} alt="" className='h-20 lg:h-20 w-20 lg:w-20 -right-16 ' />
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Mission
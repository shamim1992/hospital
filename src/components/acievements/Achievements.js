"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import achievementImg from '../../assets/achievements.jpeg'
import { FaDesktop } from "react-icons/fa";
import { FaUserDoctor, FaHandshakeAngle } from "react-icons/fa6";
import { FaChessKing } from "react-icons/fa";
import { IoMan } from "react-icons/io5";
import { Ri24HoursLine } from "react-icons/ri";
const Achievements = () => {

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className='bg-[#F5F8FD] min-h-screen pb-20 '>

      <h1 className='lg:text-2xl font-bold py-10 text-center' data-aos="fade-up">Our Achievements </h1>

      <div className='flex flex-col lg:flex-row px-4 lg:px-32 gap-6 mb-20'>
        <div className='flex-1' data-aos="fade-up">
          <Image src={achievementImg} alt="Achievements" className='h-80 lg:h-96 w-full lg:w-96 rounded-lg float-end' />
        </div>
        <div className='flex-1 flex flex-wrap gap-4 justify-center py-6 lg:py-14 lg:pr-20' data-aos="fade-up">
          <div className='flex flex-col items-center justify-between h-36 lg:h-36 w-36 lg:w-36 bg-white shadow-md rounded-lg'>
            <div className='flex items-center justify-center h-20 w-20 my-4 rounded-full bg-[#1C75BC] mx-auto'>
              <FaDesktop className='text-white h-8 w-8' />
            </div>
            <p className='text-center text-sm mb-3'>Experienced Staff</p>
          </div>
          <div className='flex flex-col items-center justify-between h-36 lg:h-36 w-36 lg:w-36 bg-white shadow-md rounded-lg'>
            <div className='flex items-center justify-center h-20 w-20 my-4 rounded-full bg-[#22C45D] mx-auto'>

              <FaUserDoctor className='text-white h-8 w-8' />
            </div>
            <p className='text-center text-sm mb-3'>Expert Doctor</p>
          </div>
          <div className='flex flex-col items-center justify-between h-36 lg:h-36 w-36 lg:w-36 bg-white shadow-md rounded-lg'>
            <div className='flex items-center justify-center h-20 w-20 my-4 rounded-full bg-[#EBB207] mx-auto'>
              <IoMan className='text-white h-8 w-8' />
            </div>
            <p className='text-center text-sm mb-3'>Patients-Centric</p>
          </div>
          <div className='flex flex-col items-center justify-between h-36 lg:h-36 w-36 lg:w-36 bg-white shadow-md rounded-lg'>
            <div className='flex items-center justify-center h-20 w-20 my-4 rounded-full bg-[#FF6F6F] mx-auto'>
              <FaHandshakeAngle className='text-white h-8 w-8' />
            </div>
            <p className='text-center text-sm mb-3'>Personalized Care</p>
          </div>
          <div className='flex flex-col items-center justify-between h-36 lg:h-36 w-36 lg:w-36 bg-white shadow-md rounded-lg'>
            <div className='flex items-center justify-center h-20 w-20 my-4 rounded-full bg-[#EC4545] mx-auto'>
              <Ri24HoursLine className='text-white h-8 w-8' />
            </div>
            <p className='text-center text-sm mb-3'>24/7 Availablity</p>
          </div>
          <div className='flex flex-col items-center justify-between h-36 lg:h-36 w-36 lg:w-36 bg-white shadow-md rounded-lg'>
            <div className='flex items-center justify-center h-20 w-20 my-4 rounded-full bg-[#A656F3] mx-auto'>
              <FaChessKing className='text-white h-8 w-8' />
            </div>
            <p className='text-center text-sm mb-3'>Quality Services</p>
          </div>
        </div>
      </div>


      {/* Our expertise */}
      <div data-aos="fade-up" className="md:py-14 lg:mx-52 flex flex-col md:flex-row justify-center items-center bg-[#1C75BC] rounded-lg flex-wrap">
      <div className="flex-1" data-aos="fade-up">
        <h1 className="sm:text-2xl md:text-4xl font-bold float-end px-20 text-white py-6">
          Our Expertise
          <div className="border-b-2 border-gray-300 w-[80%]"></div>
        </h1>
      </div>
      <div className="flex-1" data-aos="fade-up">
        <div className="carousel relative max-w-lg p-4 space-x-4 rounded-box">
          <button className="absolute left-0 top-16 z-10 btn btn-sm btn-circle bg-[#FFFFFF]" onClick={scrollLeft}>
            ❮
          </button>
          <div ref={carouselRef} className="carousel-center flex overflow-x-auto space-x-4">
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box h-36 w-36" />
            </div>
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box h-36 w-36" />
            </div>
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box h-36 w-36" />
            </div>
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box h-36 w-36" />
            </div>
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box h-36 w-36" />
            </div>
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box h-36 w-36" />
            </div>
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box h-36 w-36" />
            </div>
          </div>
          <button className="absolute right-0 top-16 z-10 btn btn-sm btn-circle bg-[#FFFFFF]" onClick={scrollRight}>
            ❯
          </button>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Achievements
import React from 'react'
import Image from 'next/image'
import logo from '../../assets/logo.png'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaDribbble} from "react-icons/fa";

const Footer = () => {
    return (
        <div className='flex-col flex lg:flex-row bg-base-200' data-aos="fade-up">
            <div className='w-full lg:w-96 flex-col flex h-96 bg-[#1C75BC] p-10 text-white'>
                <Image src={logo} alt='logo' className='w-full pr-5 py-5' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sapiente facere labore ex similique harum ullam, tempora vitae ipsa ipsum quod id, odio quia quibusdam non porro magnam cupiditate beatae?</p>
                <div className='flex   justify-center items-center gap-2 py-5'>
                    <div className='h-10 w-10 cursor-pointer hover:bg-blue-500 flex justify-center items-center rounded-lg'><FaFacebook/></div>
                    <div className='h-10 w-10 cursor-pointer hover:bg-black flex justify-center items-center rounded-lg'><FaTwitter /></div>
                    <div className='h-10 w-10 cursor-pointer hover:bg-red-500 flex justify-center items-center rounded-lg'><FaInstagram /></div>
                    <div className='h-10 w-10 cursor-pointer hover:bg-pink-500 flex justify-center items-center rounded-lg'><FaDribbble /></div>
                    <div className='h-10 w-10 cursor-pointer hover:bg-blue-500 flex justify-center items-center rounded-lg'><FaLinkedin /></div>
                </div>
            </div>
            <div className='w-full flex-1 '>
                <div className=' flex-col flex lg:flex-row justify-between px-10 py-5 text-sm'>
                    <div>
                        <h1 className='text-xl font-semibold py-5'>Quick Links</h1>
                        <ul>
                            <li className='mb-2'>About Us</li>
                            <li className='mb-2'>Contact Us</li>
                            <li className='mb-2'>Privacy Policy</li>
                            <li className='mb-2'>Terms & Conditions</li>
                            <li className='mb-2'>Our Team</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold py-5'>Services</h1>
                        <ul>
                            <li className='mb-2'>Pathologycam Testing</li>
                            <li className='mb-2'>Biochemistry Solution</li>
                            <li className='mb-2'>Chemical Research</li>
                            <li className='mb-2'>Pharmaceutical Research</li>
                            <li className='mb-2'>Diabetes Testing</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold py-5'>Get in touch</h1>
                        <ul>
                            <li className='mb-2'>423B, Road Wordwide Country, USA</li>
                            <li className='mb-2'>themeht23@gmail.com</li>
                            <li className='mb-2'>+91-234-567-8900</li>
                            <li className='mb-2'>Mon-Sat:9.30am To 7.00pm</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full bg-white text-sm lg:text-md p-2  lg:p-6 '>
                    <p>Copyright © 2021 All rights reserved </p>
                </div>
            </div>

        </div>
    )
}

export default Footer
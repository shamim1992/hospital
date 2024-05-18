import React from 'react'
import { FaUser,FaComments, FaChevronRight } from "react-icons/fa";
import Image from 'next/image'
import blogImage from '../../assets/blog1.jpeg'
const BlogList = () => {
    return (
        <div>
            <div>
                <div className='py-10'>
                    <h1 className='text-3xl font-bold text-center py-4 px-10'>From our blog list Latest News</h1>
                    <p className='max-w-xl text-xs text-center mx-auto px-6'>Our doctors include highly qualified male and female practitioners who come from a range of backgrounds and
                        bring a diversity of skills.</p>
                </div>

                <div className='mx-auto my-8 flex flex-col lg:flex-row px-6 lg:px-36 gap-2'>
                    <div className="card bg-base-100 shadow-md">
                        <figure><Image src={blogImage} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h3 className='relative -top-12 w-32 p-2 bg-white text-sm'>17th May 2024</h3>
                            <h2 className="relative -top-6 text-lg font-bold w-full">
                                Equipping Researchers in the Developing World, Equipping Researchers in the Developing World
                            </h2>

                            <div className='flex justify-between items-center text-sm mb-6'>
                                <div className='flex justify-center items-center'><FaUser/> &nbsp; Admin</div>
                                <div>255</div>
                                <div className='flex justify-center items-center' ><FaComments /> &nbsp; 10</div>
                            </div>

                            <div className='flex justify-between items-center ' >
                                <div className="flex justify-center gap-2">
                                    <div className="bg-[#F5F8FD] p-3 text-xs">Fashion</div>
                                    <div className="bg-[#F5F8FD] p-3 text-xs">Products</div>
                                </div>
                                <div className='h-8 w-8 rounded-full bg-[#1C75BC] flex justify-center items-center text-white'>
                                <FaChevronRight />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md">
                        <figure><Image src={blogImage} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h3 className='relative -top-12 w-32 p-2 bg-white text-sm'>17th May 2024</h3>
                            <h2 className="relative -top-6 text-lg font-bold w-full">
                                Equipping Researchers in the Developing World, Equipping Researchers in the Developing World
                            </h2>

                            <div className='flex justify-between items-center text-sm mb-6'>
                                <div className='flex justify-center items-center'><FaUser/> &nbsp; Admin</div>
                                <div>255</div>
                                <div className='flex justify-center items-center' ><FaComments /> &nbsp; 10</div>
                            </div>

                            <div className='flex justify-between items-center ' >
                                <div className="flex justify-center gap-2">
                                    <div className="bg-[#F5F8FD] p-3 text-xs">Equipment</div>
                                    <div className="bg-[#F5F8FD] p-3 text-xs">Sass</div>
                                </div>
                                <div className='h-8 w-8 rounded-full bg-[#1C75BC] flex justify-center items-center text-white'>
                                <FaChevronRight />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md">
                        <figure><Image src={blogImage} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h3 className='relative -top-12 w-32 p-2 bg-white text-sm'>17th May 2024</h3>
                            <h2 className="relative -top-6 text-lg font-bold w-full">
                                Equipping Researchers in the Developing World, Equipping Researchers in the Developing World
                            </h2>

                            <div className='flex justify-between items-center text-sm mb-6'>
                                <div className='flex justify-center items-center'><FaUser/> &nbsp; Admin</div>
                                <div>255</div>
                                <div className='flex justify-center items-center' ><FaComments /> &nbsp; 10</div>
                            </div>

                            <div className='flex justify-between items-center ' >
                                <div className="flex justify-center gap-2">
                                    <div className="bg-[#F5F8FD] p-3 text-xs">Fashion</div>
                                    <div className="bg-[#F5F8FD] p-3 text-xs">Products</div>
                                </div>
                                <div className='h-8 w-8 rounded-full bg-[#1C75BC] flex justify-center items-center text-white'>
                                <FaChevronRight />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlogList
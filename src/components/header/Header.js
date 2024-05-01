import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='top-header flex justify-between bg-slate-300 px-10 py-3' >
            <div className="left-top-header">
                <ul className='flex justify-between items-center text-xs font-semibold'>
                    <li className=''>Emergency Contact: +91 9876543210</li>
                    <li className='px-8'>Location: India</li>
                    <li>Mon-Sat : 9:30 am - 7:00 pm</li>
                </ul>
            </div>
            <div className="right-top-header">
                <ul className='flex justify-around items-center text-xs'>
                    <li><a href="#">F</a></li>
                    <li><a href="#">T</a></li>
                    <li><a href="#">L</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
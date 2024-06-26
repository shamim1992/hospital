'use client'
import React, { useEffect } from "react";
// import './Header.css'
import Image from "next/image";
import logo1 from "../../assets/logo1.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaLongArrowAltRight,
} from "react-icons/fa";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, [])
  return (
    <div className="sticky top-0 z-50 shadow-md">
      <div className="top-header hidden lg:flex justify-between items-center px-10 py-3">
        <div className="left-top-header">
          <ul className="flex justify-between items-center text-xs font-semibold">
            <li className="">Emergency Contact: +91 9876543210</li>
            <li className="px-8">Location: India</li>
            <li>Mon-Sat : 9:30 am - 7:00 pm</li>
          </ul>
        </div>
        <div className="right-top-header">
          <ul className="flex justify-center items-center gap-3 ">
            <li className="btn btn-sm bg-base-500 hover:bg-blue-500 hover:text-white rounded-2xl cursor-pointer">
              <FaFacebook />
            </li>
            <li className="btn btn-sm bg-base-500 hover:bg-blue-500 hover:text-white rounded-2xl cursor-pointer">
              <FaLinkedin />
            </li>
            <li className="btn btn-sm bg-base-500 hover:bg-black hover:text-white rounded-2xl cursor-pointer">
              <FaTwitter />
            </li>
            <li className="flex items-center">
              <select className=" w-full max-w-xs text-xs">
                <option>English</option>
                <option>Japanese</option>
                <option>Italian</option>
              </select>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Menu start */}

      <div className="navbar  bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <details>
                  <summary>About</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>What We Do</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Activities</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Gallery</a>
              </li>
              <li>
                <a>Career</a>
              </li>
              <li>
                <a>Resources</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              {/* <li>
                <button className="btn sm:px-2 lg:px-9 text-white  sm:btn-sm bg-blue-500">Donation</button>
              </li> */}
            </ul>
          </div>
          <a className=""><Image src={logo1} alt="logo" className="w-full h-9 lg:h-12 lg:w-72 " /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* <div className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>About</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>What We Do</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Activities</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>Career</a>
            </li>
            <li>
              <a>Resources</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </div> */}
          <div className="flex gap-2 pl-10 items-center float-end">
            <div><a href="">Home</a></div><span className="text-xl">/</span>
            <div><a href="/about">About</a></div><span className="text-xl">/</span>
            <div><a href="">What we do</a></div><span className="text-xl">/</span>
            <div><a href="">Activities</a></div><span className="text-xl">/</span>
            <div><a href="">Gallery</a></div><span className="text-xl">/</span>
            <div><a href="">Career</a></div><span className="text-xl">/</span>
            <div><a href="">Resources</a></div><span className="text-xl">/</span>
            <div><a href="">Contact</a></div>
          </div>
        </div>
        <div className="lg:flex  sm:block navbar-end donation-btn text-center pr-3 ">
          <button className="px-2  bg-blue-500 lg:px-9 text-white btn-sm" onClick={() => document.getElementById('my_modal_5').showModal()}>Donation</button>
        </div>
      </div>
      {/* Main menu end */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal w-full ">
        <div className="bg-white z-50 rounded-lg ">
          <div className="w-full bg-[#c4daec]  p-4 pt-6 rounded-t-lg">
            <h3 className="font-bold px-14  text-2xl text-center text-[#1C75BC]">₹1500 One Time Donation</h3>
          <p className="text-center">as Indian citizen</p>
          </div>
          <div className="flex justify-around gap-3 items-baseline mt-3 px-8 text-sm">
            <div className="flex items-center gap-3"> <input type="radio" name="country" className="h-5 w-5 "/> <span>Indian citizen</span> </div>
            <div className="flex items-center gap-3"><input type="radio"  name="country" className="h-5 w-5 "/> <span>Foreign citizen</span></div>
          </div>
          <div className="px-8 py-2">
            <h2 className="text-sm font-semibold ">Donor&apos;s details</h2>
          </div>
          <div className="px-4">
            <form method="" className="max-w-sm mx-auto">
              <div className="flex justify-center gap-4 mb-3">
                <input type="text" className="w-full text-sm bg-[#DDEAF58A] p-2 rounded-lg" placeholder="Full Name"/>
                <input type="text" className="w-full text-sm bg-[#DDEAF58A] p-2 rounded-lg" placeholder="Email"/>
              </div>
              <div>
                <input type="text" className="w-full text-sm mb-3 bg-[#DDEAF58A] p-2 rounded-lg" placeholder="Mobile Number"/>
              </div>
              <div>
                <input type="text" className="w-full text-sm mb-3 bg-[#DDEAF58A] p-2 rounded-lg" placeholder="State"/>
              </div>
              <div>
                <input type="text" className="w-full text-sm mb-3 bg-[#DDEAF58A] p-2 rounded-lg" placeholder="Address"/>
              </div>
              <div>
                <input type="text" className="w-full text-sm mb-3 bg-[#DDEAF58A] p-2 rounded-lg" placeholder="Adhaar(Optional)"/>
              </div>
              <div>
                <input type="text" className="w-full text-sm bg-[#DDEAF58A] p-2 rounded-lg" placeholder="PAN"/>
              </div>
              <div className="flex justify-center gap-2 mt-5">
                <div><input type="checkbox" className="w-full bg-[#DDEAF58A] p-2 rounded-lg"/> </div>
                <div className="text-xs">I have read through the website&apos;s Privacy Policy & Terms and Conditions to make a donation. It may be noted that if valid PAN details are not provided, we will not be able to issue Donation acknowledgement receipts and Form 10BE. Accordingly, the donor may not be able to claim tax exemption under section 80G of the Income Tax Act, 1961 in India.</div>
              </div>
             <div className="mt-2 text-center ">
              <button className="bg-[#1C75BC] text-white py-2 w-full rounded-lg">Make Payment</button>
              <button className="font-bold text-md text-[#1C75BC] btn-sm">Go Back</button>
             </div>
              
            </form>
            
          </div>
        </div>
      </dialog>
     
    </div>
  );
};

export default Header;

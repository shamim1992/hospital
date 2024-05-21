'use client'
import React from "react";
// import './Header.css'

import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaLongArrowAltRight,
} from "react-icons/fa";

const Header = () => {
  return (
    <div>
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

      <div className="navbar ">
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
          <a className="btn btn-ghost text-xl">Hospital</a>
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
          <div className="flex gap-3 px-4 items-center ">
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
        <div className="lg:flex  sm:block navbar-end donation-btn text-center">
          <button className="sm:px-2 bg-blue-500 lg:px-9 text-white btn-sm">Donation</button>
        </div>
      </div>
      {/* Main menu end */}
    </div>
  );
};

export default Header;

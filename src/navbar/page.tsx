"use client"

import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className='fixed top-0 left-0 w-full bg-white shadow-md flex justify-between items-center px-8 py-4 z-50'>
        <a className='text-blue-500 font-bold text-lg'>Doctor AI</a>
        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-6'>
          <li className='text-gray-700 hover:text-blue-500 cursor-pointer'>Home</li>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Services</li>
          <li className='cursor-pointer'>Blog</li>
          <li className='cursor-pointer'>Contact</li>
        </ul>
        <div className='flex items-center space-x-4'>
          <FaSearch className='text-gray-700 hidden md:block' />
          <button className="hidden md:flex items-center justify-center border-0 rounded-md bg-blue-500 hover:bg-green-500 text-white px-4">
            Appointment
          </button>
          {/* Hamburger Icon */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <GiHamburgerMenu className="w-7 h-7 text-blue-500" />
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className=" bg-black bg-opacity-30 z-50 md:hidden" onClick={() => setMenuOpen(false)}>
            <div className="absolute top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg py-6 px-6" onClick={e => e.stopPropagation()}>
              <button className="absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
                <IoMdClose className="w-7 h-7 text-gray-700" />
              </button>
              <ul className='flex flex-col items-start space-y-6 mt-8'>
                <li className='text-gray-700 hover:text-blue-500 cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Services</li>
                <li className='cursor-pointer'>Blog</li>
                <li className='cursor-pointer'>Contact</li>
                <FaSearch className='text-gray-700 mt-4' />
                <button className="flex items-center justify-center border-0 rounded-md bg-blue-500 hover:bg-green-500 text-white px-4 mt-4">
                  Appointment
                </button>
              </ul>
            </div>
          </div>
        )}
      </nav>
      <section className='relative w-full min-h-screen flex lg:flex-row flex-col-reverse items-center justify-center bg-gradient-to-r from-cyan-100 to-green-100 overflow-hidden'>
        {/* ...your section content... */}
        
        
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mt-[] mb-16 mt-40 lg:mt-0 ml-[30] items-center text-center'>
        <h1 className='text-blue-500 font-semibold mb-2 '>Welcome To Doctor AI</h1>
        <p className='text-4xl md:text-5xl font-bold leading-snug'>We Are Committed <br>
        </br>To Your Health</p>

        <p className=''>Stay safe, stay healthy – your AI-powered healthcare partner is just a click away!</p>
        <button className="flex items-center justify-center border-0 rounded-md bg-blue-500 hover:bg-green-500 text-white px-8 py-4 mt-6">Chat With Doctor AI</button>

         <div className='flex gap-6 mt-6'>
          <div className='text-lg font-semibold'>
            <h2 className='text-2xl'>355k+</h2>
            <br></br>         <p className=''>Recovered Patients</p>
          </div>
                    
          <div className='text-lg font-semibold'>
            <h2 className='text-2xl'>98%</h2>
            <br></br>         <p className=''>Good Reviews</p>
          </div>
          <div className='text-lg font-semibold'>
            <h2 className='text-2xl'>120+</h2>
            <br></br>         <p className=''>Popular Doctors</p>
          </div>
          </div>
        </div>
      <div className="relative mb-10 lg:mb-0 w-[350px] h-[350px] mt-24 lg:w-[540px] lg:h-[540px] md:mt-[9] flex items-center justify-center">
    
         <div className="w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] bg-green-400 rounded-full flex items-center justify-center mb-[-100px]">
        


        <div className='w-full h-full lg:w-full lg:mb-[-420px] items-center justify-center'>

          
          <img
            className=' lg:w-full lg:h-full relative top-[60px] left-[5px] lg:left-[15px] lg:top-[-80px] md:ml-[-20px] sm:ml-[-20] z-25  md:w-72 md:h-72 md: sm:w-40 sm:h-40 mr-' 
            alt='Hero'
            src='https://doctor-ai-chatbot.vercel.app/doctor_2.png'
            />
          </div>
        </div>
        </div>
      
      </section>
    </div>
  )
}

export default Navbar



// import React from 'react'
// import { FaSearch } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi"

// const Navbar = () => {
//    return (
    
//    /div>//
//  )//
// }

// export default Navbar
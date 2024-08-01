import React from "react"
import heroImg from "../components/assets/images/image.png"
import heroImgback from "../components/assets/images/join1.png"
import { FiSearch } from "react-icons/fi"
import { BsFillLightningChargeFill } from "react-icons/bs"
import { FaBookReader, FaGraduationCap, FaUsers } from "react-icons/fa"
import { About } from "./About"
import { Courses } from "./Courses"
import { Instructor } from "./Instructor"
import { Blog } from "./Blog"
import Login from "./login"


export const Home = () => {
  return (
    <>
      <HomeContent />
      <About />
      <br />
      <br />
      <br />
      <Courses />
      <Instructor />
      <Blog />
      <Login />
    </>
  )
}
export const HomeContent = () => {
  return (
    <>
      <section className='bg-secondary py-10 h-[92c:\Users\asus\Desktop\download.pngvh] md:h-full'>
        <div className='container'>
          <div className='flex items-center justify-center md:flex-col'>
            <div className='left w-1/2 text-black md:w-full'>
              <h1 className='text-4xl leading-tight text-black font-semibold'>
                summar cours <br /> Platform
              </h1>
              <h3 className='text-lg mt-3'>Welcome to the complete guide to entertainment tips for kids</h3>
              <span className='text-[14px]'> Don't miss the opportunity to discover the best institutes for your children this summer!</span>

              <div className='relative text-gray-600 focus-within:text-gray-400 mt-5'>
                <input type='search' className='py-3 text-sm  bg-white rounded-md pl-10 focus:outline-none ' placeholder='Search...' autocomplete='off' />
                <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                  <button type='submit' className='p-1 focus:outline-none focus:shadow-outline'>
                    <FiSearch />
                  </button>
                </span>
              </div>
              <span className='text-[14px]'>You`re guaranteed to find something that`s right for you.</span>
            </div>
            <div className='right w-1/2 md:w-full relative'>
              <div className='images relative'>
                <img src={heroImgback} alt='' className=' absolute top-32 left-10 w-96 md:left-10' />
                <div className='img h-[85vh] w-full'>
                  <img src={heroImg} alt='' className='h-full w-full object-contain z-20 relative' />
                </div>
              </div>
              <div className='content'>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

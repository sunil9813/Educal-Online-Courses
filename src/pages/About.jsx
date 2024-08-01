import React from "react"
import aboutImg from "../components/assets/images/image.png"

import { FaBookDead } from "react-icons/fa"
import { AiOutlineCheck } from "react-icons/ai"

export const About = () => {
  return (
    <>
      <section className='about py-6'>
        <div className='container'>
          <div className='heading text-center py-5'>
            <h1 className='text-3xl font-semibold text-black'>About us </h1>
          </div>
         
        </div>
      </section>
      <AboutContent />
    </>
  )
}
export const AboutCard = (props) => {
  return (
    <div className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `}>
      <div className='icon'>{props.icon}</div>
      <div className='text mt-5'>
        <h4 className='text-lg font-semibold my-3'>{props.title}</h4>
        <p className='text-sm'>{props.desc}</p>
      </div>
    </div>
  )
}

export const AboutContent = () => {
  return (
    <section className='mb-16'>
      <div className='container flex md:flex-col'>
        <div className='left w-1/3 md:w-full mr-8 md:mr-0 relative'>
          <img src={aboutImg} alt='aboutImg' className=' rounded-xl' />
         
        </div>
        <div className='right w-2/3 md:w-full md:mt-16'>
          <div className='heading w-4/5 md:w-full'>
            <h1 className='text-2xl font-semibold text-black'>Don't miss the opportunity to discover the best institutes for your children this summer!</h1>
            <span className='text-sm mt-2 block leading-6'> a comprehensive website that allows you to discover the best entertainment and educational institutes for children. We provide detailed information on various summer courses, from arts and creativity to science and sports.

Comprehensive collection: All information about institutes in one place.
- Real reviews: reviews and experiences from other parents. - </span>
            <ul className='my-5'>
              <li className='text-sm flex items-center gap-5'>
                <AiOutlineCheck className='text-green-500' /> Easy to search .
                
              </li>
              <li className='text-sm flex items-center gap-5 my-2'>
                <AiOutlineCheck className='text-green-500' />
                Real Reviews
              </li>
              <li className='text-sm flex items-center gap-5'>
                <AiOutlineCheck className='text-green-500' />
                real opinions
              </li>
            </ul>
            <button className='px-5 py-2 border border-gray-300 rounded-md text-sm'></button>
          </div>
        </div>
      </div>
    </section>
  )
}

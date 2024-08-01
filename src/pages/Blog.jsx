import React from "react"
import { courses } from "../components/assets/data/dummydata"
import { AiTwotoneCalendar } from "react-icons/ai"
import { NavLink } from "react-router-dom"

export const Blog = () => {
  return (
    <>
      <section className='courses'>
        <div className='w-4/5 m-auto'>
          <div className='heading text-center py-12'>
            <h1 className='text-3xl font-semibold text-black'>
               عنوان نكتب فد شي هنا <br />
              
            </h1>
            <span className='text-sm mt-2 block'>نكتب وصف </span>
          </div>
         
        </div>
      </section>
    </>
  )
}

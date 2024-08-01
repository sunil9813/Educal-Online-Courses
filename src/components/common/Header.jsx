import React, { useState } from "react"
import LogoImg from "../assets/images/logo2.png"
import { LinkData } from "../assets/data/dummydata"
import { NavLink } from "react-router-dom"
import { BiShoppingBag } from "react-icons/bi"
import { HiOutlineMenuAlt1, HiViewGrid } from "react-icons/hi"
import {Link} from "react-router-dom"

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className='bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full'>
        <div className='container flex justify-between items-center'>
          <div className='logo flex items-center gap-6'>
            <img src={LogoImg} alt='logo' className='h-5 w-10' />
           
          </div>
          <nav className={open ? "mobile-view" : "desktop-view"}>
            <ul className='flex items-center gap-6'>
              {LinkData.map((link) => (
                <li key={link.id} onClick={() => setOpen(null)}>
                  <NavLink className={({ isActive }) => (isActive ? "text-primary text-sm" : "text-[15px]")} to={link.url}>
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className='account flex items-center gap-5'>
            <button>
              <BiShoppingBag size={25} />
            </button>
            <Link to={"/login"}><button>Login</button></Link>
            {/* {" "} */}
            <button className='open-menu' onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 size={25} />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

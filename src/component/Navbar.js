import React, { useState } from 'react'
import { FaHamburger } from 'react-icons/fa';
const Navbar = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"ABOUT",link:"/"},
      {name:"SERVICES",link:"/"},
      {name:"BLOG",link:"/"},
      {name:"CONTACT",link:"/"},
      
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md fixed z-50 w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <div className='text-red-800 text-3xl font-bold'>
    <span className='text-5xl'>O</span>SUMARE</div>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <FaHamburger name={open ? 'close':'menu'}></FaHamburger>
      </div>

      <ul className={`md:flex  md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-0 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0  my-7'>
              <a href={link.link} className='text-orange-900 hover:text-orange-700 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <button className='bg-red-800 text-orange-200 border border-orange-200 font-bold py-2 px-6 rounded md:ml-6 hover:bg-orange-200 hover:text-red-800 hover:border-red-800 
    duration-500'>
          Contact us 
        </button> 
      </ul>
      </div>
    </div>
  )
}

export default Navbar
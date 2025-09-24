import React from 'react'
import { FaAngleRight, FaStar } from "react-icons/fa";
function Navbar() {
  return (
    <div className='Navbar w-full h-[15%] flex justify-between z-10'>
        <div className="logo-container w-[20%] h-full flex flex-col justify-center pl-4">
            <h1 className='text-[2.5rem] font-myfontItalic select-none'>SCRAMBLER</h1>
            <div className="ducation-text-container flex h-[100%] overflow-hidden  items-center gap-2 mt-[-3rem] ml-11">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <h1 className='text-[1.5rem] font-gilroyItalic font-semibold text-right select-none'>MR.BIKE</h1>
            </div>
            
        </div>
        <div className="Navabar-right-side w-[20%] h-full flex justify-center items-center gap-2 mt-[-15px]">
            <h2 className='font-semibold text-[1rem] font-TTBackword selection:bg-yellow-300 selection:text-black cursor-pointer'>CONTACT A DEALER</h2><FaAngleRight className='text-[1.5rem] mt-[-5px] ml-[-5px]' />
            <button className='cursor-pointer lang-btn bg-black px-8 py-1 text-white  rounded-md font-TTBackword'>en</button>
        </div>
    </div>
  )
}

export default Navbar
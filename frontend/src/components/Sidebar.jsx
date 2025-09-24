import React from 'react'
import { IoMenu, IoSearch, IoShareSocialOutline } from "react-icons/io5";
function Sidebar() {
  return (
    <div className='w-[6%] h-screen bg-white flex flex-col justify-between border-r-6  border-zinc-200'>
        <div className="menu-top w-full h-[45%] flex flex-col">
            <div id='menuBg' className="menu-box w-full h-[26%] bg-black text-white flex items-center justify-center text-[2.5rem]">
               <span className='cursor-pointer'><IoMenu /></span> 
            </div>
            <div className="link-icon w-full h-[70%] mt-5">
                <div className="menu-box w-full h-[25%] text-black flex items-center justify-center text-[1.6rem] font-semibold">
                <span className='cursor-pointer'><IoShareSocialOutline /></span> 
                </div>
                <div className="menu-box w-full h-[25%]  text-black flex items-center justify-center text-[1.6rem] font-semibold">
               <span className='cursor-pointer'><IoSearch /></span> 
                </div>
            </div>
        </div>
        <div className="menu-bottom w-full h-[40%]">
           <div className="social-link w-full h-full flex flex-col  items-center font-gilroy justify-evenly text-[0.9rem] font-semibold">
                <h2 className='rotate-[-90deg] cursor-pointer selection:bg-pink-500 selection:text-black text-pink-500'>Instagram</h2>
                <h2 className='rotate-[-90deg] cursor-pointer selection:bg-blue-500 text-blue-900'>Twitter</h2>
                <h2 className='rotate-[-90deg] cursor-pointer selection:bg-blue-800 selection:text-white text-blue-500'>Facebook</h2>
           </div>  
        </div>
    </div>
  )
}

export default Sidebar
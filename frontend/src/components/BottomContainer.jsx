import React, { useState } from 'react'
import { LuMouse } from "react-icons/lu";
import { FaAngleLeft, FaAngleRight  } from "react-icons/fa";
function BottomContainer() {
  const [value, setValue] = useState(1);
  const [width, setWidth] = useState(33);
  const handleDecreaseValue = () => {
    // Only update if the value is greater than 1
    if (value > 1) {
      const newValue = value - 1;
      setValue(newValue);

      if (newValue === 1) {
        setWidth(33);
      } else if (newValue === 2) {
        setWidth(66);
      }
    }
  };
  const handleIncreaseValue = () => {
    // Only update if the value is less than 3
    if (value < 3) {
      const newValue = value + 1;
      setValue(newValue);

      if (newValue === 2) {
        setWidth(66);
      } else if (newValue === 3) {
        setWidth(100);
      }
    }
  };

  const progressStyles = {
    width: `${width}%`
  };
  return (
    <div className='w-full h-[35%] text-black z-10 flex  flex-col items-center mt-16'>
        <div className="top-part w-[60%] h-[80%] flex flex-col justify-center items-center">
          <h1 className='font-TTBackword text-[3rem] selection:bg-orange-500 selection:text-black'>Own The Road</h1>
          <p className='text-[1rem] text-center tracking-tight font-TTBackword text-black/35 selection:bg-yellow-300 selection:text-black'>Ready to ride? Browse our fleet of bikes and find your perfect match for a day of discovery or a weekend getaway. Your next adventure starts now! <br /> Skip the traffic and the hassle. Book your bike in minutes and start your trip.</p>
          <button className='cursor-pointer px-28 py-2 bg-black text-white rounded-3xl font-TTBackword mt-2 text-[0.9rem] selection:text-yellow-400 hover:bg-zinc-800'>CUSTOMIZE</button>
        </div>
         
        <div className="bottom-part w-full h-15 flex justify-between font-TTBackword">
          <div className="left-part w-[30%] h-full flex items-center select-none pl-4 gap-2">
            <h1>0{value}</h1>
            <div className="progress-line w-[60%] h-1.5 bg-zinc-600/40 rounded-md overflow-hidden">
               <div className="h-full bg-zinc-700 transition-all duration-300" style={progressStyles}></div>
            </div>
            <h1>03</h1>
          </div>
          <div className="mid-part w-[30%] h-full gap-1 flex flex-col items-center justify-end">
            <LuMouse className='text-[1.4rem]'/>
            <p className='font-TTBackword text-[1rem] select-none'>EXPLORE MORE</p>
          </div>
          <div className="right-part w-[30%] h-full flex justify-end">
            <div className="pagination-box w-[30%] h-full bg-black text-white flex items-center justify-around text-[1.5rem]">
              <FaAngleLeft onClick={handleDecreaseValue} className='cursor-pointer' />
              <FaAngleRight onClick={handleIncreaseValue} className='cursor-pointer' />  
            </div>
          </div>
        </div>
    </div>
  )
}

export default BottomContainer
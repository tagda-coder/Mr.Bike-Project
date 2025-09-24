import React from 'react'
import ducatiImage from '../assets/Images/DucattiFinalImage.png';
import { MdOutline3dRotation } from "react-icons/md";
function ImageContainer() {
  return (
    <>
     <div className='Image-container w-full h-[50%] flex justify-center'>
     {/* <img
          src={ducatiImage}
          alt="Scrambler Ducati"
          className="w-[80%] object-cover mt-[-5rem] ml-[-10%] rounded-md"
        /> */}
    </div>
    <div className='w-[80%] h-[100%]  fixed flex justify-center items-center overflow-hidden'>
            <img className='w-[94%] ml-[15%] mt-[-14%] select-none' src={ducatiImage} alt="" />
    </div>
    <div className="3dbox bg-red-400">
      <MdOutline3dRotation className='text-[3rem] ml-[87%] mt-[-7%] absolute'/>
      <h1 className='font-TTBackword ml-[86.6%] mt-[-3.5%] absolute selection:bg-yellow-300 selection:text-black'>ROTATE VIEW</h1>
    </div>
    </> 
  )
}

export default ImageContainer
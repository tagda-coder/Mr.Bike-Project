import React from 'react'
import BackgroundImageShadow from '../assets/Images/bikeshadow-2.png'
function BackgroundImage() {
  return (
    <div className='w-[80%] h-[100%] fixed flex justify-left items-center overflow-hidden'>
        <img className='w-[60%] ml-[-20%] opacity-18' src={BackgroundImageShadow} alt="" />
    </div>
  )
}

export default BackgroundImage;
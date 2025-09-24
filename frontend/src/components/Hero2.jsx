import React from 'react'
import Navbar from './Navbar';
import ImageContainer from './ImageContainer';
import BottomContainer from './BottomContainer';
import BackgroundImage from './BackgroundImage';
function Hero2() {
  return (
    <div className='w-[94%] h-screen bg-white flex flex-col'>
        <BackgroundImage />
        <Navbar />
        <ImageContainer />
        <BottomContainer />
    </div>
  )
}

export default Hero2
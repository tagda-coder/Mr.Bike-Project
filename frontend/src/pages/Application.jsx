import React from 'react'
import Sidebar from '../components/Sidebar'
import Hero2 from '../components/Hero2'

function Application() {
  return (
    <div className='w-full h-screen bg-zinc-700 flex  background-page'>
        <Sidebar />
        <Hero2 />
    </div>
  )
}

export default Application
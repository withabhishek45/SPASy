import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const Background = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen relative">
        
        <div className="flex-grow relative flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
          <img src="/src/assets/bg.png" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative text-5xl text-purple-500 font-bold z-10">Welcome to Our Platform</div>
        </div>
        
      </div>
    </>
  )
}

export default Background

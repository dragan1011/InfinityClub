import React from 'react'
import Button from './UI/Button'

const Hero = () => {
  return (
    <div className='flex items-center text-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-[url("/utilities/hero-background.png")]'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]' />
        <div className='p-5 text-[#EAD185] text-heading z-[2] mt-[-10rem]'>
            <img className='inline-block' src='/utilities/infinity_logo_2.png' />
            <h2 className='text-6xl'>Bar & Restaurant</h2>
            <p className='pb-24 pt-6 text-[#E5E5E5]'>Welcome to the best clubbing experience in Graz</p>
            <Button>Find Us</Button>
            <Button>Out Menu</Button>
        </div>
       
        <div className='absolute top-3/4 left-0 right-0 bottom-0' />
        <div className='absolute text-[#E5E5E5] left-0 right-[80rem] bottom-32 text-lg'>
          <div>Follow Us On</div>
          <div className='flex absolute left-32'>
            <img src="/utilities/facebook.png" alt="" />
            <img src="/utilities/instagram.png" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Hero
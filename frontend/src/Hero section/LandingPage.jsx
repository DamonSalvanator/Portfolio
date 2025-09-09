import React from 'react'
import generatedImage from '../images/generated-image.png'
import RightSection from './RightSection'
import LeftSection from './LeftSection'
import Header from './Header'

const LandingPage = () => {
  return (
    <div id='LandingPage' className='font-inter relative bg-black h-screen w-full overflow-x-hidden'>
      
      {/* Background Image */}
      <img 
        src={generatedImage} 
        className='absolute inset-0 h-full w-full object-cover'  
        alt="Background"
      />

      {/* Overlay Content */}
      <div className='absolute inset-0 flex flex-col'>
        
        {/* Sections */}
        <div className='flex flex-col lg:flex-row mt-16 lg:mt-10 h-full w-full px-6 lg:px-20'>
          {/* Right Section (Text) */}
          <div className='flex-1 flex justify-center items-center'>
            <RightSection />
          </div>
          {/* Left Section (Image) */}
          <div className='flex-1 flex justify-center items-center mt-10 lg:mt-0'>
            <LeftSection />
          </div>
        </div>
      </div>

      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full flex justify-center p-4 z-50">
        <Header />
      </div>
    </div>
  )
}

export default LandingPage

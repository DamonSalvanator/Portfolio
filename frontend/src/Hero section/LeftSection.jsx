import React from 'react'
import homeprofile from "../images/homeprofile.png"

const LeftSection = () => {
  return (
    <div className="px-6">
      <img 
        src={homeprofile} 
        alt="Profile" 
        className="w-60 h-60 sm:w-64 sm:h-64 lg:w-96 lg:h-96 object-contain drop-shadow-xl"
      />
    </div>
  )
}

export default LeftSection

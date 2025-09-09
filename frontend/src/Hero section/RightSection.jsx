import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6"
import { FiGithub } from "react-icons/fi"

const RightSection = () => {
  return (
    <div className="text-white text-center lg:text-left max-w-xl">
      
      <h3 className="text-2xl sm:text-3xl font-light text-gray-100">
        Hey, there 👋
      </h3>
      
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-3">
        I’m <span className="italic text-green-400">Yash Bagde,</span>
      </h1>
      
      <h4 className="text-2xl sm:text-3xl lg:text-4xl font-medium mt-4">
        a Full Stack Developer
      </h4>
      
      <p className="mt-6 text-lg sm:text-xl text-gray-300 italic leading-relaxed">
        "I build seamless digital experiences <br className="hidden sm:block"/> 
        from the first pixel to the last API call."
      </p>

      {/* Social Icons */}
      <div className='flex justify-center lg:justify-start mt-6 space-x-4 text-xl sm:text-2xl'>
        <a 
          href="https://www.linkedin.com/in/yash-bagde-182b14358/" 
          className='bg-black rounded-md p-2 transition-all duration-300 hover:bg-blue-600 hover:scale-110'
        >
          <FaLinkedinIn />
        </a>

        <a 
          href="https://github.com/DamonSalvanator" 
          className='bg-black rounded-md p-2 transition-all duration-300 hover:bg-white hover:text-black hover:scale-110'
        >
          <FiGithub />
        </a>
      </div>
      
    </div>
  )
}

export default RightSection

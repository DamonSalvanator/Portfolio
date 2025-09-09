import React from 'react'
import ScrollingComponent from './ScrollingComponent'

const Skills = () => {
  return (
    <div id='Skills' className='h-screen pt-20  w-full flex flex-col items-center justify-center bg-black '>
        <h3 className='text-4xl font-bold text-green-700  '>Skills</h3>
        <p className="text-3xl text-white font-italic font-light mt-5">Tools & Technologies</p>

        <div className='h-full w-full '>
            <ScrollingComponent></ScrollingComponent>
        </div>
      
    </div>
  )
}

export default Skills

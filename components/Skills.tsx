import React from 'react'
import { Roboto_Slab } from "next/font/google"

const title = Roboto_Slab({ subsets: ['latin'] })

const Skills = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className="w-full border-b-2 border-violet12 slide-w">
        <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>MY SKILLS • MY SKILLS • </h1>
        <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>MY SKILLS • MY SKILLS • </h1>
        <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>MY SKILLS • MY SKILLS • </h1>
        <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>MY SKILLS • MY SKILLS • </h1>
      </div>
      <div className='w-full h-full md:h-[650px] border-b-2 border-violet12 flex flex-col md:flex-row overflow-hidden'>
        <div className='w-full min-w-[50%] min-h-[325px] h-full md:border-r-2 border-b-2 md:border-b-0 border-violet12'>
        </div>
        <div className='w-full h-full flex flex-col justify-between p-10'>
          <h2 className={`${title.className} text-h1 font-medium text-violet11`}>MY SKILLS</h2>
          <p className=' text-justify'>
            This is my set of skills. I am investing most of my time in learning 
            languages and libraries that leans to web development, like HTML5, 
            CSS3, Javascript, React, Next and Vue. but I like to change 
            sometimes too! I studied COBOL, C/C+ and Python due to their usability
            in the market. I worked as a visual identity designer for a while, so
            I have knowledge of some design principles and I know how to use Adobe
            Photoshop and Illustrator too!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
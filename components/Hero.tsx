import Link from 'next/link'
import React from 'react'
import "../app/globals.css"

const Hero = () => {
  return (
    <div className="w-full flex flex-col">
      <div className='w-full md:h-[650px] h-full border-b-2 border-violet12 flex flex-col md:flex-row'>
        <div className='w-full min-w-[50%] min-h-[50%] h-full md:border-r-2 border-b-2 md:border-b-0 border-violet12 flex flex-col items-center justify-center'>
          <div className='flex flex-col items-start justify-center p-5'>
            <h2 className='text-h4'>Hi! You can call me</h2>
            <h1 className='text-h1 font-bold text-violet11'>Carlos Morais,</h1>
            <h2 className='text-h4'>and I am the</h2>
            <h2 className='text-h3 text-violet11'>web developer you need.</h2>
            <Link href="/" className='text-btn font-medium p-2.5 mt-2.5 border-2 border-violet12 rounded-lg
            hover:bg-violet9 hover:text-violet1'>Download my CV</Link>
          </div>
        </div>
        <div className='w-full h-full flex flex-col text-h1 md:text-titles'>
          <div className="slide-w">
            <h1 className='slide-t font-bold text-violet11 slide-nor'>MY PORTFOLIO</h1>
            <h1 className='slide-t font-bold text-violet11 slide-nor'>MY PORTFOLIO</h1>
            <h1 className='slide-t font-bold text-violet11 slide-nor'>MY PORTFOLIO</h1>
            <h1 className='slide-t font-bold text-violet11 slide-nor'>MY PORTFOLIO</h1>
          </div>
          <div className="slide-w">
            <h1 className='slide-t font-bold text-violet12 slide-rev'>MY PORTFOLIO</h1>
            <h1 className='slide-t font-bold text-violet12 slide-rev'>MY PORTFOLIO</h1>
            <h1 className='slide-t font-bold text-violet12 slide-rev'>MY PORTFOLIO</h1>
            <h1 className='slide-t font-bold text-violet12 slide-rev'>MY PORTFOLIO</h1>
          </div>
          <div className="slide-w">
            <h1 className='slide-t font-bold text-violet11 slide-nor'>MY PORTFOLIO</h1>
            <h1 className='slide-t font-bold text-violet11 slide-nor'>MY PORTFOLIO</h1>
            <h1 className='slide-t font-bold text-violet11 slide-nor'>MY PORTFOLIO</h1>
            <h1 className='slide-t font-bold text-violet11 slide-nor'>MY PORTFOLIO</h1>
          </div>
          <div className="slide-w">
            <h1 className='slide-t font-bold text-violet12 slide-rev'>MY PORTFOLIO</h1>
            <h1 className='slide-t font-bold text-violet12 slide-rev'>MY PORTFOLIO</h1>
            <h1 className='slide-t font-bold text-violet12 slide-rev'>MY PORTFOLIO</h1>
            <h1 className='slide-t font-bold text-violet12 slide-rev'>MY PORTFOLIO</h1>
          </div>
          <div className="slide-w md:hidden">
            <h1 className='slide-t font-bold text-violet11 slide-nor'>MY PORTFOLIO</h1>
            <h1 className='slide-t font-bold text-violet11 slide-nor'>MY PORTFOLIO</h1>
            <h1 className='slide-t font-bold text-violet11 slide-nor'>MY PORTFOLIO</h1>
            <h1 className='slide-t font-bold text-violet11 slide-nor'>MY PORTFOLIO</h1>
          </div>
        </div>
      </div>

      <div className='w-full h-[65px] border-b-2 border-violet12 bg-violet7 slide-w'>
        <h2 className='slide-t text-h2 font-bold italic slide-full text-violet1'>HTML5 • CSS3 • JavaScript • React • NextJS • VueJS • NuxtJS • TailwindCSS • COBOL • Python • Firebase • Gaming • Writing • Studying • D&D • Reading • </h2>
        <h2 className='slide-t text-h2 font-bold italic slide-full text-violet1'>HTML5 • CSS3 • JavaScript • React • NextJS • VueJS • NuxtJS • TailwindCSS • COBOL • Python • Firebase • Gaming • Writing • Studying • D&D • Reading • </h2>
      </div>
    </div>
  )
}

export default Hero
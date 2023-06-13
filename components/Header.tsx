import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='flex bg-violet1 text-violet12 h-[65px] border-b-2 border-violet12'>
      <div className='w-full hidden md:flex justify-between items-center '>
        <button className='text-h1 font-bold border-r-2 border-violet12 px-3
        hover:bg-violet9 hover:text-violet1'>
          CM DEV
        </button>
        <div className='text-btn font-medium'>
          <button 
          className='h-[65px] border-l-2 border-violet12 px-6 
          hover:bg-violet9 hover:text-violet1 
          active:bg-violet9 active:text-violet1'>
            About me
          </button>
          <button 
          className='h-[65px] border-l-2 border-violet12 px-6 +
          hover:bg-violet9 hover:text-violet1 
          active:bg-violet9 active:text-violet1'>
            My skills
          </button>
          <button 
          className='h-[65px] border-l-2 border-violet12 px-6 
          hover:bg-violet9 hover:text-violet1 
          active:bg-violet9 active:text-violet1'>
            My projects
          </button>
          <button 
          className='h-[65px] border-l-2 border-violet12 px-6 
          hover:bg-violet9 hover:text-violet1 
          active:bg-violet9 active:text-violet1'>
            Contact
          </button>
        </div>
      </div>
      <div className='h-full w-full flex md:hidden justify-between items-center'>
        <button className='h-full w-full flex justify-center items-center px-5
        hover:bg-violet4'>
          <Image src="/icons/home.svg" alt='home' width={45} height={45}/>
        </button>

        <button className='h-full w-full flex justify-center items-center border-l-2 border-violet-12 px-5
        hover:bg-violet4'>
          <Image src="/icons/about.svg" alt='about' width={45} height={45}/>
        </button>

        <button className='h-full w-full flex justify-center items-center border-l-2 border-violet-12 px-5
        hover:bg-violet4'>
          <Image src="/icons/projects.svg" alt='projects' width={45} height={45}/>
        </button>

        <button className='h-full w-full flex justify-center items-center border-l-2 border-violet-12 px-5
        hover:bg-violet4'>
          <Image src="/icons/contact.svg" alt='contact' width={45} height={45}/>
        </button>
      </div>
    </header>
  )
}

export default Header
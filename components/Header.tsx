import React from 'react'

const Header = () => {
  return (
    <header className='bg-violet1 text-violet12 h-[65px] flex justify-between items-center border-b-2 border-violet12'>
      <button className='text-h1 font-bold border-r-2 border-violet12 px-10
      hover:bg-violet9 hover:text-violet1'>
        CM DEV
      </button>
      <div>
        <button 
        className='h-[65px] border-l-2 border-violet12 px-7 
        hover:bg-violet9 hover:text-violet1 
        active:bg-violet9 active:text-violet1'>
          About me
        </button>
        <button 
        className='h-[65px] border-l-2 border-violet12 px-7 
        hover:bg-violet9 hover:text-violet1 
        active:bg-violet9 active:text-violet1'>
          My skills
        </button>
        <button 
        className='h-[65px] border-l-2 border-violet12 px-7 
        hover:bg-violet9 hover:text-violet1 
        active:bg-violet9 active:text-violet1'>
          My projects
        </button>
        <button 
        className='h-[65px] border-l-2 border-violet12 px-7 
        hover:bg-violet9 hover:text-violet1 
        active:bg-violet9 active:text-violet1'>
          Contact
        </button>
      </div>
    </header>
  )
}

export default Header
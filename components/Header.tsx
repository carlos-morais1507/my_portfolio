"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/app/i18n';

export default async function Header({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <header className='flex bg-violet1 text-violet12 h-[65px] border-b-2 border-violet12 scroll-smooth fixed top-0 w-full z-50'>
      <div className='w-full hidden md:flex justify-between items-center '>
        <Link href="#Hero" onClick={handleScroll}
        className='text-h1 font-bold border-r-2 border-violet12 px-3
        hover:bg-violet9 hover:text-violet1'>
          CM DEV
        </Link>
        <div className='text-btn font-medium h-full flex items-center justify-center'>
          <Link href="#About" onClick={handleScroll}
          className='h-[65px] border-l-2 border-violet12 px-6 flex items-center 
          hover:bg-violet9 hover:text-violet1 
          active:bg-violet9 active:text-violet1'>
            {t('header__about')}
          </Link>
          <Link scroll={false} href="#Skills" onClick={handleScroll}
          className='h-[65px] border-l-2 border-violet12 px-6 flex items-center
          hover:bg-violet9 hover:text-violet1 
          active:bg-violet9 active:text-violet1'>
            {t('header__skills')}
          </Link>
          <Link href={"#Projects"} onClick={handleScroll}
          className='h-[65px] border-l-2 border-violet12 px-6 flex items-center 
          hover:bg-violet9 hover:text-violet1 
          active:bg-violet9 active:text-violet1'>
            {t('header__projects')}
          </Link>
          <Link href={"#Contact"} onClick={handleScroll} 
          className='h-[65px] border-l-2 border-violet12 px-6 flex items-center 
          hover:bg-violet9 hover:text-violet1 
          active:bg-violet9 active:text-violet1'>
            {t('header__contact')}
          </Link>
        </div>
      </div>

      <div className='h-full w-full flex md:hidden justify-between items-center mb-[65px]'>
        <Link href="#Hero" onClick={handleScroll}
        className='h-full w-full flex justify-center items-center px-5
        hover:bg-violet4'>
          <Image src="/icons/home.svg" alt='home' width={45} height={45}/>
        </Link>

        <Link href="#About" onClick={handleScroll}
        className='h-full w-full flex justify-center items-center border-l-2 border-violet-12 px-5
        hover:bg-violet4'>
          <Image src="/icons/about.svg" alt='about' width={45} height={45}/>
        </Link>

        <Link href="#Projects" onClick={handleScroll}
        className='h-full w-full flex justify-center items-center border-l-2 border-violet-12 px-5
        hover:bg-violet4'>
          <Image src="/icons/projects.svg" alt='projects' width={45} height={45}/>
        </Link>

        <Link href="#Contact" onClick={handleScroll}
        className='h-full w-full flex justify-center items-center border-l-2 border-violet-12 px-5
        hover:bg-violet4'>
          <Image src="/icons/contact.svg" alt='contact' width={45} height={45}/>
        </Link>
      </div>
    </header>
  )
}
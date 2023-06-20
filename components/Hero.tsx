"use client";
import React, { useState } from 'react';
import "../app/globals.css";
import Link from 'next/link';
import { useTranslation } from '@/app/i18n';

export default async function Hero({ params: { lng } }: { params: { lng: string } }) {
  const [hidden, setHidden] = useState(false);
  const { t } = await useTranslation(lng);

  const showMenu = () => {
    const langBtn = document.querySelector(".lang__btn");
    if (hidden) {
      langBtn?.classList.remove("ml-[250px]");
    } else {
      langBtn?.classList.add("ml-[250px]");
    }
    setHidden(!hidden);
    console.log(hidden);
  };

  return (
    <div id='Hero' className="w-full flex flex-col scroll-mt-[65px]">
      <div className='w-full md:h-[650px] h-full border-b-2 border-violet12 flex flex-col md:flex-row overflow-hidden'>
        <div className='w-full min-w-[50%] min-h-[50%] h-full md:border-r-2 border-b-2 md:border-b-0 border-violet12 flex flex-col items-center justify-center'>
          <div className='flex flex-col items-start justify-center p-5'>
            <h2 className='text-h4'>{t('hero__sub1')}</h2>
            <h1 className='text-h1 font-bold text-violet11'>Carlos Morais,</h1>
            <h2 className='text-h4'>{t('hero__sub2')}</h2>
            <h2 className='text-h3 text-violet11'>{t('hero__sub3')}</h2>
            <div className='flex gap-3 items-end justify-center'>
              <button id='lang__menu' onClick={showMenu} className='relative z-10 bg-violet1 text-btn font-medium p-2.5 mt-2.5 border-2 border-violet12 rounded-lg hover:bg-violet9 hover:text-violet1'>{t('hero__cta')}</button>
              <div className='absolute z-0 flex lang__btn gap-3 transition-all'>
                <Link href="https://drive.google.com/file/d/1KaOdW9t15P__U2k2uPPld1hTanu9EqVf/view?usp=drive_link" target='_blank'>
                  <div className='bg-lang__pt hover:bg-lang__pt-hover w-[40px] h-[40px] transition-all duration-200' />
                </Link>
                <Link href="https://drive.google.com/file/d/1hj63WC9YmelLxY3rEOULTcYofBzbOAso/view?usp=drive_link" target='_blank'>
                  <div className='bg-lang__en hover:bg-lang__en-hover w-[40px] h-[40px] transition-all duration-200' />
                </Link>
              </div>
              
            </div>
            <Link href={lng === "en" ? "/pt" : "/en"} className='italic text-btn mt-3' >{t('hero__lang-btn')}</Link>
          </div>
        </div>
        <div className='w-full h-full flex flex-col text-h1 md:text-titles'>
          <div className="slide-w">
            <h1 className='slide-t font-bold text-violet11 slide-nor'>{t('hero__title')}</h1>
            <h1 className='slide-t font-bold text-violet11 slide-nor'>{t('hero__title')}</h1>
            <h1 className='slide-t font-bold text-violet11 slide-nor'>{t('hero__title')}</h1>
            <h1 className='slide-t font-bold text-violet11 slide-nor'>{t('hero__title')}</h1>
          </div>
          <div className="slide-w">
            <h1 className='slide-t font-bold text-violet12 slide-rev'>{t('hero__title')}</h1>
            <h1 className='slide-t font-bold text-violet12 slide-rev'>{t('hero__title')}</h1>
            <h1 className='slide-t font-bold text-violet12 slide-rev'>{t('hero__title')}</h1>
            <h1 className='slide-t font-bold text-violet12 slide-rev'>{t('hero__title')}</h1>
          </div>
          <div className="slide-w">
            <h1 className='slide-t font-bold text-violet11 slide-nor'>{t('hero__title')}</h1>
            <h1 className='slide-t font-bold text-violet11 slide-nor'>{t('hero__title')}</h1>
            <h1 className='slide-t font-bold text-violet11 slide-nor'>{t('hero__title')}</h1>
            <h1 className='slide-t font-bold text-violet11 slide-nor'>{t('hero__title')}</h1>
          </div>
          <div className="slide-w">
            <h1 className='slide-t font-bold text-violet12 slide-rev'>{t('hero__title')}</h1>
            <h1 className='slide-t font-bold text-violet12 slide-rev'>{t('hero__title')}</h1>
            <h1 className='slide-t font-bold text-violet12 slide-rev'>{t('hero__title')}</h1>
            <h1 className='slide-t font-bold text-violet12 slide-rev'>{t('hero__title')}</h1>
          </div>
          <div className="slide-w md:hidden">
            <h1 className='slide-t font-bold text-violet11 slide-nor'>{t('hero__title')}</h1>
            <h1 className='slide-t font-bold text-violet11 slide-nor'>{t('hero__title')}</h1>
            <h1 className='slide-t font-bold text-violet11 slide-nor'>{t('hero__title')}</h1>
            <h1 className='slide-t font-bold text-violet11 slide-nor'>{t('hero__title')}</h1>
          </div>
        </div>
      </div>

      <div className='w-full h-[65px] border-b-2 border-violet12 bg-violet7 slide-w'>
        <h2 className='slide-t text-h2 font-bold italic slide-full text-violet1'>HTML5 • CSS3 • JavaScript • React • NextJS • VueJS • NuxtJS • TailwindCSS • COBOL • Python • Firebase • Gaming • Writing • Studying • D&D • Reading • </h2>
        <h2 className='slide-t text-h2 font-bold italic slide-full text-violet1'>HTML5 • CSS3 • JavaScript • React • NextJS • VueJS • NuxtJS • TailwindCSS • COBOL • Python • Firebase • Gaming • Writing • Studying • D&D • Reading • </h2>
      </div>
    </div>
  );
}

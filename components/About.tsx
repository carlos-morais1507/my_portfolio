import Image from "next/image"
import { Roboto_Slab } from "next/font/google"
import { useTranslation } from '@/app/i18n';

const title = Roboto_Slab({ subsets: ['latin'] })

export default async function About({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng);

  return (
    <div id="About" className='w-full flex flex-col scroll-mt-[65px]'>
      <div className="w-full border-b-2 border-violet12 slide-w">
        <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>{t('about__title')} • {t('about__title')} • {t('about__title')} • </h1>
        <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>{t('about__title')} • {t('about__title')} • {t('about__title')} • </h1>
        <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>{t('about__title')} • {t('about__title')} • {t('about__title')} • </h1>
        <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>{t('about__title')} • {t('about__title')} • {t('about__title')} • </h1>
      </div>
      <div className='w-full h-full md:h-[650px] border-b-2 border-violet12 flex flex-col md:flex-row overflow-hidden'>
        <div className='w-full min-w-[50%] min-h-[325px] h-full md:border-r-2 border-b-2 md:border-b-0 border-violet12 bg-carlos-photo bg-cover bg-center flex items-end justify-end'>
          <div className="whitespace-nowrap overflow-hidden">
            <Image src="/assets/AboutBadge.svg" alt="About Badge" width={200} height={200} className="animate-spin-slow mb-[-30%] ml-[30%]"/>
          </div>
        </div>

        <div className='w-full h-full flex flex-col justify-between p-10'>
          <h2 className={`${title.className} text-h1 font-medium text-violet11`}>{t('about__title')}</h2>
          <p className=" text-justify">{t('about__text')}</p>
        </div>
      </div>
    </div>
  )
}
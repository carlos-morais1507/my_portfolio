import Image from "next/image"
import { Roboto_Slab } from "next/font/google"

const title = Roboto_Slab({ subsets: ['latin'] })

const About = () => {
  return (
    <div className='w-full flex flex-col'>
      <div className="w-full border-b-2 border-violet12 slide-w">
        <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>ABOUT ME • ABOUT ME • ABOUT ME • </h1>
        <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>ABOUT ME • ABOUT ME • ABOUT ME • </h1>
        <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>ABOUT ME • ABOUT ME • ABOUT ME • </h1>
        <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>ABOUT ME • ABOUT ME • ABOUT ME • </h1>
      </div>
      <div className='w-full h-full md:h-[650px] border-b-2 border-violet12 flex flex-col md:flex-row overflow-hidden'>
        <div className='w-full min-w-[50%] min-h-[325px] h-full md:border-r-2 border-b-2 md:border-b-0 border-violet12 bg-carlos-photo bg-cover bg-center flex items-end justify-end'>
          <div className="whitespace-nowrap overflow-hidden">
            <Image src="/assets/AboutBadge.svg" alt="About Badge" width={200} height={200} className="animate-spin-slow mb-[-30%] ml-[30%]"/>
          </div>
        </div>

        <div className='w-full h-full flex flex-col justify-between p-10'>
          <h2 className={`${title.className} text-h1 font-medium text-violet11`}>ABOUT ME</h2>
          <p>
            I am an talented and creative front-end developer with skills in HTML, CSS, JavaScript, React, Next, Tailwind, and Firebase. Currently, I am in my second year of a Bachelor's degree in Information Systems at PUCMG and enjoy writing in my free time. I am from Rio de Janeiro and always looking for new opportunities for learning and professional growth.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
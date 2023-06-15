"use client";

import Image from "next/image";
import { ProjectBoxProps } from "@/types";
import Link from "next/link";
import { Roboto_Slab } from "next/font/google"
import { idText } from "typescript";

const title = Roboto_Slab({ subsets: ['latin'] })

const ProjectBox = ({ id, name, url, desc, stack, imgurl }: ProjectBoxProps) => {
  return (
    <div className='w-full h-full md:border-b-0 border-b-2 border-l-violet12'>
      <div className='w-full h-[65px] border-b-2 border-violet12 bg-violet7 slide-w'>
        <h2 className={`slide-t text-h2 font-bold italic ${Number(id) % 2 === 0 ? "slide-full" : "slide-full-rev"} text-violet1`}>{`${name} • ${name} • ${name} • ${name} • ${name} • ${name} • ${name} • `}</h2>
        <h2 className={`slide-t text-h2 font-bold italic ${Number(id) % 2 === 0 ? "slide-full" : "slide-full-rev"} text-violet1`}>{`${name} • ${name} • ${name} • ${name} • ${name} • ${name} • ${name} • `}</h2>
        <h2 className={`slide-t text-h2 font-bold italic ${Number(id) % 2 === 0 ? "slide-full" : "slide-full-rev"} text-violet1`}>{`${name} • ${name} • ${name} • ${name} • ${name} • ${name} • ${name} • `}</h2>
        <h2 className={`slide-t text-h2 font-bold italic ${Number(id) % 2 === 0 ? "slide-full" : "slide-full-rev"} text-violet1`}>{`${name} • ${name} • ${name} • ${name} • ${name} • ${name} • ${name} • `}</h2>
        <h2 className={`slide-t text-h2 font-bold italic ${Number(id) % 2 === 0 ? "slide-full" : "slide-full-rev"} text-violet1`}>{`${name} • ${name} • ${name} • ${name} • ${name} • ${name} • ${name} • `}</h2>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:border-b-2 border-b-0 border-violet12">
        <Image placeholder="blur" blurDataURL={imgurl} key={imgurl} src={imgurl!} alt={name} width={300} height={300} className="aspect-square w-full md:h-[100%] md:w-[40%] md:border-b-0 border-b-2 border-violet12 md:border-r-2"/>
        <div className=" w-full md:max-w-[50%] h-full p-5 md:p-0 md:pr-10 md:pb-5 flex flex-col">
            <h1 className={`${title.className} text-h1 text-violet11 font-medium`}>{name}</h1>
            <div className="flex gap-3">
              {stack.map((item) => (
                <Image key={item} src={`/icons/${item}.svg`} alt={item} width={30} height={30} />
                /*<h2 key={item} className="text-btn font-medium bg-violet9 text-violet1 p-1 px-2">{item}</h2>*/
              ))}
            </div>
          <p className="py-3 text-justify">{desc}</p>
          <Link href={url!} target="blank" className={`${url==="" ? "hidden" : ""}
          text-btn font-medium p-2 border-2 border-violet12 rounded-lg md:w-fit w-full
        hover:bg-violet9 hover:text-violet1`}>Go to deploy</Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectBox
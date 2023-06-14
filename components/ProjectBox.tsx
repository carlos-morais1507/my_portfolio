"use client";

import Image from "next/image";
import { ProjectBoxProps } from "@/types";

const ProjectBox = ({ name, url }: ProjectBoxProps) => {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-[65px] border-b-2 border-violet12 bg-violet7 slide-w'>
        <h2 className='slide-t text-h2 font-bold italic slide-full text-violet1'>{`${name} • ${name} • ${name} • ${name} • ${name} • ${name} • ${name} • `}</h2>
        <h2 className='slide-t text-h2 font-bold italic slide-full text-violet1'>{`${name} • ${name} • ${name} • ${name} • ${name} • ${name} • ${name} • `}</h2>
        <h2 className='slide-t text-h2 font-bold italic slide-full text-violet1'>{`${name} • ${name} • ${name} • ${name} • ${name} • ${name} • ${name} • `}</h2>
        <h2 className='slide-t text-h2 font-bold italic slide-full text-violet1'>{`${name} • ${name} • ${name} • ${name} • ${name} • ${name} • ${name} • `}</h2>
        <h2 className='slide-t text-h2 font-bold italic slide-full text-violet1'>{`${name} • ${name} • ${name} • ${name} • ${name} • ${name} • ${name} • `}</h2>
      </div>
      <div className="w-full flex-col md:flex-row md:p-[20px] items-center justify-center">
        <Image src={url!} alt={name} width={300} height={300} className="aspect-[4/3] w-full md:w-fit md:border-b-0 border-b-2 border-violet12"/>
      </div>
    </div>
  )
}

export default ProjectBox
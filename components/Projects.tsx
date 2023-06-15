"use client";

import ProjectBox from "./ProjectBox"
import { projects } from "@/constants"

const Projects = () => {
  return (
    <div id="Projects" className='w-full flex flex-col scroll-mt-[65px]'>
    <div className="w-full border-b-2 border-violet12 slide-w">
      <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>MY PROJECTS • MY PROJECTS • </h1>
      <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>MY PROJECTS • MY PROJECTS • </h1>
      <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>MY PROJECTS • MY PROJECTS • </h1>
      <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>MY PROJECTS • MY PROJECTS • </h1>
    </div>

    <div className='w-full h-full min-h-[650px]'>
      {projects.map((project) => (
        <ProjectBox 
          key={project.id}
          id = {project.id}
          name = {project.name}
          url= {project.url}
          imgurl = {`/assets/projThumbs/${project.id}.png`}
          stack= {project.stack}
          desc= {project.desc}
        />
      ))}
    </div>

    </div>
  )
}

export default Projects
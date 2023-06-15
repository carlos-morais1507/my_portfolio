import ProjectBox from "./ProjectBox"
import { projects } from "@/constants"

const Projects = () => {
  return (
    <div className='w-full flex flex-col'>
    <div className="w-full border-b-2 border-violet12 slide-w">
      <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>MY PROJECTS • MY PROJECTS • </h1>
      <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>MY PROJECTS • MY PROJECTS • </h1>
      <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>MY PROJECTS • MY PROJECTS • </h1>
      <h1 className='text-titles slide-t slide-full text-violet11 font-bold'>MY PROJECTS • MY PROJECTS • </h1>
    </div>

    <div className='border-b-2 border-l-violet12 w-full h-full min-h-[650px]'>
      {projects.map((project) => (
        <ProjectBox 
          id = {project.id}
          name = {project.name}
          url= {project.url}
          stack= {project.stack}
          desc= {project.desc}
        />
      ))}
    </div>

    </div>
  )
}

export default Projects
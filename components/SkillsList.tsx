import Image from "next/image"
import { skillsList } from "@/constants"

const SkillsList = () => {
  return (
    <div className='w-full h-full'>
      <div className="w-full bg-violet7 border-b-2 border-violet12 slide-w">
        <h1 className='text-h3 md:text-h2 slide-t slide-full text-violet1 font-bold italic'>Front end • Front end • Front end • Front end • </h1>
        <h1 className='text-h3 md:text-h2 slide-t slide-full text-violet1 font-bold italic'>Front end • Front end • Front end • Front end • </h1>
        <h1 className='text-h3 md:text-h2 slide-t slide-full text-violet1 font-bold italic'>Front end • Front end • Front end • Front end • </h1>
        <h1 className='text-h3 md:text-h2 slide-t slide-full text-violet1 font-bold italic'>Front end • Front end • Front end • Front end • </h1>
      </div>
      <div className="w-full h-[150px] border-b-2 border-violet12 slide-w flex">
        <div className="h-full flex items-center gap-7 slide-t slide-nor">
          {skillsList.map((skill) => (
            <>
            <div key={skill.title} className={`${skill.category != 1 ? "hidden" : ""}`}>
              <Image
              src={`/icons/${skill.title}.svg`}
              alt={skill.title} width={150}
              height={150}
              placeholder="blur"
              blurDataURL={`/icons/${skill.title}.svg`}
              className="min-h-[100px] min-w-[100px]"
              />
              
            </div>
            </>
          ))}
        
        </div>
        <div className="h-full flex items-center gap-7 slide-t slide-nor">
          {skillsList.map((skill) => (
            <>
            <div key={skill.title} className={`${skill.category != 1 ? "hidden" : ""}`}>
              <Image
              src={`/icons/${skill.title}.svg`}
              alt={skill.title} width={150}
              height={150}
              placeholder="blur"
              blurDataURL={`/icons/${skill.title}.svg`}
              className="min-h-[100px] min-w-[100px]"
              />
              
            </div>
            </>
          ))}
        
        </div>
        <div className="h-full flex items-center gap-7 slide-t slide-nor">
          {skillsList.map((skill) => (
            <>
            <div key={skill.title} className={`${skill.category != 1 ? "hidden" : ""}`}>
              <Image
              src={`/icons/${skill.title}.svg`}
              alt={skill.title} width={150}
              height={150}
              placeholder="blur"
              blurDataURL={`/icons/${skill.title}.svg`}
              className="min-h-[100px] min-w-[100px]"
              />
              
            </div>
            </>
          ))}
        
        </div>
        <div className="h-full flex items-center gap-7 slide-t slide-nor">
          {skillsList.map((skill) => (
            <>
            <div key={skill.title} className={`${skill.category != 1 ? "hidden" : ""}`}>
              <Image
              src={`/icons/${skill.title}.svg`}
              alt={skill.title} width={150}
              height={150}
              placeholder="blur"
              blurDataURL={`/icons/${skill.title}.svg`}
              className="min-h-[100px] min-w-[100px]"
              />
              
            </div>
            </>
          ))}
        
        </div>
      </div>

      <div className="w-full bg-violet7 border-b-2 border-violet12 slide-w">
        <h1 className='text-h3 md:text-h2 slide-t slide-full text-violet1 font-bold italic'>Back end & Databases • Back end & Databases • </h1>
        <h1 className='text-h3 md:text-h2 slide-t slide-full text-violet1 font-bold italic'>Back end & Databases • Back end & Databases • </h1>
        <h1 className='text-h3 md:text-h2 slide-t slide-full text-violet1 font-bold italic'>Back end & Databases • Back end & Databases • </h1>
        <h1 className='text-h3 md:text-h2 slide-t slide-full text-violet1 font-bold italic'>Back end & Databases • Back end & Databases • </h1>
      </div>
      <div className="w-full h-[150px] border-b-2 border-violet12 slide-w flex">
        <div className="h-full flex items-center gap-7 slide-t slide-rev">
          {skillsList.map((skill) => (
            <>
            <div key={skill.title} className={`${skill.category != 2 ? "hidden" : ""}`}>
              <Image
              src={`/icons/${skill.title}.svg`}
              alt={skill.title} width={150}
              height={150}
              placeholder="blur"
              blurDataURL={`/icons/${skill.title}.svg`}
              className="min-h-[100px] min-w-[100px]"
              />
              
            </div>
            </>
          ))}
        
        </div>
        <div className="h-full flex items-center gap-7 slide-t slide-rev">
          {skillsList.map((skill) => (
            <>
            <div key={skill.title} className={`${skill.category != 2 ? "hidden" : ""}`}>
              <Image
              src={`/icons/${skill.title}.svg`}
              alt={skill.title} width={150}
              height={150}
              placeholder="blur"
              blurDataURL={`/icons/${skill.title}.svg`}
              className="min-h-[100px] min-w-[100px]"
              />
              
            </div>
            </>
          ))}
        
        </div>
        <div className="h-full flex items-center gap-7 slide-t slide-rev">
          {skillsList.map((skill) => (
            <>
            <div key={skill.title} className={`${skill.category != 2 ? "hidden" : ""}`}>
              <Image
              src={`/icons/${skill.title}.svg`}
              alt={skill.title} width={150}
              height={150}
              placeholder="blur"
              blurDataURL={`/icons/${skill.title}.svg`}
              className="min-h-[100px] min-w-[100px]"
              />
              
            </div>
            </>
          ))}
        
        </div>
        <div className="h-full flex items-center gap-7 slide-t slide-rev">
          {skillsList.map((skill) => (
            <>
            <div key={skill.title} className={`${skill.category != 2 ? "hidden" : ""}`}>
              <Image
              src={`/icons/${skill.title}.svg`}
              alt={skill.title} width={150}
              height={150}
              placeholder="blur"
              blurDataURL={`/icons/${skill.title}.svg`}
              className="min-h-[100px] min-w-[100px]"
              />
              
            </div>
            </>
          ))}
        
        </div>
      </div>

      <div className="w-full bg-violet7 border-b-2 border-violet12 slide-w">
        <h1 className='text-h3 md:text-h2 slide-t slide-full text-violet1 font-bold italic'>Other skills • Other skills • Other skills • </h1>
        <h1 className='text-h3 md:text-h2 slide-t slide-full text-violet1 font-bold italic'>Other skills • Other skills • Other skills • </h1>
        <h1 className='text-h3 md:text-h2 slide-t slide-full text-violet1 font-bold italic'>Other skills • Other skills • Other skills • </h1>
        <h1 className='text-h3 md:text-h2 slide-t slide-full text-violet1 font-bold italic'>Other skills • Other skills • Other skills • </h1>
      </div>
      <div className="w-full h-[150px] slide-w flex">
        <div className="h-full flex items-center gap-7 slide-t slide-nor">
          {skillsList.map((skill) => (
            <>
            <div key={skill.title} className={`${skill.category != 3 ? "hidden" : ""}`}>
              <Image
              src={`/icons/${skill.title}.svg`}
              alt={skill.title} width={150}
              height={150}
              placeholder="blur"
              blurDataURL={`/icons/${skill.title}.svg`}
              className="min-h-[100px] min-w-[100px]"
              />
              
            </div>
            </>
          ))}
        
        </div>
        <div className="h-full flex items-center gap-7 slide-t slide-nor">
          {skillsList.map((skill) => (
            <>
            <div key={skill.title} className={`${skill.category != 3 ? "hidden" : ""}`}>
              <Image
              src={`/icons/${skill.title}.svg`}
              alt={skill.title} width={150}
              height={150}
              placeholder="blur"
              blurDataURL={`/icons/${skill.title}.svg`}
              className="min-h-[100px] min-w-[100px]"
              />
              
            </div>
            </>
          ))}
        
        </div>
        <div className="h-full flex items-center gap-7 slide-t slide-nor">
          {skillsList.map((skill) => (
            <>
            <div key={skill.title} className={`${skill.category != 3 ? "hidden" : ""}`}>
              <Image
              src={`/icons/${skill.title}.svg`}
              alt={skill.title} width={150}
              height={150}
              placeholder="blur"
              blurDataURL={`/icons/${skill.title}.svg`}
              className="min-h-[100px] min-w-[100px]"
              />
              
            </div>
            </>
          ))}
        
        </div>
        <div className="h-full flex items-center gap-7 slide-t slide-nor">
          {skillsList.map((skill) => (
            <>
            <div key={skill.title} className={`${skill.category != 3 ? "hidden" : ""}`}>
              <Image
              src={`/icons/${skill.title}.svg`}
              alt={skill.title} width={150}
              height={150}
              placeholder="blur"
              blurDataURL={`/icons/${skill.title}.svg`}
              className="min-h-[100px] min-w-[100px]"
              />
              
            </div>
            </>
          ))}
        
        </div>
        <div className="h-full flex items-center gap-7 slide-t slide-nor">
          {skillsList.map((skill) => (
            <>
            <div key={skill.title} className={`${skill.category != 3 ? "hidden" : ""}`}>
              <Image
              src={`/icons/${skill.title}.svg`}
              alt={skill.title} width={150}
              height={150}
              placeholder="blur"
              blurDataURL={`/icons/${skill.title}.svg`}
              className="min-h-[100px] min-w-[100px]"
              />
              
            </div>
            </>
          ))}
        
        </div>
      </div>
    </div>

    
  )
}

export default SkillsList
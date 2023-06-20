"use client";

import ProjectBox from './ProjectBox';
import { projects } from '@/constants';
import { useTranslation } from '@/app/i18n';
import { Project } from '@/types';

export default async function Skills({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng);

  const getProjectDescription = (project: Project) => {
    if (lng === 'en' && project.desc__en) {
      return project.desc__en;
    } else if (lng === 'pt' && project.desc__pt) {
      return project.desc__pt;
    } else {
      return '';
    }
  };

  return (
    <div id="Projects" className="w-full flex flex-col scroll-mt-[65px]">
      <div className="w-full border-b-2 border-violet12 slide-w">
        <h1 className="text-titles slide-t slide-full text-violet11 font-bold">
          {t('projects__title')} • {t('projects__title')} •
        </h1>
        <h1 className="text-titles slide-t slide-full text-violet11 font-bold">
          {t('projects__title')} • {t('projects__title')} •
        </h1>
        <h1 className="text-titles slide-t slide-full text-violet11 font-bold">
          {t('projects__title')} • {t('projects__title')} •
        </h1>
        <h1 className="text-titles slide-t slide-full text-violet11 font-bold">
          {t('projects__title')} • {t('projects__title')} •
        </h1>
      </div>

      <div className="w-full h-full min-h-[650px]">
        {projects.map((project) => (
          <ProjectBox
            params={{ lng }}
            key={project.id}
            id={project.id}
            name={project.name}
            url={project.url}
            imgurl={`/assets/projThumbs/${project.id}.png`}
            stack={project.stack}
            desc={getProjectDescription(project)}
          />
        ))}
    </div>

    </div>
  )
}
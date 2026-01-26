import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    repoLink: string;
    liveLink: string | null;

  };
  // Existing props definition
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project
}) => {
  return (
    <div className='glass-card group z-10 mt-10 md:mt-2'>
      <div className='aspect-4/3 md:aspect-16/9 relative overflow-hidden rounded-lg shadow-lg shadow-indigo-200/20 cursor-pointer group'>
        <img
          src={project.image}
          alt='project_images'
          className='absolute inset-0 object-cover md:object-bottom w-full h-full rounded-2xl z-0'
        />
        <div className='absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-neutral-900/90 to-transparent'></div>
        <div className='absolute bottom-3 left-0 lg:px-6 md:px-6 px-4 py-4 w-full'>
          <h2 className='text-white text-xl lg:text-2xl font-bold mb-4 glow-text text-shadow-lg/20'>
            {project.title}
          </h2>

          <div className='flex gap-3 mb-4'>
            <a
              href={project.repoLink}
              target='_blank'
              className='glass-card-subtle px-4 py-1 rounded-full text-sm font-semibold text-shadow-lg text-zinc-700 border-zinc-200/50 dark:text-white dark:border-zinc-100/50 transition-all duration-300 flex items-center gap-2'
              rel='noreferrer'
            >
              <FaGithub /> Code
            </a>
            {project.liveLink && (
              <a
                href={project.liveLink} 
                target='_blank'
                className='glass-card-subtle px-4 py-1 rounded-full text-sm font-semibold text-shadow-lg text-zinc-700 border-zinc-200/50 dark:text-white dark:border-zinc-100/50 transition-all duration-300 flex items-center gap-2'
                rel='noreferrer'
              >
                <FaGlobe /> Live
              </a>
            )}
          </div>

          <p className='text-slate-300 text-sm leading-relaxed mb-4'>
            {project.description}
          </p>
        </div>
      </div>
      <div className='flex flex-wrap gap-2 border-t border-sky-500/20 px-4 py-4'>
        {project.technologies.map((tag, index) => (
          <span
            key={index}
            className='inline-block bg-sky-500/10 text-sky-600 dark:text-sky-300 text-xs px-3 py-1 rounded-full border border-sky-500/30 hover:border-sky-400 transition-all duration-300 backdrop-blur-sm'
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;


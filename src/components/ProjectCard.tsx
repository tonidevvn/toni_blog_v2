import React from "react";

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
    <div className='project'>
      <div style={{ animationDelay: '0ms' }}>
        <div className='relative overflow-hidden rounded-lg md:rounded-lg lg:rounded-lg shadow-lg shadow-indigo-200/20 cursor-pointer group'>
          <img
            src={project.image}
            alt='project_images'
            className='object-cover w-full h-[450px] group-hover:scale-110 transition-all duration-500'
          />
          <div className='absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-neutral-900'></div>
          <div className='absolute bottom-3 left-0 lg:px-6 md:px-6 px-4 py-4 w-full'>
            <h2 className='text-slate-100 text-shadow-2xs mb-5 text-2xl lg:text-3xl md:text-3xl font-semibold tracking-tight hover:no-underline'>
              {project.title}
            </h2>
            <div className='my-2 flex'>
              <div className='mr-3'>
                <a
                  href={project.repoLink}
                  target='_blank'
                  className='bg-white rounded-3xl lg:text-base md:text-base transition-all duration-300 px-3 font-semibold flex items-center space-x-1'
                  rel='noreferrer'
                >
                  <span className='text-gray-500 hover:text-indigo-400 font-mono'>
                    Code
                  </span>
                </a>
              </div>
              <div className='mr-3'>
                <a
                  href={project.liveLink || undefined}
                  target='_blank'
                  className='bg-white rounded-3xl lg:text-base md:text-base transition-all duration-300 px-3 font-semibold flex items-center space-x-1'
                  rel='noreferrer'
                >
                  <span className='text-gray-500 hover:text-indigo-400 font-mono'>
                    Live
                  </span>
                </a>
              </div>
            </div>
            <p className='mb-5 text-[13px] text-slate-100 leading-normal'>
              {project.description}
            </p>
            <div className=''>
              <div className='flex flex-wrap lg:gap-1 md:gap-3 gap-2 border-t-[0.2px] border-neutral-50/60 pt-3'>
                {project.technologies.map((tag, index) => (
                  <span
                    key={index}
                    className='inline-block bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded-full border border-neutral-700'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

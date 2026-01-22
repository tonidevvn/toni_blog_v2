import { FaCogs, FaDocker, FaReact, FaWindows } from 'react-icons/fa';

import Chip from '../components/Chip';

const labelsSW = [
  'C',
  'C++',
  'C#',
  'Java',
  'Python',
  'Visual Studio',
  'WindowForm',
  'WPF',
  'VB.NET',
];

const labelsWeb = [
  'React',
  'Nextjs',
  'JavaScript',
  'TypeScript',
  'Express',
  'Nestjs',
  'Nodejs',
  'Django',
  'Java',
  'Spring Boot',
  'Python',
  'SQL',
  'MongoDB',
  'CSS3',
  'SASS',
];

const labelsTest = ['JUnit', 'Python', 'PyTest', 'Selenium', 'Postman'];

const labelsDevOp = ['Git', 'GitHub Actions', 'Docker', 'AWS', 'Linux'];

const TechStackTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className='flex-chips flex flex-wrap mt-4 gap-2 items-center'>
      <span className='text-slate-900 dark:text-slate-300'>
        Tech stack:
      </span>
      {tags.map((tag, index) => (
        <Chip key={index} label={tag} />
      ))}
    </div>
  );
};

function Expertise() {
  return (
    <section id='expertise' className='container mx-auto lg:px-6 md:px-6'>
      <div className='flex flex-col px-[10%] py-[5%] text-left max-md:block max-md:px-[5%]'>
        <header className='flex flex-col items-center text-center'>
          <h2 className="font-bold text-5xl mb-12 text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-9 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-indigo-600 after:content-['']">
            Expertise
          </h2>
        </header>
        <div className='grid grid-cols-2 gap-[50px] gap-y-4 max-md:block'>
          <div className='items-center text-left max-md:pb-[10%]'>
            <div className='flex align-middle items-center mb-4 cursor-pointer'>
              <FaReact size={32} className='fill-slate-800 dark:fill-white' />
              <h3 className='ml-2 font-bold text-slate-800 dark:text-white'>
                Full Stack Web Development
              </h3>
            </div>
            <p>
              Proficient in frontend and backend development React, NextJs,
              Django, Express, NestJs (Node.js), Spring Boot, with expertise in
              data management, including database design, integration, and
              accuracy for scalable, efficient applications.
            </p>
            <TechStackTags tags={labelsWeb} />
          </div>

          <div className='items-center text-left max-md:pb-[10%]'>
            <div className='flex align-middle items-center mb-4 cursor-pointer'>
              <FaWindows size={32} className='fill-slate-800 dark:fill-white' />
              <h3 className='ml-2 font-bold text-slate-800 dark:text-white'>
                Software Engineer
              </h3>
            </div>
            <p>
              With expertise in C++, C#, Java, and Python, I have worked
              extensively on automotive-grade frameworks, adhering to industry
              standards like AUTOSAR and ISO 26262. Proficient in the Software
              Development Life Cycle (SDLC).
            </p>
            <TechStackTags tags={labelsSW} />
          </div>

          <div className='items-center text-left max-md:pb-[10%]'>
            <div className='flex align-middle items-center mb-4 cursor-pointer'>
              <FaCogs size={32} className='fill-slate-800 dark:fill-white' />
              <h3 className='ml-2 font-bold text-slate-800 dark:text-white'>Automation & Testing</h3>
            </div>
            <p>
              Automate and enhance testing processes automatically with
              Selenium. I have professional experience designing robust,
              enterprise-grade automation frameworks to ensure seamless web
              application functionality, reliability, and performance.
            </p>
            <TechStackTags tags={labelsTest} />
          </div>

          <div className='items-center text-left max-md:pb-[10%]'>
            <div className='flex align-middle items-center mb-4 cursor-pointer'>
              <FaDocker size={32} className='fill-slate-800 dark:fill-white' />
              <h3 className='ml-2 font-bold text-slate-800 dark:text-white'>DevOps & Deployment</h3>
            </div>
            <p>
              Once the application is built, I help clients set up DevOps
              testing, CI/CD pipelines, and deployment automation to support the
              successful Go-Live.
            </p>
            <TechStackTags tags={labelsDevOp} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;

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

const labelsDataEng = ['Excel', 'Power BI', 'Python', 'SQL', 'MongoDB'];

const labelsTestDeploy = ['Selenium', 'Postman', 'JUnit', 'PyTest', 'Git', 'GitHub Actions', 'Docker', 'AWS', 'Linux'];

const TechStackTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className='flex-chips flex flex-wrap mt-4 gap-2 items-center'>
      <span className='text-slate-800 dark:text-slate-300'>
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
    <section id='expertise' className='relative py-24 lg:py-32 overflow-hidden'>
      {/* Background Accent - Subtle */}
      <div className='absolute top-1/3 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl' />

      <div className='container relative z-10 mx-auto px-6 lg:px-12'>
        <div className='max-w-7xl mx-auto'>
          <header className='flex flex-col items-center text-center mb-16'>
            <h2 className='font-bold text-5xl lg:text-6xl mb-6 gradient-text-accent uppercase'>
              Expertise
            </h2>
            <div className='h-1 w-24 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full glow-accent' />
          </header>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Full Stack Web Development */}
            <div className='glass-card p-8 hover-lift'>
              <div className='flex items-center mb-6'>
                <div className='p-3 bg-sky-500/20 rounded-lg glow-accent'>
                  <FaReact size={32} className='text-sky-400' />
                </div>
                <h3 className='ml-4 font-bold text-2xl text-slate-900 dark:text-white'>
                  Full Stack Web Development
                </h3>
              </div>
              <p className='text-slate-700 dark:text-slate-300 leading-relaxed mb-6'>
                Proficient in frontend and backend development using React, NextJs,
                Django, Express, NestJs (Node.js), Spring Boot, with expertise in
                data management, including database design, integration, and
                accuracy for scalable, efficient applications.
              </p>
              <TechStackTags tags={labelsWeb} />
            </div>

            {/* Software Engineer */}
            <div className='glass-card p-8 hover-lift'>
              <div className='flex items-center mb-6'>
                <div className='p-3 bg-sky-500/20 rounded-lg glow-accent'>
                  <FaWindows size={32} className='text-sky-400' />
                </div>
                <h3 className='ml-4 font-bold text-2xl text-slate-900 dark:text-white'>
                  Software Engineer
                </h3>
              </div>
              <p className='text-slate-700 dark:text-slate-300 leading-relaxed mb-6'>
                With expertise in C++, C#, Java, and Python, I have worked
                extensively on automotive-grade frameworks, ensuring compliance with industry
                standards like AUTOSAR and ISO 26262. Proficient in the Software
                Development Life Cycle (SDLC).
              </p>
              <TechStackTags tags={labelsSW} />
            </div>

            {/* Automation Testing & Deployment */}
            <div className='glass-card p-8 hover-lift'>
              <div className='flex items-center mb-6'>
                <div className='p-3 bg-sky-500/20 rounded-lg glow-accent'>
                  <FaDocker size={32} className='text-sky-400' />
                </div>
                <h3 className='ml-4 font-bold text-2xl text-slate-900 dark:text-white'>
                  Automation Testing & Deployment
                </h3>
              </div>
              <p className='text-slate-700 dark:text-slate-300 leading-relaxed mb-6'>
                Delivering production-ready reliability through custom automated workflows that streamline the CI/CD process for repeatable deployments from development to Go-Live.</p>
              <TechStackTags tags={labelsTestDeploy} />
            </div>

            {/* Data Analysis & Reporting */}
            <div className='glass-card p-8 hover-lift'>
              <div className='flex items-center mb-6'>
                <div className='p-3 bg-sky-500/20 rounded-lg glow-accent'>
                  <FaCogs size={32} className='text-sky-400' />
                </div>
                <h3 className='ml-4 font-bold text-2xl text-slate-900 dark:text-white'>
                  Data Analysis & Reporting
                </h3>
              </div>
              <p className='text-slate-700 dark:text-slate-300 leading-relaxed mb-6'>
                Transforming complex datasets into actionable insights through MS Office and Power BI. Expert in building interactive dashboards, automated reporting, and data-driven visualizations to support strategic decision-making.
              </p>
              <TechStackTags tags={labelsDataEng} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;

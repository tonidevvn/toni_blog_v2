const mock01 = '/images/mock01.png';
const mock02 = '/images/mock02.png';
const mock03 = '/images/mock03.png';
const mock04 = '/images/mock04.png';
const mock05 = '/images/mock05.png';
const mock06 = '/images/mock06.png';

import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Ecommerce Web App',
    description:
      'A React E-commerce web app with an Ant Design interface, designed for development and prototype testing using readily available fake JSON data',
    image: mock04,
    technologies: ['React', 'HTML', 'SASS', 'Antd'],
    repoLink: 'https://github.com/tonidevvn/ecom-explorer-antd',
    liveLink: 'https://ecommerce-antd.vercel.app/',
  },
  {
    id: 2,
    title: 'Favorite Movies Collection',
    description:
      'This favorite movies collection web app leverages React, TypeScript, and Vite, utilizing a streamlined template for rapid development with HMR and ESLint.',
    image: mock02,
    technologies: ['React', 'TypeScript', 'HTML', 'CSS'],
    repoLink: 'https://github.com/tonidevvn/toni-movies-collection',
    liveLink: 'https://toni-movies-collection.vercel.app/',
  },
  {
    id: 3,
    title: 'Food Price Tracker',
    description:
      'Track food prices in real-time across multiple online retailers. Features include advanced search and insightful data analytics.',
    image: mock03,
    technologies: [
      'NextJs',
      'Spring Boot',
      'Web Crawling',
      'CSS',
      'Selenium',
      'MySQL',
    ],
    repoLink: 'https://github.com/tonidevvn/food-price-tracker',
    liveLink: null,
  },
  {
    id: 4,
    title: 'FileNest',
    description:
      'FileNest is a scalable and reliable distributed file storage system using MinIO to efficiently manage large, redundant files with optimized retrieval.',
    image: mock05,
    technologies: [
      'Python',
      'Django',
      'REST API',
      'Tailwind',
      'Amazon S3',
      'MinIO',
    ],
    repoLink: 'https://github.com/tonidevvn/file-nest',
    liveLink: null,
  },
  {
    id: 5,
    title: 'BusRadar - Real-time Bus Tracking',
    description:
      'A real-time bus tracking system powered by Spring Boot and React, offering precise arrival predictions and delay forecasts through GPS integration and advanced analytics.',
    image: mock01,
    technologies: [
      'React',
      'Java',
      'Spring Boot',
      'CSS',
      'MongoDB',
      'Docker',
      'Web Crawling',
      'Redis',
    ],
    repoLink: 'https://github.com/tonidevvn/bus-radar/',
    liveLink: null,
  },
  {
    id: 6,
    title: 'UWindsor Tours',
    description:
      'UWindsor Tours is an interactive 3D WebGL experience where players explore a virtual University of Windsor campus in a fun and engaging way.',
    image: mock06,
    technologies: ['Unity', 'C#', 'Game Development', 'Video Game'],
    repoLink: 'https://github.com/tonidevvn/UWindsor-virtual-tours',
    liveLink: 'https://uwindsor-tours-landing-page-b37u.vercel.app/',
  },
];

function Project() {
  return (
    <section className='flex flex-col px-[10%] py-[5%] text-left max-md:block max-md:px-[5%]' id='projects'>
      <header className='flex flex-col items-center text-center mb-12'>
        <h2 className="font-bold text-5xl lg:text-6xl mb-6 gradient-text-accent uppercase">
          Technical Projects
        </h2>
        <div className='h-1 w-24 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full glow-accent' />
      </header>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-md:block'>
        {projects
          .slice()
          .reverse()
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </section>
  );
}

export default Project;

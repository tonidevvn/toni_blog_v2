// Import Canvas from the appropriate library or define it
import { useState } from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber"; // Example import, adjust as needed
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Developer from "../components/Developer";
import CanvasLoader from "../components/Loader";
import useWindowSize from "../hooks/useWindowSize";

const techBadges = [
  {
    category: 'Languages', badges: [
      { name: 'JavaScript', url: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' },
      { name: 'TypeScript', url: 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' },
      { name: 'Python', url: 'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54' },
      { name: 'Java', url: 'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white' },
      { name: 'C', url: 'https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white' },
      { name: 'C++', url: 'https://img.shields.io/badge/C++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white' },
      { name: 'C#', url: 'https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white' },
    ]
  },
  {
    category: 'Frontend', badges: [
      { name: 'React', url: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' },
      { name: 'Next.js', url: 'https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white&style=for-the-badge' },
      { name: 'Tailwind CSS', url: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' },
      { name: 'Redux', url: 'https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white' },
    ]
  },
  {
    category: 'Backend', badges: [
      { name: 'Node.js', url: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white' },
      { name: 'Express.js', url: 'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB' },
      { name: 'NestJS', url: 'https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white' },
      { name: 'Fastify', url: 'https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white' },
      { name: 'AWS', url: 'https://custom-icon-badges.demolab.com/badge/AWS-%23FF9900.svg?logo=aws&logoColor=white' },
      { name: 'Supabase', url: 'https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white' },
    ]
  },
  {
    category: 'Frameworks', badges: [
      { name: 'Django', url: 'https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white' },
      { name: 'FastAPI', url: 'https://img.shields.io/badge/FastAPI-009485.svg?style=for-the-badge&logo=fastapi&logoColor=white' },
      { name: 'Spring Boot', url: 'https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white' },
    ]
  },
  {
    category: 'Databases', badges: [
      { name: 'MySQL', url: 'https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white' },
      { name: 'PostgreSQL', url: 'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white' },
      { name: 'MongoDB', url: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white' },
    ]
  },
  {
    category: 'Misc', badges: [
      { name: 'Docker', url: 'https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white' },
      { name: 'Git', url: 'https://img.shields.io/badge/git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white' },
      { name: 'GitHub', url: 'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white' },
      { name: 'Figma', url: 'https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white' },
      { name: 'Cloudflare', url: 'https://img.shields.io/badge/cloudflare-%23F38020.svg?style=for-the-badge&logo=cloudflare&logoColor=white' },
    ]
  },
];

function About() {
  const [animationName, setAnimationName] = useState("idle");

  const { width } = useWindowSize();
  const isMobile = width ? width < 768 : false;

  const aboutSections = [
    {
      body: (
        <p className='text-slate-700 dark:text-gray-300 leading-relaxed mb-3 font-normal'>
          Hello! I'm Toni Pham, a seasoned Software Engineer with over a decade
          of experience in building full-stack applications using JavaScript,
          React, NextJs, Express, NestJs (NodeJs), Django and Spring Boot. My
          expertise lies in designing, developing, and testing web-based
          applications, with a strong focus on data-driven solutions and
          creative problem-solving.
        </p>
      ),
      animationName: 'victory',
    },
    {
      body: (
        <p className='text-slate-700 dark:text-gray-300 leading-relaxed mb-3 font-normal'>
          I love the entire process of developing creative software solutions,
          as it allows me to create something both beautiful and functional. I'm
          dedicated to continuously improving my skills to enhance my creativity
          and build visually appealing products.
        </p>
      ),
      animationName: 'salute',
    },
    {
      body: (
        <>
          <p className='text-slate-700 dark:text-gray-300 leading-relaxed mb-3 font-normal'>
            Here are a few technologies I've been working with recently:
          </p>
          <div className='flex flex-col gap-4 mt-6'>
            {techBadges.map((category) => (
              <div key={category.category} className='flex flex-col gap-2'>
                <h4 className='text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider'>
                  {category.category}
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {category.badges.map((badge) => (
                    <div key={badge.name} className="relative h-7 w-auto transition-transform hover:scale-105">
                      <Image
                        src={badge.url}
                        alt={badge.name}
                        height={28}
                        width={0}
                        style={{ width: 'auto', height: '100%' }}
                        className="rounded-sm"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ),

      animationName: 'clapping',
    },
  ];

  return (
    <section
      id='about'
      className='relative py-24 lg:py-32 overflow-hidden'
    >
      {/* Background Accent - Subtle */}
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl' />

      <div className='container relative z-10 mx-auto px-6 lg:px-12'>
        <div className='max-w-7xl mx-auto'>
          <header className='flex flex-col items-center text-center mb-16'>
            <h2 className='font-bold text-5xl lg:text-6xl mb-6 gradient-text-accent uppercase'>
              About Me
            </h2>
            <div className='h-1 w-24 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full glow-accent' />
          </header>
          <div>
            <div className='flex flex-col lg:flex-row items-stretch gap-8'>
              <div className='w-full lg:w-8/12'>
                <ul className='space-y-6'>
                  {aboutSections.map((section, index) => (
                    <li
                      key={index}
                      onClick={() => setAnimationName(section.animationName)}
                      onPointerOver={() =>
                        setAnimationName(section.animationName)
                      }
                      onPointerOut={() => setAnimationName('idle')}
                      className='glass-card p-6 cursor-pointer hover:border-sky-400 transition-all duration-200'
                    >
                      {section.body}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='w-full h-[400px] lg:h-auto lg:w-4/12 flex items-center justify-center'>
                <Canvas>
                  <ambientLight intensity={7} />
                  <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                  />
                  <directionalLight position={[10, 10, 10]} intensity={1} />
                  <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                  />
                  <Suspense fallback={<CanvasLoader />}>
                    <Developer
                      position-y={isMobile ? -3.5 : -3}
                      scale={3}
                      animationName={animationName}
                    />
                  </Suspense>
                </Canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

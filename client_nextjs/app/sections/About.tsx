// Import Canvas from the appropriate library or define it
import { useState } from "react";
import { Canvas } from "@react-three/fiber"; // Example import, adjust as needed
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Developer from "../components/Developer";
import CanvasLoader from "../components/Loader";

function About() {
  const [animationName, setAnimationName] = useState("idle");

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
      animationName: 'clapping',
    },
    {
      body: (
        <>
          <p className='text-slate-700 dark:text-gray-300 leading-relaxed mb-3 font-normal'>
            Here are a few technologies I've been working with recently:
          </p>
          <ul className='flex flex-wrap text-slate-700 dark:text-gray-300 px-2'>
            <li className='w-full md:w-1/2 mb-2.5 cursor-pointer'>
              <span className="before:content-['▸'] before:mr-3 before:text-sky-400"></span>
              <span className='italic'>Frontend: React, NextJs</span>
            </li>
            <li className='w-full md:w-1/2 mb-2.5 cursor-pointer'>
              <span className="before:content-['▸'] before:mr-3 before:text-sky-400"></span>
              <span className='italic'>Backend: Express, NestJs, Fastify (Node.js)</span>
            </li>
            <li className='w-full md:w-1/2 mb-2.5 cursor-pointer'>
              <span className="before:content-['▸'] before:mr-3 before:text-sky-400"></span>
              <span className='italic'>Languages: JS/TypeScript, Python, Java</span>
            </li>
            <li className='w-full md:w-1/2 mb-2.5 cursor-pointer'>
              <span className="before:content-['▸'] before:mr-3 before:text-sky-400"></span>
              <span className='italic'>Databases: MySQL, PostgreSQL and MongoDB</span>
            </li>
            <li className='w-full md:w-1/2 mb-2.5 cursor-pointer'>
              <span className="before:content-['▸'] before:mr-3 before:text-sky-400"></span>
              <span className='italic'>Frameworks: Django, FastAPI, Spring Boot</span>
            </li>
            <li className='w-full md:w-1/2 mb-2.5 cursor-pointer'>
              <span className="before:content-['▸'] before:mr-3 before:text-sky-400"></span>
              <span className='italic'>Cloud: AWS (S3, EC2 ...)</span>
            </li>
          </ul>
        </>
      ),
      animationName: 'salute',
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

              <div className='w-full h-auto lg:w-4/12 flex items-center justify-center'>
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
                      position-y={-3}
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

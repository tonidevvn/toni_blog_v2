// Import Canvas from the appropriate library or define it
import { useState } from "react";
import { Canvas } from "@react-three/fiber"; // Example import, adjust as needed
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Developer from "../components/Developer";
import CanvasLoader from "../components/Loader";
import "../assets/styles/About.scss";

function About() {
  const [animationName, setAnimationName] = useState("idle");

  const aboutSections = [
    {
      body: (
        <p className='text-slate-600 dark:text-gray-400 leading-relaxed mb-3 font-normal'>
          Hello! I'm Toni Pham, a seasoned Software Engineer with over a decade
          of experience in building full-stack applications using JavaScript,
          React, NextJs, Express (NodeJs), Django and Java Spring Boot. My
          expertise lies in designing, developing, and testing web-based
          applications, with a strong focus on data-driven solutions and
          creative problem-solving.
        </p>
      ),
      animationName: 'victory',
    },
    {
      body: (
        <p className='text-slate-600 dark:text-gray-400 leading-relaxed mb-3 font-normal'>
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
          <p className='text-slate-600 dark:text-gray-400 leading-relaxed mb-3 font-normal'>
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className='flex flex-wrap text-slate-600 dark:text-gray-400 px-2'>
            <li className='w-full md:w-1/2 mb-2.5 cursor-pointer'>
              <span className="before:content-['▸'] before:mr-3 before:text-indigo-600"></span>
              <span className='italic'>React and NextJs</span>
            </li>
            <li className='w-full md:w-1/2 mb-2.5 cursor-pointer'>
              <span className="before:content-['▸'] before:mr-3 before:text-indigo-600"></span>
              <span className='italic'>JavaScript and TypeScript</span>
            </li>
            <li className='w-full md:w-1/2 mb-2.5 cursor-pointer'>
              <span className="before:content-['▸'] before:mr-3 before:text-indigo-600"></span>
              <span className='italic'>Express, NestJs (Node.js)</span>
            </li>
            <li className='w-full md:w-1/2 mb-2.5 cursor-pointer'>
              <span className="before:content-['▸'] before:mr-3 before:text-indigo-600"></span>
              <span className='italic'>MySQL, PostgreSQL and MongoDB</span>
            </li>
            <li className='w-full md:w-1/2 mb-2.5 cursor-pointer'>
              <span className="before:content-['▸'] before:mr-3 before:text-indigo-600"></span>
              <span className='italic'>Python Django</span>
            </li>
            <li className='w-full md:w-1/2 mb-2.5 cursor-pointer'>
              <span className="before:content-['▸'] before:mr-3 before:text-indigo-600"></span>
              <span className='italic'>AWS (S3, EC2 ...)</span>
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
      className='mt-40 flex justify-between items-center mx-auto px-6 w-full text-slate-900 dark:text-white'
    >
      <div className='container mx-auto lg:px-6 md:px-6'>
        <div className='about-container'>
          <header className='flex flex-col items-center text-center'>
            <h2 className="font-bold text-5xl mb-12 text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-9 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-indigo-600 after:content-['']">
              About Me
            </h2>
          </header>
          <div>
            <div className='flex flex-wrap items-stretch'>
              <div className='w-full h-full lg:w-8/12 lg:px-10'>
                <ul className='space-y-8'>
                  {aboutSections.map((section, index) => (
                    <li
                      key={index}
                      onClick={() => setAnimationName(section.animationName)}
                      onPointerOver={() =>
                        setAnimationName(section.animationName)
                      }
                      onPointerOut={() => setAnimationName('idle')}
                      className='p-2 cursor-pointer transition-all duration-300 hover:bg-amber-50 dark:hover:bg-neutral-900 rounded-lg'
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

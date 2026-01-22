import { scrollToSection } from '../utils';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiExpand } from "react-icons/bi";
import Avatar from '../components/Avatar';

import bgImage from '../assets/images/bg.png';

function Hero() {
  return (
    <section id='hero' className='container mx-auto lg:px-6 md:px-6 px-4 py-6'>
      <div
        className='flex gap-[30px] justify-start items-center w-full px-[15%] min-h-[700px] bg-no-repeat bg-cover bg-center max-md:pt-[150px] max-md:block max-md:px-0'
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <Avatar animate={true} class='z-[2] max-md:pl-[5%] w-[55%] h-auto md:max-w-[25%]' />
        <div className='flex flex-col text-left z-[2] max-md:w-[90%] max-md:px-[5%] max-md:pb-[5%] text-slate-800 dark:text-white'>
          <div className='flex flex-row gap-[10px] text-white my-4 text-[1.8em]'>
            <a
              href='https://github.com/tonidevvn'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub className="fill-slate-700 hover:fill-indigo-600 dark:fill-white" />
            </a>
            <a
              href='https://www.linkedin.com/in/tonipham/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin className="fill-slate-700 hover:fill-indigo-600 dark:fill-white" />
            </a>
          </div>
          <h1 className='text-[5em] m-0 max-md:text-[4em] max-md:text-left'>Hi There 👋</h1>
          <h1 className='flex text-[5em] m-0 max-md:text-[4em] max-md:text-left'>I'm Thang Pham (Toni)</h1>
          <p className='text-[1.5em] m-0 max-md:text-left'>Software Engineer | Full Stack Developer</p>

          <div className='hidden max-md:flex max-md:flex-row max-md:gap-[10px] max-md:text-white max-md:pt-[10px] text-[1.8em]'>
            <a
              href='https://github.com/tonidevvn'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/tonipham/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin />
            </a>
          </div>
          <div className='button-animate' style={{ animationDelay: '800ms' }}>
            <div className=''>
              <div className='w-full flex justify-center md:justify-center lg:justify-start'>
                <button
                  onClick={() => scrollToSection('about')}
                  className='cursor-pointer text-slate-600 hover:text-slate-200 dark:text-slate-200 transition-all duration-300 px-5 py-4 border-2 border-indigo-600 hover:bg-indigo-600 font-bold mt-12 flex items-center space-x-3 rounded'
                >
                  <BiExpand />
                  <span>DISCOVER MORE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </section>
  );
}

export default Hero;

import { scrollToSection } from '../utils';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiExpand } from "react-icons/bi";
import Avatar from '../components/Avatar';

const bgImage = '/images/bg.png';

function Hero() {
  return (
    <section id='hero' className='container mx-auto lg:px-6 md:px-6 px-4 py-6'>
      <div
        className='flex gap-[30px] justify-start items-center w-full px-[15%] min-h-[700px] bg-no-repeat bg-cover bg-bottom-left md:bg-right max-md:pt-[150px] max-md:block max-md:px-0'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='w-[90%] flex flex-row md:flex-col items-center justify-center max-md:pl-[5%] w-[55%] h-auto md:max-w-[25%] gap-8'>
          <Avatar animate={true} class='z-[2] max-w-[200px]' />
          <div className='flex flex-row gap-4 text-white my-4 text-[1.8em]'>
            <a
              href='https://github.com/tonidevvn'
              target='_blank'
              rel='noreferrer'
              className='glass-card p-3 rounded-lg hover:scale-105 transition-transform duration-200'
            >
              <FaGithub className="fill-slate-700 hover:fill-sky-600 dark:fill-white dark:hover:fill-sky-400" />
            </a>
            <a
              href='https://www.linkedin.com/in/tonipham/'
              target='_blank'
              rel='noreferrer'
              className='glass-card p-3 rounded-lg hover:scale-105 transition-transform duration-200'
            >
              <FaLinkedin className="fill-slate-700 hover:fill-sky-600 dark:fill-white dark:hover:fill-sky-400" />
            </a>
          </div>
        </div>
        
        <div className='w-[90%] flex flex-col text-left z-[2] max-md:px-[5%] max-md:pb-[5%] text-slate-800 dark:text-white mt-8 mx-6 md:mt-0'>
          <h1 className='text-[2em] m-0 md:text-[3em] max-md:text-left text-slate-900 dark:text-white flex items-center gap-3'>
            Hi There <span className='inline-block animate-wave'>👋</span>
          </h1>
          <h1 className='flex text-[2em] m-0 md:text-[3em] max-md:text-left text-slate-900 dark:text-white'>I'm Thang Pham (Toni)</h1>
          <p className='text-sm sm:text-base md:text-lg m-0 max-md:text-left text-slate-700 dark:text-slate-200'>Software Engineer | Full Stack Developer</p>

          <div className='button-animate' style={{ animationDelay: '800ms' }}>
            <div className=''>
              <div className='w-full flex justify-center md:justify-center lg:justify-start'>
                <button
                  onClick={() => scrollToSection('about')}
                  className='btn-glass transition-all duration-300 px-5 py-4 font-bold mt-12 flex items-center space-x-3 rounded'
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

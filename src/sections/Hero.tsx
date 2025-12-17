import { scrollToSection } from '../utils';
import "../assets/styles/Hero.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiExpand } from "react-icons/bi";
import Avatar from '../components/Avatar';

function Hero() {
  return (
    <section id='hero' className='container mx-auto lg:px-6 md:px-6 px-4 py-6'>
      <div className='about-section'>
        <Avatar animate={true} class='hero-avatar' />
        <div className='content text-slate-800 dark:text-white'>
          <div className='social_icons flex gap-10 my-4'>
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
          <h1>Hi There 👋</h1>
          <h1 className='flex'>I'm Thang Pham (Toni)</h1>
          <p>Software Engineer | Full Stack Developer</p>

          <div className='mobile_social_icons'>
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

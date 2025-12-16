import { useState } from "react";
import "../assets/styles/Main.scss";
import Avatar from "../assets/images/toni-photo.jpg";
import { scrollToSection } from "../utils";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiExpand } from "react-icons/bi";

function Hero() {
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setScrollTopVisible(true);
    } else if (scrolled <= 300) {
      setScrollTopVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <section id='hero' className='container mx-auto lg:px-6 md:px-6 px-4'>
      <div className='about-section'>
        <div className='image-wrapper animate-float '>
          <img src={Avatar} alt='Avatar' />
        </div>
        <div className='content'>
          <div className='social_icons'>
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
      <div className='fixed bottom-5 right-5 z-10'>
        <button
          aria-label='scroll to top'
          type='button'
          onClick={() => scrollToSection('hero')}
          className={`${
            scrollTopVisible ? 'opacity-100' : 'opacity-0'
          } border-2 border-indigo-600 bg-indigo-600 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-all hover:bg-transparent hover:text-indigo-600 dark:hover:text-white duration-300 cursor-pointer`}
        >
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 24 24'
            className='h-6 w-6'
            aria-hidden='true'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M6 18h12v2H6zm6-14.414-6.707 6.707 1.414 1.414L11 7.414V16h2V7.414l4.293 4.293 1.414-1.414z'></path>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Hero;

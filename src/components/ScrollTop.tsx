import { useState } from 'react';
import { scrollToSection } from '../utils';

const ScrollTop = () => {
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setScrollTopVisible(true);
    } else if (scrolled <= 300) {
      setScrollTopVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisible);

  return (
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
  );
};

export default ScrollTop;
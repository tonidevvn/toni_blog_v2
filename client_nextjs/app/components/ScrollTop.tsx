import { useState, useEffect } from 'react';
import { scrollToSection } from '../utils';
import { FaChevronUp } from 'react-icons/fa';

const ScrollTop = () => {
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setScrollTopVisible(true);
      } else if (scrolled <= 300) {
        setScrollTopVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <div className='fixed bottom-2 right-2 md:right-8 md:bottom-8 z-10'>
      <button
        aria-label='scroll to top'
        type='button'
        onClick={() => scrollToSection('hero')}
        className={`${
          scrollTopVisible ? 'opacity-100' : 'opacity-0'
          } btn-glass flex items-center justify-center size-10 md:size-12 rounded-xl p-2 shadow-sm transition-all duration-300 cursor-pointer`}
      >
        <FaChevronUp className="size-5 md:size-6" />
      </button>
    </div>
  );
};

export default ScrollTop;
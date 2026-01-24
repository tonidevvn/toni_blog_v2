import { useEffect, useState } from 'react';
import { scrollToSection } from '../utils';
import { MdClose, MdMenu } from 'react-icons/md';
import DarkModeSwitcher from './DarkModeSwitcher';
import useWindowSize from '../hooks/useWindowSize';
import { TbLayoutSidebarRightExpandFilled } from 'react-icons/tb';
import { FaTerminal } from 'react-icons/fa';

const navItems = [
  ['About', 'about'],
  ['Expertise', 'expertise'],
  ['History', 'history'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
] as const;

type NavigationProps = {
  mode: 'light' | 'dark';
  modeChange: () => void;
};

export default function Navigation({ mode, modeChange }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDrawer = () => setMobileOpen((v) => !v);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width && width >= 768) {
      setMobileOpen(false);
    }
  }, [width]);

  const iconBtn =
    'md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md ' +
    'text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ' +
    'dark:text-slate-200 dark:hover:bg-slate-800 transition';

  return (
    <div className='flex flex-col'>
      {/* Floating Glassmorphism Navbar */}
      <div
        id='navigation'
        className={[
          'fixed top-4 left-4 right-4 z-50 transition-all duration-300',
          'glass-card backdrop-blur-xs',
          'rounded-2xl',
          scrolled ? 'shadow-lg' : 'shadow-md',
          mobileOpen ? 'hidden' : '',
        ].join(' ')}
      >
        <div className='flex items-center px-4 py-3 md:py-4 md:px-8'>

          {/* Left: Mobile menu button */}
          <button
            type='button'
            className={iconBtn}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={toggleDrawer}
          >
            {mobileOpen ? <MdClose /> : <MdMenu />}
          </button>

          {/* Center (optional brand placeholder) */}
          <div className='ml-2 font-semibold text-slate-800 dark:text-slate-100 md:hidden'>
            Menu
          </div>

          {/* Desktop nav */}
          <div className={`hidden md:flex md:justify-center md:items-center space-x-4 ml-auto ${mobileOpen ? 'invisible' : ''}`}>
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className='cursor-pointer group text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 px-3 py-2 rounded transition-colors duration-200 font-medium'
              >
                {label}

                <div
                  className={`h-0.5 mt-0.5 transition-all duration-300 mx-auto group-hover:w-3/4 group-hover:bg-sky-600 dark:group-hover:bg-sky-400 w-0 bg-transparent rounded-full`}
                />
              </button>
            ))}
          </div>

          {/* Right: Theme toggle */}
          <DarkModeSwitcher
            mode={mode}
            onToggle={modeChange}
            className={`ml-auto ${mobileOpen ? 'md:invisible' : ''}`}
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className='fixed inset-0 z-40 bg-black/40 md:hidden'
          onClick={toggleDrawer}
        >
          <div
            className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-md w-[80%] h-full shadow-2xl flex flex-col border-r border-slate-200 dark:border-slate-700'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex items-center justify-between px-4 py-3 border-b border-white/60 dark:border-slate-700/50'>
              <span className='text-slate-900 dark:text-white font-semibold text-lg'>
                Menu
              </span>

              {/* Close button (same sizing as burger) */}
              <button
                type='button'
                className={iconBtn.replace('md:hidden ', '')} // drawer is already md:hidden
                aria-label='Close menu'
                onClick={toggleDrawer}
              >
                <TbLayoutSidebarRightExpandFilled size={24} />
              </button>
            </div>

            <nav className='flex-1 flex flex-col py-2'>
              {navItems.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                    setMobileOpen(false);
                  }}
                  className='cursor-pointer w-full text-left px-4 py-3 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 font-medium text-base flex items-center gap-3'
                >
                  <FaTerminal /> {label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

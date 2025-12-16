import { useEffect, useState } from 'react';
import { scrollToSection } from '../utils';
import { MdClose, MdMenu } from 'react-icons/md';
import DarkModeSwitcher from './DarkModeSwitcher';

const navItems = [
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

  const iconBtn =
    'md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md ' +
    'text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ' +
    'dark:text-slate-200 dark:hover:bg-slate-800 transition';

  return (
    <div className='flex flex-col'>
      {/* Sticky Navbar */}
      <div
        id='navigation'
        className={[
          'fixed top-0 left-0 w-full z-50 transition-shadow',
          'bg-transparent backdrop-blur supports-[backdrop-filter]:bg-white/60',
          'dark:supports-[backdrop-filter]:bg-slate-950/40',
          scrolled ? 'shadow-md' : '',
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
          <div className='hidden md:flex space-x-4 ml-auto'>
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className='text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded transition'
              >
                {label}
              </button>
            ))}
          </div>

          {/* Right: Theme toggle */}
          <DarkModeSwitcher
            mode={mode}
            onToggle={modeChange}
            className='ml-auto'
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
            className='bg-white dark:bg-slate-950 w-72 h-full shadow-lg flex flex-col'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800'>
              <span className='text-slate-800 dark:text-slate-100 font-semibold'>
                Menu
              </span>

              {/* Close button (same sizing as burger) */}
              <button
                type='button'
                className={iconBtn.replace('md:hidden ', '')} // drawer is already md:hidden
                aria-label='Close menu'
                onClick={toggleDrawer}
              >
                <svg
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
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
                  className='w-full text-left px-6 py-3 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition'
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from 'react';
import FadeIn from './components/FadeIn';
import ScrollTop from './components/ScrollTop';
import {
  About,
  Education,
  Contact,
  Expertise,
  Footer,
  Hero,
  Navigation,
  Project,
  Timeline,
} from './sections';

type ThemeMode = 'light' | 'dark';
const THEME_KEY = 'theme';

function Page() {
  const [mode, setMode] = useState<ThemeMode>('dark');

  const handleModeChange = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    // Initial theme check
    const saved = localStorage.getItem(THEME_KEY) as ThemeMode | null;
    if (saved === 'light' || saved === 'dark') {
      setMode(saved);
    } else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      setMode('dark');
    }
  }, []);

  // apply class + persist
  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
    localStorage.setItem(THEME_KEY, mode);
  }, [mode]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='main-container'>
      <Navigation mode={mode} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Hero />
        <About />
        <Education />
        <Expertise />
        <Timeline />
        <Project />
        <Contact />
      </FadeIn>
      <ScrollTop />
      <Footer />
    </div>
  );
}

export default Page;

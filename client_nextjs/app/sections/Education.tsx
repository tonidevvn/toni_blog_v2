import React from 'react';

type EducationItem = {
  period: string;
  school: string;
  degree: string;
  gpa?: string;
};

const EDUCATION: EducationItem[] = [
  {
    period: 'May 2024 - Nov 2025',
    school: 'University of Windsor',
    degree: 'Master of Applied Computing',
    gpa: 'GPA: 8.7/10',
  },
  {
    period: 'Sep 2006 - Jan 2011',
    school: 'Ho Chi Minh University of Technology and Education',
    degree: 'Bachelor of Information Technology',
  },
];

export default function Education() {
  return (
    <section id='education' className='scroll-mt-24'>
      <div className='items-container'>
        <header className='flex flex-col items-center text-center mb-12'>
          <h2 className="font-bold text-5xl mb-6 gradient-text-accent uppercase">
            Education
          </h2>
          <div className='h-1 w-24 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full glow-accent' />
        </header>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-4 md:gap-x-10 md:gap-y-12 text-left mx-auto'>
          {EDUCATION.map((item) => (
            <React.Fragment key={`${item.school}-${item.period}`}>
              {/* Left column (date) */}
              <div className='text-slate-700 dark:text-zinc-400 text-sm tracking-wider mt-4 md:mt-1 font-medium'>
                {item.period}
              </div>

              {/* Right column (content) */}
              <div className='col-span-3 text-zinc-300 dark:text-zinc-200 space-y-4'>
                <div className='text-xl font-bold text-slate-500 dark:text-zinc-200 mb-1'>
                  {item.school}
                </div>
                <div className='text-slate-500 dark:text-zinc-200 font-medium'>
                  {item.degree}
                </div>
                {item.gpa && (
                  <div className='text-slate-700 dark:text-zinc-200 text-sm mt-1'>
                    {item.gpa}
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

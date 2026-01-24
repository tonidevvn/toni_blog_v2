
import { RiMailSendFill } from 'react-icons/ri';

function Contact() {
  return (
    <section
      id='contact'
      className='relative py-24 lg:py-32 overflow-hidden'
    >
      {/* Background Accent - Subtle */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl' />

      <div className='container relative z-10 mx-auto px-6 lg:px-12'>
        <div className='max-w-4xl mx-auto'>
          <header className='flex flex-col items-center text-center mb-12'>
            <h2 className='font-bold text-5xl lg:text-6xl mb-6 gradient-text-accent uppercase'>
              Get In Touch
            </h2>
            <div className='h-1 w-24 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full glow-accent' />
          </header>

          <div className='p-8 text-center'>
            <h3 className='text-slate-800 dark:text-slate-300 text-xl lg:text-2xl mb-4 leading-relaxed'>
              Please feel free to contact me if you have any question!
            </h3>
            <h4 className='text-slate-700 dark:text-slate-400 text-lg lg:text-xl leading-relaxed'>
              Or just wanna chat, please do not hesitate to reach out to me!
            </h4>
          </div>

          <div className='flex justify-center'>
            <a href='mailto:tonidevvn@gmail.com' rel='noreferrer'>
              <button className='btn-glass group flex items-center gap-3'>
                <RiMailSendFill className='text-2xl text-sky-400 group-hover:text-sky-500 transition-colors' />
                <span className='tracking-wide uppercase'>Contact Me</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;


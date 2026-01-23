import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className='flex flex-col justify-center items-center text-slate-600 dark:text-slate-300 py-[50px] gap-4'>
        <div className='w-full flex justify-center items-center gap-2'>
              <a
                href='https://github.com/tonidevvn'
                target='_blank'
                rel='noreferrer'
                className='text-2xl text-slate-400 hover:text-sky-400 transition-all duration-300 hover:scale-110 glow-accent'
                aria-label='GitHub Profile'
              >
                <FaGithub />
              </a>
              <a
                href='https://www.linkedin.com/in/tonipham/'
                target='_blank'
                rel='noreferrer'
                className='text-2xl text-slate-400 hover:text-sky-400 transition-all duration-300 hover:scale-110 glow-accent'
                aria-label='LinkedIn Profile'
              >
                <FaLinkedin />
              </a>
            </div>

            <div className='flex flex-col md:flex-row text-center gap-1 md:gap-2 text-base'>
              <span>A portfolio designed & built by</span>
              <span>
                <a
                  href='https://www.linkedin.com/in/tonipham/'
                  target='_blank'
                  rel='noreferrer'
                  className='text-sky-400 hover:text-sky-300 transition-all duration-300 font-semibold'
                >
                  Toni Pham
                </a>{' '}
                with ☕
              </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

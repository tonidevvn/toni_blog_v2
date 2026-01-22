import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className='flex flex-col justify-center items-center text-slate-600 dark:text-slate-300 py-6'>
        <div className='w-full flex justify-center items-center gap-2'>
          <a
            href='https://github.com/tonidevvn'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub size={42} />
          </a>
          <a
            href='https://www.linkedin.com/in/tonipham/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin size={42} />
          </a>
        </div>
        <div className='flex flex-col md:flex-row mt-4 text-lg gap-1 md:gap-2'>
          <span>A portfolio designed & built by </span>
          <span>
            <a
              href='https://www.linkedin.com/in/tonipham/'
              target='_blank'
              rel='noreferrer'
              className='text-slate-600 dark:text-slate-300 hover:text-slate-300 transition-all duration-300'
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

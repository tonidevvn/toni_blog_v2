import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import Avatar from "../assets/images/toni-photo.jpg";
import { scrollToSection } from "../utils";

function Main() {
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
    <div id="main" className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={Avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/tonidevvn"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/thangpham-1988-vn/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Hi There 👋</h1>
          <h1>I'm Toni</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/tonidevvn"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/thangpham-1988-vn/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className="button-animate" style={{ animationDelay: "800ms" }}>
            <div className="">
              <div className="w-full flex justify-center md:justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection("about")}
                  className="transition-all duration-300 animate-float px-5 py-4 border-2 border-indigo-600 hover:bg-indigo-600 font-bold mt-12 flex items-center space-x-3 rounded"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span>DISCOVER MORE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-5 right-5 z-10">
        <button
          aria-label="scroll to top"
          type="button"
          onClick={() => scrollToSection("main")}
          className={`${
            scrollTopVisible ? "opacity-100" : "opacity-0"
          } border-2 border-indigo-600 bg-indigo-600 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-all hover:bg-transparent duration-300`}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 18h12v2H6zm6-14.414-6.707 6.707 1.414 1.414L11 7.414V16h2V7.414l4.293 4.293 1.414-1.414z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Main;

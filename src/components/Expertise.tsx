import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faDocker } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { faCogs } from "@fortawesome/free-solid-svg-icons";

const labelsSW = [
  "C",
  "C++",
  "C#",
  "Java",
  "Python",
  "Visual Studio",
  "WindowForm",
  "WPF",
  "VB.NET",
];

const labelsWeb = [
  "React",
  "Nextjs",
  "JavaScript",
  "Nodejs",
  "Django",
  "Spring Boot",
  "Python",
  "SQL",
  "MongoDB",
  "CSS3",
  "SASS",
];

const labelsTest = ["JUnit", "Python", "PyTest", "Selenium", "Postman"];

const labelsDevOp = ["Git", "GitHub Actions", "Docker", "AWS", "Linux"];

function Expertise() {
  return (
    <div className="container mx-auto lg:px-6 md:px-6" id="expertise">
      <div className="skills-container">
        <header className="flex flex-col items-center text-center">
          <h2 className="font-bold text-5xl mb-12 text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-9 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-indigo-600 after:content-['']">
            Expertise
          </h2>
        </header>
        <div className="skills-grid">
          <div className="skill">
            <div className="flex align-middle items-center mb-4 cursor-pointer">
              <FontAwesomeIcon icon={faReact} size="3x" />
              <h3 className="ml-2 font-bold">Full Stack Web Development</h3>
            </div>
            <p>
              Proficient in frontend and backend development React, Next.js,
              Django, and Node.js, with expertise in data management, including
              database design, integration, and accuracy for scalable, efficient
              applications.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsWeb.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <div className="flex align-middle items-center mb-4 cursor-pointer">
              <FontAwesomeIcon icon={faReact} size="3x" />
              <h3 className="ml-2 font-bold">Software Engineer</h3>
            </div>
            <p>
              With expertise in C++, C#, Java, and Python, I have worked
              extensively on automotive-grade frameworks, adhering to industry
              standards like AUTOSAR and ISO 26262. Proficient in the Software
              Development Life Cycle (SDLC).
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSW.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <div className="flex align-middle items-center mb-4 cursor-pointer">
              <FontAwesomeIcon icon={faCogs} size="3x" />
              <h3 className="ml-2 font-bold">Automation & Testing</h3>
            </div>
            <p>
              Automate and enhance testing processes automatically with
              Selenium. I have professional experience designing robust,
              enterprise-grade automation frameworks to ensure seamless web
              application functionality, reliability, and performance.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsTest.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <div className="flex align-middle items-center mb-4 cursor-pointer">
              <FontAwesomeIcon icon={faDocker} size="3x" />
              <h3 className="ml-2 font-bold">DevOps & Deployment</h3>
            </div>
            <p>
              Once the application is built, I help clients set up DevOps
              testing, CI/CD pipelines, and deployment automation to support the
              successful Go-Live.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsDevOp.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;

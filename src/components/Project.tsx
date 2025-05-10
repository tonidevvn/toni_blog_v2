import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import "../assets/styles/Project.scss";
import ProjectCard from "./Project-Card";

const projects = [
  {
    id: 1,
    title: "Ecommerce Web App",
    description:
      "A React.js e-commerce web app with an Ant Design interface, designed for development and prototype testing using readily available fake JSON data",
    image: mock04,
    technologies: ["ReactJs", "HTML", "SASS", "Antd"],
    repoLink: "https://github.com/tonidevvn/ecommerce-antd/",
    liveLink: "https://ecommerce-antd.vercel.app/",
  },
  {
    id: 2,
    title: "Favorite Movies Collection",
    description:
      "This favorite movies collection web app leverages React, TypeScript, and Vite, utilizing a streamlined template for rapid development with HMR and ESLint.",
    image: mock02,
    technologies: ["React", "TypeScript", "HTML", "CSS"],
    repoLink: "https://github.com/tonidevvn/moviesCollection/",
    liveLink: "https://toni-movies-collection.vercel.app/",
  },
  {
    id: 3,
    title: "Food Price Tracker",
    description:
      "Track food prices in real-time across multiple online retailers. Features include advanced search and insightful data analytics.",
    image: mock03,
    technologies: [
      "NextJs",
      "Java Springboot",
      "Web Crawling",
      "CSS",
      "Selenium",
      "MySQL",
    ],
    repoLink: "https://github.com/tonidevvn/applied-computing-concepts/",
    liveLink: null,
  },
  {
    id: 4,
    title: "FileNest",
    description:
      "FileNest is a scalable and reliable distributed file storage system using MinIO to efficiently manage large, redundant files with optimized retrieval.",
    image: mock05,
    technologies: [
      "Python",
      "Django",
      "REST API",
      "Tailwind",
      "Amazon S3",
      "MinIO",
    ],
    repoLink: "https://github.com/tonidevvn/FileNest/",
    liveLink: null,
  },
  {
    id: 5,
    title: "BusRadar - Real-time Bus Tracking",
    description:
      "A real-time bus tracking system powered by Java Spring Boot and ReactJS, offering precise arrival predictions and delay forecasts through GPS integration and advanced analytics.",
    image: mock01,
    technologies: [
      "React",
      "Java Springboot",
      "CSS",
      "MongoDB",
      "Docker",
      "Web Crawling",
      "Redis",
    ],
    repoLink: "https://github.com/tonidevvn/bus-radar/",
    liveLink: null,
  },
  {
    id: 6,
    title: "UWindsor Tours",
    description:
      "UWindsor Tours is an interactive 3D WebGL experience where players explore a virtual University of Windsor campus in a fun and engaging way.",
    image: mock06,
    technologies: ["Unity", "C#", "Game Development", "Video Game"],
    repoLink: "https://github.com/tonidevvn/UWindsor_Tours/",
    liveLink: "https://uwindsor-tours-landing-page-b37u.vercel.app/",
  },
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <header className="flex flex-col items-center text-center">
        <h2 className="font-bold text-5xl mb-12 text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-9 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-indigo-600 after:content-['']">
          Technical Projects
        </h2>
      </header>
      <div className="projects-grid">
        {projects
          .slice()
          .reverse()
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </div>
  );
}

export default Project;

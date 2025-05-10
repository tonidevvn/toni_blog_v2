import Photo from "../assets/images/toni-photo2.jpg";

function About() {
  return (
    <div>
      <div
        id="about"
        className="text-white mt-40 flex justify-between items-center mx-auto px-6 md:px-6 lg:px-6 w-full"
      >
        <div className="container mx-auto lg:px-6 md:px-6">
          <header className="flex flex-col items-center text-center">
            <h2 className="font-bold text-5xl mb-12 text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-9 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-indigo-600 after:content-['']">
              About Me
            </h2>
          </header>
          <div>
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-8/12 px-10">
                <ul className="space-y-8">
                  <li>
                    <p className="text-gray-400 leading-relaxed mb-3 font-normal">
                      Hello! I'm Thang Pham (Toni), a seasoned Software Engineer
                      with over a decade of experience in building full-stack
                      applications using JavaScript, React, Java Spring Boot,
                      and Python Django. My expertise lies in designing,
                      developing, and testing web-based applications, with a
                      strong focus on data-driven solutions and creative
                      problem-solving.
                    </p>
                  </li>
                  <li>
                    <p className="text-gray-400 leading-relaxed mb-3 font-normal">
                      Throughout my career, I've worn many hats, from software
                      engineer to team leader, and eventually project manager.
                      My journey has equipped me with the skills to develop
                      high-throughput APIs and architect robust data platforms.
                      I'm passionate about delivering tangible results, such as
                      optimizing performance by applying new solutions, reducing
                      operational costs, and enhancing accuracy through
                      data-driven applications.
                    </p>
                  </li>
                  <li>
                    <p className="text-gray-400 leading-relaxed mb-3 font-normal">
                      I love the entire process of developing creative software
                      solutions, as it allows me to create something both
                      beautiful and functional. I'm dedicated to continuously
                      improving my skills to enhance my creativity and build
                      visually appealing products.
                    </p>
                  </li>
                  <li>
                    <p className="text-gray-400 leading-relaxed mb-3 font-normal">
                      Here are a few technologies I’ve been working with
                      recently:
                    </p>
                  </li>
                </ul>
                <ul className="flex flex-wrap text-gray-400">
                  <li className="w-1/2 font-medium mb-2.5">
                    <span className="before:content-['▸'] before:mr-3 before:text-indigo-600"></span>
                    React.JS
                  </li>
                  <li className="w-1/2 font-medium mb-2.5">
                    <span className="before:content-['▸'] before:mr-3 before:text-indigo-600"></span>
                    Next.JS
                  </li>
                  <li className="w-1/2 font-medium mb-2.5">
                    <span className="before:content-['▸'] before:mr-3 before:text-indigo-600"></span>
                    JavaScript
                  </li>
                  <li className="w-1/2 font-medium mb-2.5">
                    <span className="before:content-['▸'] before:mr-3 before:text-indigo-600"></span>
                    TypeScript
                  </li>
                  <li className="w-1/2 font-medium mb-2.5">
                    <span className="before:content-['▸'] before:mr-3 before:text-indigo-600"></span>
                    Java Springboot
                  </li>
                  <li className="w-1/2 font-medium mb-2.5">
                    <span className="before:content-['▸'] before:mr-3 before:text-indigo-600"></span>
                    Python Django
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 flex items-center justify-center">
                <div className="w-2/3 flex justify-center mb-16">
                  <div className="profile_img">
                    <img src={Photo} alt="about me" className="rounded-md" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

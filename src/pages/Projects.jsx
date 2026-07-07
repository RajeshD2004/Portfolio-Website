import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text text-3xl sm:text-4xl'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-3 leading-relaxed text-base sm:text-lg max-w-4xl'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

     <div className='flex flex-wrap justify-center lg:justify-start my-10 sm:my-16 lg:my-20 gap-8 sm:gap-10 lg:gap-16'>
        {projects.map((project) => (
          <div
  className='w-full sm:w-[90%] md:w-[48%] lg:w-[400px]'
  key={project.name}
>
           <div className='block-container w-10 h-10 sm:w-12 sm:h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

           <div className='mt-4 sm:mt-5 flex flex-col'>
             <h4 className='text-xl sm:text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500 text-sm sm:text-base leading-6'>{project.description}</p>
             <div className="mt-4 sm:mt-5 flex items-center gap-2 font-poppins">
  <Link
    to={`/project/${project.id}`}
    className="font-semibold text-blue-600"
  >
    Overview
  </Link>

  <img
    src={arrow}
    alt="arrow"
    className="w-4 h-4 object-contain"
  />
</div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;

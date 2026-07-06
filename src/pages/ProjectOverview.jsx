import { Link, useParams } from "react-router-dom";
import { projects } from "../constants";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectOverview = () => {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <section className="max-container py-20">
        <h1 className="head-text">Project Not Found</h1>
      </section>
    );
  }

  return (
    <section className="max-container py-10">

      {/* Back Button */}
     <Link
  to="/projects"
  className="group inline-flex items-center gap-3 px-6 py-3 rounded-2xl
  bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600
  text-white font-semibold
  shadow-[0_10px_30px_rgba(59,130,246,0.35)]
  hover:shadow-[0_15px_40px_rgba(59,130,246,0.45)]
  hover:-translate-y-1
  transition-all duration-300"
>
  <span className="text-2xl transition-transform duration-300 group-hover:-translate-x-2">
    ←
  </span>

  <span>Back to Projects</span>
</Link>

      {/* Title */}
      <div className="mt-6">
        <h1 className="head-text">
          <span className="blue-gradient_text font-semibold">
            {project.name}
          </span>
        </h1>

        <p className="text-slate-500 mt-5 text-lg leading-relaxed max-w-4xl">
          {project.description}
        </p>
      </div>

      {/* Screenshot & Video */}
      <div className="flex flex-col lg:flex-row gap-8 mt-12">

        {/* Screenshot Slider */}
       <div className="w-full lg:w-1/2 bg-white rounded-3xl shadow-2xl flex flex-col">

  <div className="p-6">
    <h2 className="text-2xl font-bold">
      Project Screenshots
    </h2>
  </div>

  <div className="px-6 flex-1">
    <div className="aspect-video">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        className="w-full h-full rounded-2xl"
      >
        {project.screenshots.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Screenshot ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>

  {/* Empty space to align with video description */}
  <div className="p-6">
    <p className="text-transparent">
      Placeholder text for alignment.
    </p>
  </div>

</div>

        {/* Video */}
      <div className="w-full lg:w-1/2 bg-white rounded-3xl shadow-2xl flex flex-col">

  <div className="p-6">
    <h2 className="text-2xl font-bold">
      Project Demonstration
    </h2>
  </div>

  <div className="px-6 flex-1">
    <div className="aspect-video">
      <video
        controls
        className="w-full h-full object-cover rounded-2xl"
      >
        <source src={project.video} type="video/mp4" />
      </video>
    </div>
  </div>

  <div className="p-6">
    <p className="text-slate-500">
      Watch a complete walkthrough of the project including its features,
      workflow, and overall functionality.
    </p>
  </div>
        </div>

      </div>

      {/* Technologies */}
      <div className="mt-16">

        <h2 className="text-3xl font-bold mb-8">
          Technologies Used
        </h2>

        <div className="flex flex-wrap gap-5">

          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="
              floating-bubble
              relative
              px-7
              py-3
              rounded-full
              bg-white/20
              backdrop-blur-xl
              border
              border-white/30
              text-blue-700
              font-semibold
              shadow-[0_8px_32px_rgba(31,38,135,0.25)]
              hover:scale-110
              hover:-translate-y-2
              transition-all
              duration-300
              cursor-pointer
              overflow-hidden
              before:absolute
              before:w-4
              before:h-4
              before:bg-white/80
              before:rounded-full
              before:top-2
              before:left-4
              before:blur-sm
              "
            >
              {tech}
            </span>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ProjectOverview;
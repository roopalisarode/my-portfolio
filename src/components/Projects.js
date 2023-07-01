
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";

function mergeSkills(project){
  const mergedarray = [...project.languages, ...project.libraries];
  return mergedarray.join(', ');
}

const Projects = ({user})=> {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify">
            The following are a collection of projects that I have undertaken as part of my academic curriculum and personal development, with the aim of acquiring new skills in programming languages and technologies.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {user && user.projects.map((project) => (
            <a
              href={project.url || project.githubUrl}
              target="_blank"
              key={project && project.images}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative h-full">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-fill object-center"
                  src={project.images[0].resolutions && project.images[0].resolutions.mobile.url}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1 font-wrap break-words">
                    {mergeSkills(project)}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.displayName}
                  </h1>
                  <p className="leading-relaxed text-justify">{project.summary}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
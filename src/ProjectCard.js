import React from "react";

function ProjectCard({ project}) {

    return (
      <div className="flex lg:flex-row flex-col items-center shadow-lg shadow-gray-600/50 rounded-3xl transform transition duration-500 hover:scale-110">
        <div className="basis-1/2">
          <img
            src={project.imgSrc}
            alt={project.imgSrc}
            className="lg:rounded-3xl rounded-xl lg:ml-4 object-cover"
          />
        </div>
        <div className="basis-1/2 flex flex-col justify-evenly items-center lg:pl-10 lg:pr-10 pl-4 pr-4 lg:pt-0 pt-4">
          <div className="lg:text-3xl text-lg uppercase font-bold tracking-wider lg:pb-10 pb-4">{project.title}</div>
          <div className="lg:text-xl text-sm lg:pb-10 pb-6">{project.description}</div>
          <div className="text-[#111827] font-extrabold lg:text-xl text-medium pb-10">
          <a href={project.demoLink} target="_blank" rel="noreferrer"><button type="button" class=" bg-gradient-to-r from-purple-400 via-purple-350 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-100 dark:focus:ring-purple-400  rounded-lg  lg:px-5 px-2 py-2.5 text-center mr-2 mb-2 ">DEMO</button></a>
          <a href={project.codeLink} target="_blank" rel="noreferrer"><button type="button" class="bg-gradient-to-r from-blue-300 via-purple-350 to-purple-400 hover:bg-gradient-to-tl focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-400 rounded-lg lg:px-5 px-2 py-2.5 text-center mr-2 mb-2 ">CODE</button></a>
          </div>
        </div>
      </div>
    );
   
}

export default ProjectCard;

import React from "react";

export default function Project({ projects }) {
  return (
    <>
      {projects.map((project) => {
        return (
          <div key={project.title}>
            <h1 className="border-b-2 border-red-900 font-medium text-4xl">
              {project.title}
            </h1>
            <div className="gap-x-16 gap-y-12 xl:gap-y-36 grid grid-cols-1 xl:grid-cols-2 mt-8 mb-12 ">
              <div>
                <img
                  className="border-2 border-gray-300 mb-2 rounded-md shadow-xl"
                  alt={project.imageDescription}
                  src={project.imageFirst}
                />
              </div>
              <div>
                <p className="mb-6">{project.decription}</p>
                <div className="grid grid-cols-1 2xl:grid-cols-2">
                  {project.tools.map(([type, tool]) => {
                    return (
                      <ul key={type} className="leading-relaxed">
                        <li>
                          <strong>{type}:</strong> {tool}
                        </li>
                      </ul>
                    );
                  })}
                </div>
                <div className="grid grid-cols-2 gap-4 my-8">
                  <a
                    className="border-2 border-gray-300 cursor-pointer hover:text-gray-500 p-2 rounded-md flex items-center justify-center"
                    href={project.website}
                    target="_blank"
                  >
                    Visit website
                  </a>
                  <a
                    className="border-2 border-gray-300 cursor-pointer hover:text-gray-500 p-2 rounded-md flex items-center justify-center"
                    href={project.github}
                    target="_blank"
                  >
                    View code
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

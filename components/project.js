import React from "react";

export default function Project({ projects }) {
  return (
    <>
      {projects.map((project) => {
        return (
          <div key={project.title} className="gap-x-8 gap-y-12 lg:gap-y-24 grid grid-cols-1 lg:grid-cols-2 mt-12 mb-24 ">
            <div >
              <img className="border-2 border-gray-300 mb-2" alt={project.imageDescription} src={project.imageFirst} />
            </div>
            <div>
              <h1 className="font-medium mb-6 text-4xl">{project.title}</h1>
              <p className="mb-6">{project.decription}</p>
              <div className="grid grid-cols-2">
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
              <div className="my-8">
                <a
                  className="border-2 border-gray-300 cursor-pointer hover:text-gray-500 p-2 rounded"
                  href={project.website}
                  target="_blank"
                >
                  Visit website
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

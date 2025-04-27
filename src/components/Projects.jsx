import React from "react";

const Projects = ({ projects, handleCardClick }) => {
    return (
        <div id="projects" className="h-screen font-prata p-10 image-trigger2">
            <h2 className="text-center text-5xl pb-6">- PROJECTS -</h2>
            <div className="flex flex-col gap-6 p-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-4 sm:pl-12 sm:pr-12"
                        onClick={() => handleCardClick(index)}
                    >
                        <div className="w-full sm:w-80 2xl:w-100 h-auto flex-shrink-0">
                            <img
                                className="object-cover w-full h-full rounded-md"
                                src={project.image}
                                alt={project.title}
                            />
                        </div>
                        <div className="flex flex-col w-full text-center sm:text-left">
                            <div className="flex items-center gap-3">
                                <h3 className="text-2xl pb-2 pt-1 text-custom-white">
                                    {project.title}
                                </h3>
                                <a
                                    className="rounded-full pb-1 hover:text-white hover:shadow-2xl -mt-1"
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        className="w-6 fill-current inline-block"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                    </svg>
                                </a>
                            </div>
                            <p className="text-sm 2xl:text-xl">{project.duration}</p>
                            <p className="text-sm mt-2">{project.type}</p>
                            <p className="text-sm mt-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-2 justify-center sm:justify-start">
                                {project.badges.map((badge, badgeIndex) => (
                                    <span
                                        key={badgeIndex}
                                        className="border-1 border-gray-400 text-xs px-2 py-1 rounded-md"
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
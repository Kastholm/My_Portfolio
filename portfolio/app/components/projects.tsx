

import Image from "next/image";
import { Globe } from "lucide-react";
import { LiaGithub } from "react-icons/lia";
import { getProjects, Project } from "../data/projects";
import "react-medium-image-zoom/dist/styles.css";
import { urlFor } from "../lib/sanityclient";
import Link from "next/link";

const Projects: React.FC = async () => {
  const projects = await getProjects();


  return (
      <div className="py-6 mt-16">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2 text-center">
          Projekter
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-center mb-10">
          Her er nogen af mine bedste og mest komplekse projekter.
        </p>
        <div
          id="top"
          className={`grid gap-6 sm:grid-cols-1 md:grid-cols-2 transition-[5s] lg:grid-cols-2 `}
        >
          {projects.sort((a: Project, b: Project) => new Date(b.dato).getTime() - new Date(a.dato).getTime()).map((project: Project) => (
            <div
              key={project._id}
              className="bg-white dark:bg-neutral-950 rounded-lg overflow-hidden border border-neutral-300 dark:border-neutral-800 flex flex-col"
            >
              <div className="relative h-48 w-full">
                  <Image
                    src={urlFor(project.billede).url()}
                    alt={project.titel}
                    layout="fill"
                    objectFit="cover"
                    className="min-h-[64px]"
                  />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-neutral-900 dark:text-white mb-2">
                  {project.titel}
                </h3>
                <p className="mb-2 text-xs text-neutral-700 dark:text-neutral-300">
                  {project.dato}
                </p>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4 text-xs">
                  {project.resume}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.programmeringssprog?.map((tech, index) => (
                    <span
                      key={tech._id}
                      className="bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-300 text-xs font-medium py-1 px-2 rounded"
                    >
                      {tech.navn}
                    </span>
                  ))}
                  
                </div>

                <div className="mt-auto grid gap-2 text-xs font-medium">
                <a
                      href={`/blog/projekt/${project.slug}`}
                      rel="noopener noreferrer"
                      className="flex items-center bg-indigo-600 w-[185px]  text-neutral-200 dark:text-neutral-300 px-3 py-1 rounded hover:bg-neutral-200"
                    >
                      <Globe size={12} className="mr-2" />
                      Læs mere
                    </a>
                  <div className="flex gap-2">
                    {project.websiteLink && (
                      <a
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-neutral-100  text-neutral-800 dark:text-neutral-800 px-3 py-1 rounded hover:bg-neutral-200"
                      >
                        <Globe size={12} className="mr-2" />
                        Website
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-neutral-100  text-neutral-800 dark:text-neutral-800 px-3 py-1 rounded hover:bg-neutral-200"
                      >
                        <LiaGithub size={16} className="mr-2" />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
  );
};

export default Projects;

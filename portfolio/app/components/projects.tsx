"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Globe } from "lucide-react";
import { LiaGithub } from "react-icons/lia";
import { getProjects, Project } from "../data/projects";
import FadeBlurAnimation from "./animation/fadeblur";
import { IoIosArrowDown, IoIosArrowDropdown } from "react-icons/io";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Projects: React.FC = () => {
  const projects = getProjects();

  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <FadeBlurAnimation>
      <div className="py-6 mt-16">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2 text-center">
          Projekter
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-center mb-10">
          Jeg elsker at designe hjemmesider. Her er nogen af dem.
        </p>
        <div
          id="top"
          className={`grid gap-6 sm:grid-cols-1 md:grid-cols-2 transition-[5s] lg:grid-cols-2 ${
            showMore ? "max-h-none" : "overflow-hidden max-h-[1150px]"
          }`}
        >
          {projects.map((project: Project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-neutral-950 rounded-lg overflow-hidden border border-neutral-300 dark:border-neutral-800 flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Zoom>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="min-h-[64px]"
                  />
                </Zoom>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-neutral-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="mb-2 text-xs text-neutral-700 dark:text-neutral-300">
                  {project.dateRange}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-xs">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-300 text-xs font-medium py-1 px-2 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-2 text-xs font-medium">
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-neutral-100  text-neutral-800 dark:text-neutral-800 px-3 py-1 rounded hover:bg-neutral-200"
                    >
                      <Globe size={12} className="mr-2" />
                      Website
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
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
          ))}
          <span
            className={`absolute w-full h-32 bottom-6 bg-gradient-to-b from-transparent ${
              showMore ? "to-transparent" : "to-neutral-400"
            }`}
          ></span>
          <aside
            className={`absolute w-full ${showMore ? "bottom-0" : "bottom-14"}`}
          >
            <button
              onClick={() => setShowMore(!showMore)}
              className={`bg-neutral-700 animate-bounce rounded-full p-2 text-neutral-200 m-auto text-center cursor-pointer grid place-content-center dark:bg-zinc-900 font-medium text-xl items-center ${
                showMore ? "transfrom rotate-180" : ""
              }`}
            >
              <IoIosArrowDown
                size={24}
                className={`${showMore ? "transfrom rotate-180" : ""}`}
              />
            </button>
          </aside>
        </div>
      </div>
    </FadeBlurAnimation>
  );
};

export default Projects;

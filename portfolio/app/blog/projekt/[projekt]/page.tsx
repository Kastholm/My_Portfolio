import { PortableText } from "next-sanity";
import Dock from "@/app/components/ui/dock";
import { urlFor } from "@/app/lib/sanityclient";
import { getProject } from "@/app/data/projects";
import type { Project } from "@/app/data/projects";

export default async function ProjektPage({ params }: { params: { projekt: string } }) {
  const project = await getProject(params.projekt);
  console.log("Project data:", project);

  return (
    <section className="min-h-screen articleText">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
              {project.titel}
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {project.dato}
              </span>
            </div>
            
            {/* Tech Stack */}
            {project.programmeringssprog && project.programmeringssprog.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {project.programmeringssprog.map((tech: Project['programmeringssprog'][number]) => (
                  <span
                    key={tech._id}
                    className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium py-2 px-4 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200"
                  >
                    {tech.navn}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Featured Image */}
          {project.billede && project.billede.asset && (
            <div className="relative mb-12">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={urlFor(project.billede)
                    .format("webp")
                    .quality(100)
                    .url()}
                  alt={`Billede af ${project.titel}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                Foto: {project.titel}
              </div>
            </div>
          )}
        </div>

        {/* Project Summary */}
        {project.resume && (
          <div className="mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Projektoversigt
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.resume}
              </p>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-8 lg:p-12">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:dark:text-gray-100 prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-strong:text-gray-900 prose-strong:dark:text-gray-100 prose-a:text-blue-600 prose-a:dark:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-li:text-gray-700 prose-li:dark:text-gray-300 prose-blockquote:border-l-blue-500 prose-blockquote:bg-gray-50 prose-blockquote:dark:bg-gray-700 prose-blockquote:p-4 prose-blockquote:rounded-r-lg">
              <PortableText value={project.indhold} />
            </div>
          </div>
        </div>
      </div>
      <Dock />
    </section>
  );
}
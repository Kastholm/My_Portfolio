import { PortableText } from "next-sanity";
import Dock from "@/app/components/ui/dock";
import { urlFor } from "@/app/lib/sanityclient";
import { getProject } from "@/app/data/projects";
import type { Project } from "@/app/data/projects";

export default async function ProjektPage({ params }: { params: { projekt: string } }) {
  const project = await getProject(params.projekt);
  console.log("Project data:", project);

  // If project is not found, show 404
  if (!project) {
    return (
      <section className="bg-[#fff] articleText max-w-[1000px] dark:bg-main_color_dark border-b-2 border-gray-100 md:pt-4">
        <section className="m-auto">
          <div className="py-3 rounded-lg lg:py-8 articleSection">
            <div className="containerr lg:px-6 grid-cols-1 pt-0 mx-auto articleContent grid gap-6">
              <article className="w-full rounded-lg">
                <section>
                  <header>
                    <h1 className="text-xl lg:text-4xl font-extrabold my-1 lg:my-2">
                      Projekt ikke fundet
                    </h1>
                  </header>
                  <p className="text-lg">Projektet med slug "{params.projekt}" kunne ikke findes.</p>
                </section>
              </article>
            </div>
          </div>
        </section>
        <Dock />
      </section>
    );
  }

  return (
    <section className="bg-[#fff] max-w-[1000px] dark:bg-main_color_dark border-b-2 border-gray-100 md:pt-4">
      <section className="m-auto">
        <div className="py-3 rounded-lg lg:py-8 articleSection">
          <div className="containerr lg:px-6 grid-cols-1 pt-0 mx-auto articleContent grid gap-6">
            <article key={project._id} className="w-full rounded-lg">
              <section>
                <header>
                  <h1 className="text-xl lg:text-4xl font-extrabold my-1 lg:my-2">
                    {project.titel}
                  </h1>
                </header>
                <footer className="py-1 lg:py-4">
                  <div className="items-center p-2 mt-1 md:mt-2 border-t-2 border-gray-200">
                    <div className="flex gap-x-2 lg:mt-2 align-middle">
                      <p className="text-fade_color_light dark:text-fade_color_dark font-semibold text-xs">
                        {project.dato}
                      </p>
                    </div>
                    {project.programmeringssprog && project.programmeringssprog.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.programmeringssprog.map((tech: Project['programmeringssprog'][number]) => (
                          <span
                            key={tech._id}
                            className="bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-300 text-sm font-medium py-1 px-2 rounded"
                          >
                            {tech.navn}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </footer>

                {project.billede && project.billede.asset && (
                  <aside className="relative min-h-[10em] md:min-h-[25em]">
                    <figure className="absolute top-0 left-0 right-0 h-[10em] md:h-[25em] overflow-clip">
                      <img
                        src={urlFor(project.billede)
                          .format("webp")
                          .quality(100)
                          .url()}
                        alt={`Billede af ${project.titel}`}
                        className="w-full h-auto rounded-t-lg object-cover"
                      />
                      <figcaption className="absolute text-xs lg:text-sm bottom-0 right-0 text-gray-300 p-1 bg-gray-400 bg-opacity-50">
                        Foto: {project.titel}
                      </figcaption>
                    </figure>
                  </aside>
                )}

                <h2 className="text-md lg:text-md font-bold my-2 mb-4 lg:my-4 px-3">
                  {project.resume}
                </h2>
              </section>

              <section className="articleText leading-8 px-3 text-lg prose prose-blue prose-xl dark:prose-invert prose-li:marker:text-primary">
                <PortableText value={project.indhold} />
              </section>
            </article>
          </div>
        </div>
      </section>
      <Dock />
    </section>
  );
}
import { getArticles } from "@/app/api/getArticles";
import { ArticleModel } from "@/app/model/ArticleModel";
import { PortableText } from "next-sanity";
import "../stylesheets/articleText.css";
import React from "react";
import { urlFor } from "@/app/lib/sanityclient";
import Dock from "@/app/components/ui/dock";
import articleSchema from "../meta/articleSchema";
import { Metadata } from "next";
import { generateArticleMetadata } from "../meta/generateArticleMetadata";

async function fetchArticleData(slug: string) {
  const articleData: ArticleModel = await getArticles(slug);
  return articleData;
}
/* -------------------------------------------------------------------------- */
/*                                  METADATA                                  */
/* -------------------------------------------------------------------------- */
export async function generateMetadata({
  params,
}: {
  params: { artikel: string };
}) {
  const article = await fetchArticleData(params.artikel);
  const metadata: Metadata = await generateArticleMetadata(article);
  return metadata;
}

export default async function artikel({
  params,
}: {
  params: { artikel: string };
}) {
  const mainArticle = await fetchArticleData(params.artikel);

  const jsonLd = articleSchema({ mainArticle, params: params.artikel });

  return (
    <section className="bg-[#fff] max-w-[1000px]  dark:bg-main_color_dark border-b-2 border-gray-100 md:pt-4 ">
      <script
        async
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="m-auto">
        {mainArticle ? (
          <>
            <div className="py-3 rounded-lg lg:py-8 articleSection ">
              <div className="containerr lg:px-6 grid-cols-1 pt-0 mx-auto articleContent grid gap-6 ">
                <article key={mainArticle._id} className="w-full rounded-lg">
                  <section>
                    <header>
                      <h1 className="text-xl lg:text-4xl font-extrabold my-1 lg:my-2">
                        {mainArticle.title}
                      </h1>
                    </header>
                    <footer className="py-1 lg:py-4">
                      <div className="items-center p-2 mt-1 md:mt-2 border-t-2 border-gray-200">
                        <div className="flex gap-x-2 lg:mt-2 align-middle">
                          <time className="text-fade_color_light  dark:text-fade_color_dark font-semibold text-xs ">
                            D.{" "}
                            {new Date(
                              mainArticle._createdAt
                            ).toLocaleDateString()}
                          </time>
                        </div>
                      </div>
                    </footer>

                    <aside className="relative min-h-[10em] md:min-h-[25em]">
                      <figure className="absolute top-0 left-0 right-0 h-[10em] md:h-[25em] overflow-clip">
                        <picture>
                          <source
                            srcSet={`${urlFor(mainArticle.image)
                              .width(800)
                              .height(450)
                              .format("webp")
                              .quality(50)
                              .url()} 800w,
      ${urlFor(mainArticle.image)
        .width(480)
        .height(270)
        .format("webp")
        .quality(90)
        .url()} 480w`}
                            sizes="(max-width: 800px) 100vw, 800px"
                            type="image/webp"
                          />
                          <source
                            srcSet={`${urlFor(mainArticle.image)
                              .width(800)
                              .height(450)
                              .format("webp")
                              .quality(60)
                              .url()} 800w,
      ${urlFor(mainArticle.image)
        .width(480)
        .height(270)
        .format("webp")
        .quality(90)
        .url()} 480w`}
                            sizes="(max-width: 800px) 100vw, 800px"
                            type="image/jpeg"
                          />
                          <img
                            src={urlFor(mainArticle.image)
                              .width(800)
                              .height(450)
                              .format("webp")
                              .quality(90)
                              .url()}
                            sizes="(max-width: 800px) 100vw, 800px"
                            width="800"
                            height="450"
                            alt={`Billede af ${mainArticle.caption}`}
                            className="w-full h-auto rounded-t-lg object-cover"
                          />
                        </picture>
                        <figcaption className="absolute text-xs lg:text-sm bottom-0 right-0 text-gray-300 p-1 bg-gray-400 bg-opacity-50">
                          Foto: {mainArticle?.caption || "Shutterstock.com"}
                        </figcaption>
                      </figure>
                    </aside>

                    <h2 className="text-md lg:text-2xl font-semibold my-2 mb-4 lg:my-4 px-3">
                      {mainArticle.teaser}
                    </h2>
                  </section>

                  <section className="articleText leading-8 px-3 text-lg prose prose-blue prose-xl dark:prose-invert prose-li:marker:text-primary">
                    <PortableText value={mainArticle.body} />
                  </section>
                </article>
              </div>
            </div>
          </>
        ) : null}
      </section>
      <Dock />
    </section>
  );
}
export const runtime = "edge";

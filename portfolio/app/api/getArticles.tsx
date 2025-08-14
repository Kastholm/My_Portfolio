import { client } from "@/app/lib/sanityclient";
import { ArticleModel } from "../model/ArticleModel";
export const revalidate = 600;

export async function getArticles(
  slug: string | undefined
) {
  let query = `*[_type == "post"`;

  query += ` && (slug.current == "${slug}")]`;

  query += ` | order(coalesce(publishedAt, _createdAt) desc)[0] {
        _id,
      _createdAt,
      _updatedAt,
      _type,
      title,
      teaser,
      "articleSlug": slug.current,
      "image": coverImage.asset,
      caption,
      body
      }`;
  
    try {
      const data = await client.fetch<ArticleModel[]>(query);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
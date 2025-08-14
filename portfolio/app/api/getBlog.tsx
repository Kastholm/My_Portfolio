import { client } from "@/app/lib/sanityclient";
import { ArticleModel } from "../model/ArticleModel";
export const revalidate = 600;

export async function getBlog() {

  let query = `*[_type == "post"]`;
  

  // Tilføj ordren og resten af data, når filtrene er opsat
  query += ` | order(coalesce(publishedAt, _createdAt) desc) {
      _id,
      title,
      teaser,
      "articleSlug": slug.current,
      "image": coverImage.asset,
      }`;
  
    try {
      const data = await client.fetch<ArticleModel[]>(query);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
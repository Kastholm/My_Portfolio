import { urlFor } from "@/app/lib/sanityclient";
import { ArticleModel } from "@/app/model/ArticleModel";

export async function generateArticleMetadata(currentArticle: ArticleModel) {
  
    if (currentArticle) {
      return {
        title: currentArticle.title,
        description: currentArticle.teaser,
        alternates: {
          canonical: `https://marckastholm.netlify.app/artikel/${
            currentArticle.articleSlug
          }`,
        },  
        keywords: 'Portefølje',
        openGraph: {
          title: currentArticle.title,
          description: currentArticle.teaser,
          url: `https://marckastholm.netlify.app/artikel/${
            currentArticle.articleSlug
          }`,
          type: "article",
          siteName: 'https://marckastholm.netlify.app',
          locale: "da_DK",
          images: [
            {
              url: urlFor(currentArticle.image)
                .format("webp")
                .width(400)
                .height(300)
                .fit("fill")
                .quality(85)
                .url(),
              width: 800,
              height: 600,
              alt: currentArticle.title,
            },
          ],
        },
        twitter: {
          card: "summary_large_image",
          site: '',
          title: currentArticle.title,
          description: currentArticle.teaser,
          images: urlFor(currentArticle.image)
            .format("webp")
            .width(400)
            .height(300)
            .fit("fill")
            .quality(85)
            .url(),
        },
        robots: {
          "max-image-preview": "large",
        },
      };
    } else {
      return {
        title: "Default Title",
      };
    }
  }
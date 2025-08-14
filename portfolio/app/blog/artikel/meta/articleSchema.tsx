import React from 'react';
import { urlFor } from '@/app/lib/sanityclient';
import { ArticleModel } from '@/app/model/ArticleModel';

export default function articleSchema({ mainArticle, params }: { mainArticle: ArticleModel, params: string }) {

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: mainArticle?.title,
    description: mainArticle?.teaser,
    image: [
      {
        "@context": "http://schema.org",
        "@type": "ImageObject",
        "thumbnail": urlFor(mainArticle?.image),
        "caption": mainArticle?.caption || 'Shutterstock.com',
        "author": "RAI",
        "url": urlFor(mainArticle?.image)
      },
    ],
    "mainEntityOfPage": `https://marckastholm.netlify.app/artikel/${params}`,
    "url": `https://marckastholm.netlify.app/artikel/${params}`,
    "inLanguage": "da-dk",
    "author": [
      {
        "@type": "Person",
        "url": `https://www.linkedin.com/in/marc-kastholm-a0a260209/`,
        "image": 'https://media.licdn.com/dms/image/v2/D4E03AQG0eA9KWfcQTw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1670175160670?e=1737590400&v=beta&t=tFIfqtQWiOu5EAxcqpGhsyjBPCg4LGxMoVS4v4M3Cy8',
        "name": 'Marc Kastholm'
      }
    ],
    "datePublished": mainArticle?._createdAt,
    "dateModified": mainArticle?._updatedAt,
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": 'Marc',
      "logo": {
        "@type": "ImageObject",
      }
    },
    "copyrightYear": new Date().getFullYear(), 
    "isAccessibleForFree": true,
    "hasPart": {
      "@type": "WebPageElement",
      "isAccessibleForFree": true
    }
  };

  return articleJsonLd;
}
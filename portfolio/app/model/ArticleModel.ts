export interface ArticleModel {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _type: string;
  title: string;
  teaser: string;
  articleSlug: string | "";
  image: any;
  caption: string;
  body: any[];
}

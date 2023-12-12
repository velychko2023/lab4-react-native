export type NewsRequest = {
  status: string;
  totalResults: number;
  articles: News[];
};

export type News = {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type Post = {
  _id: string;
  title: string;
  content: string;
  post_date: Date;
  categories: Array<string>;
};

type JSON_Post = {
  _id: string;
  title: string;
  content: string;
  post_date: string;
  categories: Array<string>;
};

export type { Post, JSON_Post };
export default Post;

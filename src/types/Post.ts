import Content from "./Content";

type PostUpload = {
  title: string;
  categories: Array<string>;
  content: Array<Content>;
};

type PostJSON = {
  _id: string;
  categories: Array<string>;
  title: string;
  post_date: string;
  content: Array<Content>;
};

type Post = {
  _id: string;
  categories: Array<string>;
  title: string;
  post_date: Date;
  content: Array<Content>;
};

export function convertPostJSONtoPost(postJSON: PostJSON): Post {
  return {
    ...postJSON,
    post_date: new Date(postJSON.post_date),
  };
}

export type { Post, PostJSON, PostUpload };
export default Post;

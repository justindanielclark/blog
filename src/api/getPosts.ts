import { Post, PostJSON, convertPostJSONtoPost } from "../types/Post";
import _api from "./_api";

export default async function getPosts(): Promise<Array<Post>> {
  const response = await fetch(`${_api.hostname}/posts`);
  const posts: Array<PostJSON> = await response.json();
  return posts.map((post) => convertPostJSONtoPost(post));
}

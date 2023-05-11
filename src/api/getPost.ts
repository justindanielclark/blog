import { Post, PostJSON, convertPostJSONtoPost } from "../types/Post";
import _api from "./_api";

export default async function getPost(postID: string): Promise<Post> {
  const response = await fetch(`${_api.hostname}/posts/${postID}`);
  const post: PostJSON = await response.json();
  return convertPostJSONtoPost(post);
}

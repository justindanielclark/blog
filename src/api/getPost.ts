import convertJSON_PostToPost from "../utils/convertJSONPostToPost";
import { Post, JSON_Post } from "../types/Post";
import _api from "./_api";

export default async function getPost(postID: string): Promise<Post> {
  const response = await fetch(`${_api.hostname}/posts/${postID}`);
  if (response.ok) {
    const post: JSON_Post = await response.json();
    return convertJSON_PostToPost(post);
  }
  if (response.status === 404) {
    throw new Error("404");
  }
  throw new Error("500");
}

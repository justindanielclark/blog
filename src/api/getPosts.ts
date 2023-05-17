import { Post, JSON_Post } from "../types/Post";
import convertJSON_PostToPost from "../utils/convertJSONPostToPost";
import _api from "./_api";

export default async function getPosts(): Promise<Array<Post>> {
  const response = await fetch(`${_api.hostname}/posts`);
  if (response.ok) {
    const posts: Array<JSON_Post> = await response.json();
    return posts.map((post) => convertJSON_PostToPost(post));
  }
  if (response.status === 404) {
    throw new Error("404");
  }
  throw new Error("500");
}

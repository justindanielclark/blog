import { PostUpload } from "../types/Post";
import _api from "./_api";

export default async function postPost(post: PostUpload) {
  return await fetch(`${_api.hostname}/posts`, {
    body: JSON.stringify(post),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
  });
}

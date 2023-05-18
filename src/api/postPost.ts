import _api from "./_api";
import Post from "../types/Post";

export default async function postPost(post: Omit<Post, "post_date" | "_id">) {
  try {
    const response = await fetch(`${_api.hostname}/posts`, {
      body: JSON.stringify(post),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    throw new Error("500");
  }
}

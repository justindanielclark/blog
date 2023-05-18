import _api from "./_api";
import Post from "../types/Post";

export default async function putPost(post: Omit<Post, "post_date">) {
  try {
    const response = await fetch(`${_api.hostname}/posts/${post._id}`, {
      body: JSON.stringify(post),
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    throw new Error("500");
  }
}

import { JSON_Post, Post } from "../types/Post";

export default function convertJSON_PostToPost(item: JSON_Post): Post {
  return {
    ...item,
    post_date: new Date(item.post_date),
  };
}

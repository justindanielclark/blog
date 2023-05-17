import _api from "./_api";

export default async function postPost(post: PostUpload) {
  const response = await fetch(`${_api.hostname}/posts`, {
    body: JSON.stringify(post),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}

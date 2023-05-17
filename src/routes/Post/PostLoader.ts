import Post from "../../types/Post";
import { redirect, LoaderFunctionArgs } from "react-router-dom";
import _api from "../../api/_api";
export default async function PostLoader({ params }: LoaderFunctionArgs): Promise<Post | Response> {
  try {
    if (params && params.postID) {
      return await _api.getPost(params.postID);
    }
    console.log("hit");
    return redirect("/redirected");
  } catch (err) {
    if (err instanceof Error) {
      if (err.message === "404") {
        return redirect("/redirected");
      }
    }
    return redirect("/internalservererror");
  }
}

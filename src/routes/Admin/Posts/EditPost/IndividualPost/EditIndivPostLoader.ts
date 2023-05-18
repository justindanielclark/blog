import Post from "../../../../../types/Post";
import { redirect, LoaderFunctionArgs } from "react-router-dom";
import _api from "../../../../../api/_api";
export default async function EditIndivPostLoader({
  params,
}: LoaderFunctionArgs): Promise<{ post: Post; categories: Array<string> } | Response> {
  try {
    if (params && params.postID) {
      return await Promise.all([_api.getPost(params.postID), _api.getCategories()]).then((data) => {
        return {
          post: data[0],
          categories: data[1],
        };
      });
    }
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

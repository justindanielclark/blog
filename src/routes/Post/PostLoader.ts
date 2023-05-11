import _api from "../../api/_api";
import { LoaderFunctionArgs, redirect } from "react-router-dom";

export default async function loader({ params }: LoaderFunctionArgs) {
  if (params.postID) {
    const result = await _api.getPost(params.postID);
    return result;
  }
  return redirect("/redirected");
}

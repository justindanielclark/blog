import _api from "../../../../api/_api";
import { redirect } from "react-router-dom";
export default async function CreatePostLoader() {
  try {
    return await _api.getCategories();
  } catch (err) {
    return redirect("/internalservererror");
  }
}

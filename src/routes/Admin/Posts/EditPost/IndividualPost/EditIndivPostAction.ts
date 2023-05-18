import _api from "../../../../../api/_api";
import Post from "../../../../../types/Post";
import { ActionFunctionArgs, redirect } from "react-router-dom";
export default async function EditIndivPostAction({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const returnable = Object.keys(Object.fromEntries(formData)).reduce(
    (acc, cur) => {
      if (cur === "title" || cur === "content") {
        acc[cur] = formData.get(cur) as string;
      } else {
        acc.categories.push(cur.split("_")[1]);
      }
      return acc;
    },
    {
      _id: "",
      title: "",
      content: "",
      categories: [],
    } as Omit<Post, "post_date">
  );

  returnable._id = params.postID ? params.postID : "";

  try {
    const response = await _api.putPost(returnable);
    console.log(response.status);
    if (response.ok) {
      return redirect("/admin");
    }
    return redirect("/internalservererror");
  } catch (err) {
    return redirect("/internalservererror");
  }
}

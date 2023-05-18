import { useLoaderData } from "react-router-dom";
import PostForm from "../../../../../components/PostForm/PostForm";
import Post from "../../../../../types/Post";
function EditIndivPost() {
  const data = useLoaderData() as { post: Post; categories: Array<string> };
  return (
    <PostForm
      checkedCategories={data.post.categories}
      categories={data.categories}
      content={data.post.content}
      method="PUT"
      title={data.post.title}
    />
  );
}

export default EditIndivPost;

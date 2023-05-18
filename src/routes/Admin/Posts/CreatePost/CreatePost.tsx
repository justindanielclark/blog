import { useLoaderData } from "react-router-dom";
import PostForm from "../../../../components/PostForm/PostForm";
function CreatePost() {
  const categories = useLoaderData() as Array<string>;
  return <PostForm checkedCategories={[]} categories={categories} content="" method="POST" title="" />;
}

export default CreatePost;

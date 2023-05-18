import PostListItem from "../../../../components/PostListItem/PostListItem";
import Post from "../../../../types/Post";
import { useLoaderData } from "react-router-dom";

function EditPost() {
  const posts = useLoaderData() as Array<Post>;
  return (
    <>
      {posts.length > 0 ? (
        <ul className="">
          {posts.map((post) => {
            return <PostListItem post={post} key={post._id} to={`/admin/post/edit/${post._id}`} />;
          })}
        </ul>
      ) : (
        <p>No Posts In Database...</p>
      )}
    </>
  );
}

export default EditPost;

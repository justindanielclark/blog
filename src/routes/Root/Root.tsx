import Post from "../../types/Post";
import { useLoaderData } from "react-router-dom";
import PostListItem from "../../components/PostListItem/PostListItem";

function Root() {
  const posts = useLoaderData() as Array<Post>;
  return (
    <>
      {posts.length > 0 ? (
        <ul className="">
          {posts.map((post) => {
            return <PostListItem post={post} key={post._id} to={`/post/${post._id}`} />;
          })}
        </ul>
      ) : (
        <p>No Posts In Database...</p>
      )}
    </>
  );
}

export default Root;

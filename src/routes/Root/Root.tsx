import { useLoaderData } from "react-router-dom";
import Post from "../../types/Post";
import PostListItem from "../../components/PostListItem/PostListItem";

function Root() {
  const data = useLoaderData() as Array<Post>;
  return (
    <>
      {data.length > 0 ? (
        <ul>
          {data.map((datum, index) => {
            return <PostListItem post={datum} key={index} />;
          })}
        </ul>
      ) : (
        <div>There are no Posts...</div>
      )}
    </>
  );
}

export default Root;

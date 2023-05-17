import Post from "../../types/Post";
import { useLoaderData, NavLink } from "react-router-dom";
import capitalizeFirstLetters from "../../utils/capitalizeFirstLetters";
import createDateString from "../../utils/createDateString";
function Root() {
  const posts = useLoaderData() as Array<Post>;
  return (
    <>
      {posts.length > 0 ? (
        <ul className="">
          {posts.map((post) => {
            return <PostListItem post={post} key={post._id} />;
          })}
        </ul>
      ) : (
        <p>No Posts In Database...</p>
      )}
    </>
  );
}

type PostListItemProps = {
  post: Post;
};
function PostListItem({ post }: PostListItemProps) {
  return (
    <li className="hover:bg-slate-800 hover:text-white p-3">
      <NavLink to={`/post/${post._id}`} rel="true">
        <h1 className="font-bold text-lg">{post.title}</h1>
        <p className="ml-1 font-bold text-sm">Posted: {createDateString(post.post_date)}</p>
        {post.categories.length > 0 && (
          <p className="ml-2 text-sm">
            <span className="mr-2">Categories:</span>
            {post.categories.map((category, idx) => (
              <span key={idx} className="mr-2">
                {capitalizeFirstLetters(category)}
              </span>
            ))}
          </p>
        )}
      </NavLink>
    </li>
  );
}

export default Root;

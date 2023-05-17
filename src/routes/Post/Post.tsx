import Post from "../../types/Post";
import { Link, useLoaderData } from "react-router-dom";
import capitalizeFirstLetters from "../../utils/capitalizeFirstLetters";
import createDateString from "../../utils/createDateString";

function Post() {
  const post = useLoaderData() as Post;
  return (
    <>
      <Link to={"/"}> {"<-"} Back to Homepage</Link>
      <h1 className="font-bold text-xl">{post.title}</h1>
      <p>Posted: {createDateString(post.post_date)}</p>
      <p>
        Categories:{" "}
        {post.categories.map((category, idx) => (
          <span key={idx} className="ml-2">
            {capitalizeFirstLetters(category)}
          </span>
        ))}
      </p>
      <div className="p-3" dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </>
  );
}

export default Post;

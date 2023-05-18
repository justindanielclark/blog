import Post from "../../types/Post";
import { NavLink } from "react-router-dom";
import createDateString from "../../utils/createDateString";
import capitalizeFirstLetters from "../../utils/capitalizeFirstLetters";

type PostListItemProps = {
  post: Post;
  to: string;
};
export default function PostListItem({ post, to }: PostListItemProps) {
  return (
    <li className="hover:bg-slate-800 hover:text-white p-3">
      <NavLink to={to} rel="true">
        <h1 className="font-bold text-lg">{post.title}</h1>
        <p className="ml-1 font-bold text-sm">Posted: {createDateString(post.post_date)}</p>
        {post.categories.length > 0 && (
          <p className="ml-2 text-xs my-2">
            {post.categories.map((category, idx) => (
              <>
                <span key={idx} className="p-0.5 bg-blue-800 rounded text-white">
                  {capitalizeFirstLetters(category)}
                </span>
                {idx !== post.categories.length - 1 && <span className="mx-2 text-xs font-bold">/</span>}
              </>
            ))}
          </p>
        )}
      </NavLink>
    </li>
  );
}

import Post from "../../types/Post";
import createDateString from "../../utils/createDateString";

type Props = {
  post: Post;
};

function PostListItem({ post }: Props) {
  return (
    <li className="p-2">
      <a href={`/post/${post._id}`}>
        <h2 className="font-bold text-xl pr-2">{post.title}</h2>
        <h3 className="text-sm">{createDateString(post.post_date)}</h3>
      </a>
    </li>
  );
}

export default PostListItem;

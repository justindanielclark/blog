import { Link, Outlet } from "react-router-dom";
function Admin() {
  return (
    <div className="flex flex-row">
      <ul className="p-3 h-full bg-red-600">
        <li>
          <Link to={"./post/new"}>Create New Post</Link>
        </li>
        <li>
          <Link to={"./post/edit"}>Edit Post</Link>
        </li>
        <li>
          <Link to={"./post/delete"}>Delete Post</Link>
        </li>
        <li>
          <Link to={"./image/new"}>Upload New Image To Server</Link>
        </li>
        <li>
          <Link to={"./image/delete"}>Delete Image From Server</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Admin;

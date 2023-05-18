import { Link, Outlet } from "react-router-dom";
function Admin() {
  return (
    <div className="flex-1 flex flex-row">
      <div className="p-3">
        <h1 className="font-bold text-lg">Actions:</h1>
        <ul>
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
      </div>

      <Outlet />
    </div>
  );
}

export default Admin;

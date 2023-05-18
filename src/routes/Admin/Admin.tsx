import { NavLink, Outlet } from "react-router-dom";
function Admin() {
  return (
    <div className="flex-1 flex flex-row">
      <div className="p-3">
        <h1 className="font-bold text-lg">Actions:</h1>
        <ul>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "bg-blue-200" : "")} to={"./post/new"}>
              Create New Post
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "bg-blue-200" : "")} to={"./post/edit"}>
              Edit Post
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "bg-blue-200" : "")} to={"./post/delete"}>
              Delete Post
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "bg-blue-200" : "")} to={"./image/new"}>
              Upload New Image To Server
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "bg-blue-200" : "")} to={"./image/delete"}>
              Delete Image From Server
            </NavLink>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}

export default Admin;

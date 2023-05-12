import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./routes/Layout/Layout";
import Admin from "./routes/Admin/Admin";
import AdminLoader from "./routes/Admin/AdminLoader";
import AdminAction from "./routes/Admin/AdminAction";

import Root from "./routes/Root/Root";
import RootLoader from "./routes/Root/RootLoader";
import Post from "./routes/Post/Post";
import PostLoader from "./routes/Post/PostLoader";
import Redirect from "./routes/Redirect/Redirect";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "*",
          element: <Redirect />,
        },
        {
          index: true,
          element: <Root />,
          loader: RootLoader,
        },
        {
          path: "admin",
          element: <Admin />,
          loader: AdminLoader,
          action: AdminAction,
        },
        {
          path: "redirect",
          element: <Redirect />,
        },
        {
          path: "post/:postID",
          element: <Post />,
          loader: PostLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

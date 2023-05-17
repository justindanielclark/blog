import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Admin from "./routes/Admin/Admin";
import Layout from "./routes/Layout/Layout";
import Post from "./routes/Post/Post";
import PostLoader from "./routes/Post/PostLoader";
import Root from "./routes/Root/Root";
import RootLoader from "./routes/Root/RootLoader";
import Redirect from "./routes/Redirect/Redirect";
import InternalServerError from "./routes/InternalServerError/InternalServerError";
import Login from "./routes/Login/Login";

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
          path: "login",
          element: <Login />,
        },
        {
          path: "admin",
          element: <Admin />,
          children: [
            {
              path: "post/new",
              element: <div>I am trying to create a new post</div>,
            },
            {
              path: "post/edit",
              element: <div>I am trying to edit a post</div>,
            },
            {
              path: "post/delete",
              element: <div>I am trying to delete a post</div>,
            },
            {
              path: "image/new",
              element: <div>I am trying to create a new image</div>,
            },
            {
              path: "image/delete",
              element: <div>I am trying to delete an old image</div>,
            },
          ],
        },
        {
          index: true,
          element: <Root />,
          loader: RootLoader,
        },
        {
          path: "redirect",
          element: <Redirect />,
        },
        {
          path: "internalservererror",
          element: <InternalServerError />,
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

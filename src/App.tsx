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
import CreatePost from "./routes/Admin/Posts/CreatePost/CreatePost";
import CreatePostLoader from "./routes/Admin/Posts/CreatePost/CreatePostLoader";
import CreatePostAction from "./routes/Admin/Posts/CreatePost/CreatePostAction";
import EditPost from "./routes/Admin/Posts/EditPost/EditPost";
import EditPostLoader from "./routes/Admin/Posts/EditPost/EditPostLoader";
import EditIndivPost from "./routes/Admin/Posts/EditPost/IndividualPost/EditIndivPost";
import EditIndivPostLoader from "./routes/Admin/Posts/EditPost/IndividualPost/EditIndivPostLoader";
import EditIndivPostAction from "./routes/Admin/Posts/EditPost/IndividualPost/EditIndivPostAction";
import UploadImages from "./routes/Admin/Images/UploadImage/UploadImages";
import UploadImageAction from "./routes/Admin/Images/UploadImage/UploadImageAction";

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
              element: <CreatePost />,
              loader: CreatePostLoader,
              action: CreatePostAction,
            },
            {
              path: "post/edit",
              element: <EditPost />,
              loader: EditPostLoader,
            },
            {
              path: "post/edit/:postID",
              element: <EditIndivPost />,
              loader: EditIndivPostLoader,
              action: EditIndivPostAction,
            },
            {
              path: "post/delete",
              element: <div>I am trying to delete a post</div>,
            },
            {
              path: "images/new",
              element: <UploadImages />,
              action: UploadImageAction,
            },
            {
              path: "images/delete",
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

import getPosts from "./getPosts";
import getPost from "./getPost";
import getCategories from "./getCategories";
import postPost from "./postPost";
const _api = {
  hostname: "http://localhost:3000",
  //GET
  getPost,
  getPosts,
  getCategories,
  //POST
  postPost,
};

export default _api;

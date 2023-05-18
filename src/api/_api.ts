import getPosts from "./getPosts";
import getPost from "./getPost";
import getCategories from "./getCategories";
import postPost from "./postPost";
import putPost from "./putPost";
const _api = {
  hostname: "http://localhost:3000",
  //GET
  getPost,
  getPosts,
  getCategories,
  //POST
  postPost,
  //PUT
  putPost,
};

export default _api;

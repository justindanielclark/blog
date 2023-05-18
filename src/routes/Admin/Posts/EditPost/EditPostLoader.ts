import _api from "../../../../api/_api";
export default async function loader() {
  const data = await _api.getPosts();
  console.log(data);
  return data;
}

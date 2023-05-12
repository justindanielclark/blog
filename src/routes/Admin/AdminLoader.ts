import _api from "../../api/_api";
export default async function loader() {
  const categories = await _api.getCategories();
  return categories;
}
